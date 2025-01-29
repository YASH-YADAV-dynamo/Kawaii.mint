// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Plot from 'react-plotly.js';

// const CoinPredictionChart = ({ coinId }) => {
//   const [historicalData, setHistoricalData] = useState([]);
//   const [predictedData, setPredictedData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:5000/predict/${coinId}`);
        
//         if (response.data) {
//           setHistoricalData(response.data.historical_data);
//           setPredictedData(response.data.predicted_prices);
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [coinId]);

//   const formatDataForPlotly = () => {
//     const dates = [];
//     const prices = [];

//     historicalData.forEach((price, index) => {
//       const date = new Date();
//       date.setDate(date.getDate() - (historicalData.length - index));
//       dates.push(date.toISOString().split('T')[0]); // Date in YYYY-MM-DD format
//       prices.push(price);
//     });

//     const predictedDates = [];
//     const predictedPrices = [];
//     for (let i = 0; i < predictedData.length; i++) {
//       const date = new Date();
//       date.setDate(date.getDate() + (i + 1)); // Predict for next days
//       predictedDates.push(date.toISOString().split('T')[0]);
//       predictedPrices.push(predictedData[i]);
//     }

//     return {
//       dates: [...dates, ...predictedDates],
//       prices: [...prices, ...predictedPrices],
//     };
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const { dates, prices } = formatDataForPlotly();

//   return (
//     <div>
//       <h2>{coinId} Price Prediction</h2>
//       <Plot
//         data={[
//           {
//             x: dates,
//             y: prices,
//             type: 'scatter',
//             mode: 'lines',
//             name: 'Price Prediction',
//             line: { color: 'blue' },
//           },
//         ]}
//         layout={{
//           title: `${coinId.charAt(0).toUpperCase() + coinId.slice(1)} Price Prediction`,
//           xaxis: {
//             title: 'Date',
//             showgrid: true,
//           },
//           yaxis: {
//             title: 'Price (USD)',
//             showgrid: true,
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default CoinPredictionChart;








// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ReactApexChart from "react-apexcharts";

// const CoinPredictionChart = ({ coinId }) => {
//   const [historicalData, setHistoricalData] = useState([]);
//   const [predictedPrices, setPredictedPrices] = useState([]);
//   const [options, setOptions] = useState({
//     chart: {
//       id: "coin-chart",
//       type: "line",
//       height: 350,
//     },
//     xaxis: {
//       categories: [],
//     },
//     title: {
//       text: `Predicted Prices for ${coinId}`,
//       align: "center",
//     },
//     yaxis: {
//       title: {
//         text: "Price (USD)",
//       },
//     },
//   });

//   // Fetch data from the backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/predict/${coinId}`);
//         const data = response.data;
//         const historicalPrices = data.historical_data;
//         const predictedPrices = data.predicted_prices;

//         // Prepare data for chart
//         const dates = historicalPrices.map((_, index) => `Day ${index + 1}`);
//         setHistoricalData(historicalPrices);
//         setPredictedPrices(predictedPrices);

//         // Update options with new categories for X axis
//         setOptions((prevState) => ({
//           ...prevState,
//           xaxis: {
//             categories: [...dates, "Predicted..."],
//           },
//         }));
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, [coinId]);

//   const series = [
//     {
//       name: "Price",
//       data: [...historicalData, ...predictedPrices],
//     },
//   ];

//   return (
//     <div>
//       <h2>Coin Prediction Chart</h2>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="line"
//         height={350}
//       />
//     </div>
//   );
// };

// export default CoinPredictionChart;















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ReactApexChart from "react-apexcharts";

// const CoinPredictionChart = ({ coinId }: { coinId: string }) => {
//   const [historicalData, setHistoricalData] = useState<number[]>([]);
//   const [predictedPrices, setPredictedPrices] = useState<number[]>([]);
//   const [coinDetails, setCoinDetails] = useState<any>(null);
//   const [options, setOptions] = useState({
//     chart: {
//       id: "coin-chart",
//       type: "line",
//       height: 350,
//     },
//     xaxis: {
//       categories: [],
//     },
//     title: {
//       text: `Predicted Prices for ${coinId}`,
//       align: "center",
//     },
//     yaxis: {
//       title: {
//         text: "Price (USD)",
//       },
//     },
//   });

