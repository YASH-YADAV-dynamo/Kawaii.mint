

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import { FaArrowLeft } from "react-icons/fa6";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
}

const App: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);
  const [candlestickData, setCandlestickData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [timeframe, setTimeframe] = useState("1d"); // Default timeframe
  const [amount, setAmount] = useState<number>(0); // Amount user wants to spend
  const [page, setPage] = useState<number>(1); // Current page number

  const timeframes: Record<string, string> = {
    "1d": "1m",
    "1w": "15m",
    "1m": "1h",
    "1y": "1d",
  };

  useEffect(() => {
    // Fetch cryptocurrency list from CoinGecko API
    const fetchCoins = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 20, // 10 coins per page
              page: page,
              sparkline: false,
            },
          }
        );
        setCoins(res.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, [page]); // Re-fetch coins when page changes

  useEffect(() => {
    if (selectedCoin) {
      // Fetch candlestick data from Binance API
      const fetchCandlestickData = async () => {
        setLoading(true);
        try {
          const symbol = `${selectedCoin.toLowerCase()}usdt`;
          const interval = timeframes[timeframe];
          const res = await axios.get(
            `https://api.binance.com/api/v3/klines`,
            {
              params: {
                symbol: symbol.toUpperCase(),
                interval,
                limit: 100, // Fetch 100 candlesticks
              },
            }
          );
          const data = res.data.map((candle: any) => ({
            x: new Date(candle[0]),
            y: [candle[1], candle[2], candle[3], candle[4]].map(parseFloat), // [open, high, low, close]
          }));
          setCandlestickData(data);
        } catch (error) {
          console.error("Error fetching candlestick data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCandlestickData();
    }
  }, [selectedCoin, timeframe]);

  const chartOptions = {
    chart: {
      type: "candlestick",
      height: "100%",
      width: "100%",
    },
    title: {
      text: `${selectedCoin?.toUpperCase()} Candlestick Chart`,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const handleBuy = () => {
    alert(
      `You are buying ${amount / (coins.find((coin) => coin.symbol === selectedCoin)?.current_price || 1)} ${
        selectedCoin?.toUpperCase()
      } for $${amount}`
    );
  };

  const handleSell = () => {
    alert(
      `You are selling ${amount / (coins.find((coin) => coin.symbol === selectedCoin)?.current_price || 1)} ${
        selectedCoin?.toUpperCase()
      } for $${amount}`
    );
  };

  return (
    <div className="p-4">
      {!selectedCoin ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Crypto Coins</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6">
            {coins.map((coin) => (
              <li
                key={coin.id}
                className="p-4 border-1 border-slate-800 hover:border-slate-700 rounded shadow cursor-pointer hover:shadow-lg hover:border-2"
                onClick={() => setSelectedCoin(coin.symbol)}
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="h-16 w-16 mx-auto mb-2"
                />
                <h2 className="text-lg font-semibold">{coin.name}</h2>
                <p>Price: ${coin.current_price.toFixed(2)}</p>
                <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-blue-800 rounded hover:bg-gray-1100"
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="text-lg font-semibold">Page {page}</span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-blue-800 rounded hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Candlestick Chart */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <button
                onClick={() => setSelectedCoin(null)}
                className="mb-0 py-2 px-3 h-10 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                <FaArrowLeft />
              </button>
              <h1 className="text-2xl font-bold">
                {selectedCoin.toUpperCase()} Candlestick Chart
              </h1>
              <div className="space-x-3">
                {Object.keys(timeframes).map((key) => (
                  <button
                    key={key}
                    onClick={() => setTimeframe(key)}
                    className={`px-3 py-2 rounded ${
                      timeframe === key
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {key.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            {loading ? (
              <p>Loading candlestick data...</p>
            ) : candlestickData.length > 0 ? (
              <div className="w-full h-[500px]">
                <ReactApexChart
                  options={chartOptions}
                  series={[{ data: candlestickData }]}
                  type="candlestick"
                  height="100%"
                  width="100%"
                />
              </div>
            ) : (
              <p>No candlestick data available</p>
            )}
          </div>

          {/* Right: Buy/Sell Section */}
          <div className="w-full lg:w-1/4 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Buy/Sell {selectedCoin?.toUpperCase()}</h2>
            <div className="mb-4">
              <label className="block mb-2 text-gray-600">Enter Amount ($):</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className="w-full p-2 border rounded"
                placeholder="Enter amount in USD"
              />
            </div>
            <div className="mb-4">
              <p>
                You will get: {" "}
                <span className="font-bold">
                  {amount /
                    (coins.find((coin) => coin.symbol === selectedCoin)?.current_price || 1)}{" "}
                  {selectedCoin?.toUpperCase()}
                </span>
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleBuy}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Buy
              </button>
              <button
                onClick={handleSell}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