//   // Fetch data from the backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/predict/${coinId}`);
//         const data = response.data;
    
//         // Validate the structure of the response data
//         if (Array.isArray(data.historical_data) && Array.isArray(data.predicted_prices) && data.coin_details) {
//           const historicalPrices = data.historical_data;
//           const predictedPrices = data.predicted_prices;
//           const coinInfo = data.coin_details;
    
//           const dates = historicalPrices.map((_, index) => `Day ${index + 1}`);
//           setHistoricalData(historicalPrices);
//           setPredictedPrices(predictedPrices);
//           setCoinDetails(coinInfo);
    
//           setOptions((prevState) => ({
//             ...prevState,
//             xaxis: {
//               categories: [...dates, "Predicted..."],
//             },
//           }));
//         } else {
//           console.error('Data structure is not as expected:', data);
//         }
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
    

//     fetchData();
//   }, [coinId]);

//   const series = [
//     {
//       name: "Price",
//       data: [...historicalData, ...predictedPrices],
//     },
//   ];

//   return (
//     <div>
//       <h2>Coin Prediction Chart</h2>

//       {/* Coin Details Section */}
//       {coinDetails && (
//         <div style={{ marginBottom: "20px" }}>
//           <h3>{coinDetails.name}</h3>
//           <p>{coinDetails.description}</p>
//           <p>Market Cap: {coinDetails.market_cap}</p>
//           <p>Current Price: ${coinDetails.current_price}</p>
//           <p>24h Volume: {coinDetails.volume_24h}</p>
//         </div>
//       )}

//       {/* Chart */}
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="line"
//         height={350}
//       />
//     </div>
//   );
// };

// export default CoinPredictionChart;















import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
// import "./App.css";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PredictionResponse {
  coin_id: string;
  historical_data: number[];
  predicted_prices: number[];
}

const App: React.FC = () => {
  const [coin, setCoin] = useState<string>("dogecoin");
  const [chartData, setChartData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPrediction = async () => {
    setError(null);
    console.log(coin);
    try {
      const response = await axios.get<PredictionResponse>(`http://127.0.0.1:5000/predict/${coin}`);
      const data = response.data;
      console.log(data);

      if (!data.historical_data || !data.predicted_prices) {
        setError("No data available");
        return;
      }

      // Prepare labels for the chart
      const labels = Array.from({ length: data.historical_data.length + data.predicted_prices.length }, (_, i) => 
        i < data.historical_data.length ? `Day ${i - data.historical_data.length}` : `Future ${i - data.historical_data.length + 1}`
      );

      setChartData({
        labels,
        datasets: [
          {
            label: "Historical Prices",
            data: [...data.historical_data, ...new Array(data.predicted_prices.length).fill(null)],
            borderColor: "blue",
            borderWidth: 2,
            fill: false,
          },
          {
            label: "Predicted Prices",
            data: [...new Array(data.historical_data.length).fill(null), ...data.predicted_prices],
            borderColor: "red",
            borderWidth: 2,
            borderDash: [5, 5], // Dashed line for predictions
            fill: false,
          },
        ],
      });
    } catch (err) {
      setError("Failed to fetch data. Try again.");
    }
  };

  return (
    <div className="App">
      <h1>Memecoin Price Prediction</h1>
      <select value={coin} onChange={(e) => setCoin(e.target.value)}>
        <option value="dogecoin">Dogecoin</option>
        <option value="shiba-inu">Shiba Inu</option>
        <option value="dogelon-mars">Dogelon Mars</option>
        <option value="floki-inu">Floki Inu</option>
        <option value="baby-doge-coin">Baby Doge Coin</option>
      </select>
      <button onClick={fetchPrediction}>Predict</button>

      {error && <p className="error">{error}</p>}

      {chartData && (
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
};

export default App;
