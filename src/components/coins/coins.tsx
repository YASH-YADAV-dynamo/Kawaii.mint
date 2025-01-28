// import React, { useState, useEffect } from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { ArrowUp, ArrowDown } from 'lucide-react';

// // Note: In a real implementation, you would need to load the TradingView widget script
// // in your HTML file or use a library like react-tradingview-widget

// const ParticleBackground = () => {
//   return (
//     <div className="fixed inset-0 z-0">
//       {Array.from({ length: 50 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute bg-blue-300 rounded-full opacity-20 animate-float"
//           style={{
//             width: Math.random() * 6 + 2 + 'px',
//             height: Math.random() * 6 + 2 + 'px',
//             left: Math.random() * 100 + '%',
//             top: Math.random() * 100 + '%',
//             animationDuration: Math.random() * 10 + 10 + 's',
//             animationDelay: Math.random() * 5 + 's'
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// const CryptoList = () => {
//   const [cryptoData, setCryptoData] = useState([]);
//   const [selectedCoin, setSelectedCoin] = useState(null);
//   const [amount, setAmount] = useState('');

//   // Sample data - replace with real API data
//   useEffect(() => {
//     // Simulating API call
//     setCryptoData([
//       {
//         id: 'bitcoin',
//         name: 'Bitcoin',
//         symbol: 'BTC',
//         price: 48250.32,
//         marketCap: 934567890123,
//         change24h: 2.5,
//         image: '/api/placeholder/32/32'
//       },
//       {
//         id: 'ethereum',
//         name: 'Ethereum',
//         symbol: 'ETH',
//         price: 2890.15,
//         marketCap: 345678901234,
//         change24h: -1.2,
//         image: '/api/placeholder/32/32'
//       },
//       // Add more coins here
//     ]);
//   }, []);

//   const handleTransaction = (type) => {
//     console.log(`${type} ${amount} of ${selectedCoin.symbol}`);
//     // Implement actual transaction logic here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
//       <ParticleBackground />
      
//       <div className="relative z-10 max-w-7xl mx-auto p-6">
//         <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//           Crypto Dashboard
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {cryptoData.map((coin) => (
//             <Card 
//               key={coin.id} 
//               className="bg-opacity-20 bg-blue-900 backdrop-blur-lg border border-blue-800 hover:border-purple-500 
//                 transform hover:scale-105 transition-all duration-300"
//             >
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-3">
//                     <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
//                     <div>
//                       <h2 className="font-bold">{coin.name}</h2>
//                       <p className="text-sm text-gray-400">{coin.symbol}</p>
//                     </div>
//                   </div>
//                   <span className={`flex items-center ${coin.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
//                     {coin.change24h >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
//                     {Math.abs(coin.change24h)}%
//                   </span>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Price</span>
//                     <span className="font-bold">${coin.price.toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Market Cap</span>
//                     <span className="font-bold">${(coin.marketCap / 1e9).toFixed(2)}B</span>
//                   </div>

//                   <Dialog>
//                     <DialogTrigger asChild>
//                       <Button 
//                         className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
//                         onClick={() => setSelectedCoin(coin)}
//                       >
//                         Trade {coin.symbol}
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent className="bg-gray-900 text-white border border-blue-800 max-w-4xl w-full">
//                       <DialogHeader>
//                         <DialogTitle className="text-2xl flex items-center gap-2">
//                           <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
//                           {coin.name} ({coin.symbol})
//                         </DialogTitle>
//                       </DialogHeader>
                      
//                       <div className="mt-4 space-y-4">
//                         {/* TradingView Widget */}
//                         <div className="h-[600px] bg-gray-800 rounded-lg overflow-hidden">
//                           <div
//                             key={coin.symbol}
//                             id="tradingview_widget"
//                             className="h-full"
//                             dangerouslySetInnerHTML={{
//                               __html: `
//                                 <div class="tradingview-widget-container">
//                                   <div id="tradingview_${coin.symbol}"></div>
//                                   <script type="text/javascript">
//                                     new TradingView.widget({
//                                       "width": "100%",
//                                       "height": "100%",
//                                       "symbol": "BINANCE:${coin.symbol}USDT",
//                                       "interval": "D",
//                                       "timezone": "Etc/UTC",
//                                       "theme": "dark",
//                                       "style": "1",
//                                       "locale": "en",
//                                       "toolbar_bg": "#f1f3f6",
//                                       "enable_publishing": false,
//                                       "allow_symbol_change": true,
//                                       "container_id": "tradingview_${coin.symbol}"
//                                     });
//                                   </script>
//                                 </div>
//                               `
//                             }}
//                           />
//                         </div>

//                         <div className="flex gap-4">
//                           <Input
//                             type="number"
//                             placeholder="Amount"
//                             value={amount}
//                             onChange={(e) => setAmount(e.target.value)}
//                             className="bg-gray-800 border-blue-800"
//                           />
//                           <Button 
//                             className="flex-1 bg-green-600 hover:bg-green-700"
//                             onClick={() => handleTransaction('buy')}
//                           >
//                             Buy
//                           </Button>
//                           <Button 
//                             className="flex-1 bg-red-600 hover:bg-red-700"
//                             onClick={() => handleTransaction('sell')}
//                           >
//                             Sell
//                           </Button>
//                         </div>
//                       </div>
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CryptoList;







// // types.ts
// interface CryptoData {
//     id: string;
//     name: string;
//     symbol: string;
//     price: number;
//     marketCap: number;
//     change24h: number;
//     image: string;
//   }
  
//   // CryptoList.tsx
//   import React, { useState, useEffect } from 'react';
//   import { Card, CardContent } from "@/components/ui/card";
//   import { Button } from "@/components/ui/button";
//   import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
//   import { Input } from "@/components/ui/input";
//   import { ArrowUp, ArrowDown } from 'lucide-react';
  
//   interface ParticleProps {
//     key: number;
//     style: React.CSSProperties;
//   }
  
//   const Particle: React.FC<ParticleProps> = ({ style }) => (
//     <div
//       className="absolute bg-blue-300 rounded-full opacity-20 animate-float"
//       style={style}
//     />
//   );
  
//   const ParticleBackground: React.FC = () => {
//     return (
//       <div className="fixed inset-0 z-0">
//         {Array.from({ length: 50 }).map((_, i) => (
//           <Particle
//             key={i}
//             style={{
//               width: `${Math.random() * 6 + 2}px`,
//               height: `${Math.random() * 6 + 2}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 10 + 10}s`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>
//     );
//   };
  
//   interface CoinCardProps {
//     coin: CryptoData;
//     onSelect: (coin: CryptoData) => void;
//   }
  
//   const CoinCard: React.FC<CoinCardProps> = ({ coin, onSelect }) => (
//     <Card className="bg-opacity-20 bg-blue-900 backdrop-blur-lg border border-blue-800 hover:border-purple-500 
//       transform hover:scale-105 transition-all duration-300">
//       <CardContent className="p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-3">
//             <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
//             <div>
//               <h2 className="font-bold">{coin.name}</h2>
//               <p className="text-sm text-gray-400">{coin.symbol}</p>
//             </div>
//           </div>
//           <span className={`flex items-center ${coin.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
//             {coin.change24h >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
//             {Math.abs(coin.change24h)}%
//           </span>
//         </div>
  
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <span className="text-gray-400">Price</span>
//             <span className="font-bold">${coin.price.toLocaleString()}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-400">Market Cap</span>
//             <span className="font-bold">${(coin.marketCap / 1e9).toFixed(2)}B</span>
//           </div>
  
//           <Button 
//             className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
//             onClick={() => onSelect(coin)}
//           >
//             Trade {coin.symbol}
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
  
//   interface TradingViewWidgetProps {
//     symbol: string;
//   }
  
//   const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => (
//     <div className="h-[600px] bg-gray-800 rounded-lg overflow-hidden">
//       <div
//         id="tradingview_widget"
//         className="h-full"
//         dangerouslySetInnerHTML={{
//           __html: `
//             <div class="tradingview-widget-container">
//               <div id="tradingview_${symbol}"></div>
//               <script type="text/javascript">
//                 new TradingView.widget({
//                   "width": "100%",
//                   "height": "100%",
//                   "symbol": "BINANCE:${symbol}USDT",
//                   "interval": "D",
//                   "timezone": "Etc/UTC",
//                   "theme": "dark",
//                   "style": "1",
//                   "locale": "en",
//                   "toolbar_bg": "#f1f3f6",
//                   "enable_publishing": false,
//                   "allow_symbol_change": true,
//                   "container_id": "tradingview_${symbol}"
//                 });
//               </script>
//             </div>
//           `
//         }}
//       />
//     </div>
//   );
  
//   const CryptoList: React.FC = () => {
//     const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
//     const [selectedCoin, setSelectedCoin] = useState<CryptoData | null>(null);
//     const [amount, setAmount] = useState<string>('');
  
//     useEffect(() => {
//       // Simulating API call
//       const fetchData = async () => {
//         // In a real application, fetch from an API
//         const sampleData: CryptoData[] = [
//           {
//             id: 'bitcoin',
//             name: 'Bitcoin',
//             symbol: 'BTC',
//             price: 48250.32,
//             marketCap: 934567890123,
//             change24h: 2.5,
//             image: '/api/placeholder/32/32'
//           },
//           {
//             id: 'ethereum',
//             name: 'Ethereum',
//             symbol: 'ETH',
//             price: 2890.15,
//             marketCap: 345678901234,
//             change24h: -1.2,
//             image: '/api/placeholder/32/32'
//           }
//         ];
//         setCryptoData(sampleData);
//       };
  
//       fetchData();
//     }, []);
  
//     const handleTransaction = (type: 'buy' | 'sell') => {
//       if (!selectedCoin || !amount) return;
//       console.log(`${type} ${amount} of ${selectedCoin.symbol}`);
//       // Implement actual transaction logic here
//     };
  
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
//         <ParticleBackground />
        
//         <div className="relative z-10 max-w-7xl mx-auto p-6">
//           <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//             Crypto Dashboard
//           </h1>
  
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {cryptoData.map((coin) => (
//               <Dialog key={coin.id}>
//                 <DialogTrigger asChild>
//                   <div>
//                     <CoinCard coin={coin} onSelect={setSelectedCoin} />
//                   </div>
//                 </DialogTrigger>
//                 <DialogContent className="bg-gray-900 text-white border border-blue-800 max-w-4xl w-full">
//                   <DialogHeader>
//                     <DialogTitle className="text-2xl flex items-center gap-2">
//                       <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
//                       {coin.name} ({coin.symbol})
//                     </DialogTitle>
//                   </DialogHeader>
                  
//                   <div className="mt-4 space-y-4">
//                     <TradingViewWidget symbol={coin.symbol} />
  
//                     <div className="flex gap-4">
//                       <Input
//                         type="number"
//                         placeholder="Amount"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         className="bg-gray-800 border-blue-800"
//                       />
//                       <Button 
//                         className="flex-1 bg-green-600 hover:bg-green-700"
//                         onClick={() => handleTransaction('buy')}
//                       >
//                         Buy
//                       </Button>
//                       <Button 
//                         className="flex-1 bg-red-600 hover:bg-red-700"
//                         onClick={() => handleTransaction('sell')}
//                       >
//                         Sell
//                       </Button>
//                     </div>
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default CryptoList;









// import React, { useState, useEffect, useRef } from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { ArrowUp, ArrowDown, X } from 'lucide-react';

// interface CryptoData {
//   id: string;
//   name: string;
//   symbol: string;
//   price: number;
//   marketCap: number;
//   change24h: number;
//   image: string;
//   quantity?: number;
// }

// interface Transaction {
//   type: 'buy' | 'sell';
//   amount: number;
//   price: number;
//   symbol: string;
//   timestamp: Date;
// }

// interface Notification {
//   id: string;
//   message: string;
//   type: 'success' | 'error';
// }

// const Notification: React.FC<{ notification: Notification; onClose: (id: string) => void }> = ({ notification, onClose }) => (
//   <div
//     className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center justify-between gap-4 z-50 ${
//       notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'
//     } text-white`}
//   >
//     <span>{notification.message}</span>
//     <button onClick={() => onClose(notification.id)} className="hover:opacity-80">
//       <X size={18} />
//     </button>
//   </div>
// );

// const TradingViewWidget: React.FC<{ symbol: string }> = ({ symbol }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/tv.js';
//     script.async = true;
//     script.onload = () => {
//       if (containerRef.current && window.TradingView) {
//         new window.TradingView.widget({
//           autosize: true,
//           symbol: `BINANCE:${symbol}USDT`,
//           interval: "D",
//           timezone: "Etc/UTC",
//           theme: "dark",
//           style: "1",
//           locale: "en",
//           enable_publishing: false,
//           allow_symbol_change: false,
//           container_id: containerRef.current.id,
//           hide_side_toolbar: false,
//         });
//       }
//     };
//     document.head.appendChild(script);

//     return () => {
//       script.remove();
//     };
//   }, [symbol]);

//   return (
//     <div className="h-[600px] bg-gray-800 rounded-lg overflow-hidden">
//       <div ref={containerRef} id={`tradingview_${symbol}`} className="h-full" />
//     </div>
//   );
// };

// const ParticleBackground: React.FC = () => (
//   <div className="fixed inset-0 z-0">
//     {Array.from({ length: 50 }).map((_, i) => (
//       <div
//         key={i}
//         className="absolute bg-blue-300 rounded-full opacity-20"
//         style={{
//           width: `${Math.random() * 6 + 2}px`,
//           height: `${Math.random() * 6 + 2}px`,
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//           animation: `float ${Math.random() * 10 + 10}s linear infinite ${Math.random() * 5}s`,
//         }}
//       />
//     ))}
//   </div>
// );

// const CryptoList: React.FC = () => {
//   const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
//   const [selectedCoin, setSelectedCoin] = useState<CryptoData | null>(null);
//   const [amount, setAmount] = useState<string>('');
//   const [portfolio, setPortfolio] = useState<Record<string, number>>({});
//   const [notifications, setNotifications] = useState<Notification[]>([]);
//   const [dialogOpen, setDialogOpen] = useState(false);

//   const showNotification = (message: string, type: 'success' | 'error') => {
//     const id = Math.random().toString(36).substring(7);
//     setNotifications(prev => [...prev, { id, message, type }]);
//     setTimeout(() => {
//       setNotifications(prev => prev.filter(n => n.id !== id));
//     }, 3000);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
//         );
//         const data = await response.json();
        
//         const formattedData: CryptoData[] = data.map((coin: any) => ({
//           id: coin.id,
//           name: coin.name,
//           symbol: coin.symbol.toUpperCase(),
//           price: coin.current_price,
//           marketCap: coin.market_cap,
//           change24h: coin.price_change_percentage_24h,
//           image: coin.image,
//           quantity: portfolio[coin.symbol.toUpperCase()] || 0
//         }));
        
//         setCryptoData(formattedData);
//       } catch (error) {
//         showNotification('Failed to fetch crypto data', 'error');
//       }
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 30000);
//     return () => clearInterval(interval);
//   }, [portfolio]);

//   const handleTransaction = (type: 'buy' | 'sell') => {
//     if (!selectedCoin || !amount || isNaN(Number(amount)) || Number(amount) <= 0) {
//       showNotification('Please enter a valid amount', 'error');
//       return;
//     }

//     const numAmount = Number(amount);
//     const currentQuantity = portfolio[selectedCoin.symbol] || 0;

//     if (type === 'sell' && numAmount > currentQuantity) {
//       showNotification(`Insufficient ${selectedCoin.symbol} balance`, 'error');
//       return;
//     }

//     const newPortfolio = { ...portfolio };
//     newPortfolio[selectedCoin.symbol] = type === 'buy' 
//       ? (currentQuantity + numAmount)
//       : (currentQuantity - numAmount);

//     setPortfolio(newPortfolio);
    
//     setCryptoData(prev => prev.map(coin => 
//       coin.symbol === selectedCoin.symbol 
//         ? { ...coin, quantity: newPortfolio[coin.symbol] }
//         : coin
//     ));

//     showNotification(
//       `Successfully ${type === 'buy' ? 'bought' : 'sold'} ${numAmount} ${selectedCoin.symbol}`,
//       'success'
//     );

//     setAmount('');
//     setDialogOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
//       <ParticleBackground />
      
//       <div className="relative z-10 max-w-7xl mx-auto p-6">
//         <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//           Crypto Dashboard
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {cryptoData.map((coin) => (
//             <Dialog 
//               key={coin.id}
//               open={dialogOpen && selectedCoin?.id === coin.id}
//               onOpenChange={(open) => {
//                 setDialogOpen(open);
//                 if (!open) setSelectedCoin(null);
//               }}
//             >
//               <DialogTrigger asChild>
//                 <Card 
//                   onClick={() => setSelectedCoin(coin)}
//                   className="bg-opacity-20 bg-blue-900 backdrop-blur-lg border border-blue-800 hover:border-purple-500 
//                     transform hover:scale-105 transition-all duration-300 cursor-pointer"
//                 >
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
//                         <div>
//                           <h2 className="font-bold">{coin.name}</h2>
//                           <p className="text-sm text-gray-400">{coin.symbol}</p>
//                         </div>
//                       </div>
//                       <span className={`flex items-center ${coin.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
//                         {coin.change24h >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
//                         {Math.abs(coin.change24h).toFixed(2)}%
//                       </span>
//                     </div>

//                     <div className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Price</span>
//                         <span className="font-bold">${coin.price.toLocaleString()}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Market Cap</span>
//                         <span className="font-bold">${(coin.marketCap / 1e9).toFixed(2)}B</span>
//                       </div>
//                       {coin.quantity > 0 && (
//                         <div className="flex justify-between mt-2 pt-2 border-t border-blue-800">
//                           <span className="text-gray-400">Your Balance</span>
//                           <span className="font-bold">{coin.quantity} {coin.symbol}</span>
//                         </div>
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </DialogTrigger>
//               <DialogContent className="bg-gray-900 text-white border border-blue-800 max-w-4xl w-full">
//                 <DialogHeader>
//                   <DialogTitle className="text-2xl flex items-center gap-2">
//                     <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
//                     {coin.name} ({coin.symbol})
//                   </DialogTitle>
//                 </DialogHeader>
                
//                 <div className="mt-4 space-y-4">
//                   <TradingViewWidget symbol={coin.symbol} />
                  
//                   <div className="p-4 bg-gray-800 rounded-lg">
//                     <h3 className="text-lg font-semibold mb-2">Your Portfolio</h3>
//                     <div className="flex justify-between items-center">
//                       <span>Quantity:</span>
//                       <span className="font-bold">{coin.quantity || 0} {coin.symbol}</span>
//                     </div>
//                     <div className="flex justify-between items-center mt-2">
//                       <span>Value:</span>
//                       <span className="font-bold">${((coin.quantity || 0) * coin.price).toLocaleString()}</span>
//                     </div>
//                   </div>

//                   <div className="flex gap-4">
//                     <Input
//                       type="number"
//                       placeholder="Amount"
//                       value={amount}
//                       onChange={(e) => setAmount(e.target.value)}
//                       className="bg-gray-800 border-blue-800"
//                       min="0"
//                       step="0.000001"
//                     />
//                     <Button 
//                       className="flex-1 bg-green-600 hover:bg-green-700"
//                       onClick={() => handleTransaction('buy')}
//                     >
//                       Buy
//                     </Button>
//                     <Button 
//                       className="flex-1 bg-red-600 hover:bg-red-700"
//                       onClick={() => handleTransaction('sell')}
//                     >
//                       Sell
//                     </Button>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           ))}
//         </div>
//       </div>

//       {notifications.map(notification => (
//         <Notification
//           key={notification.id}
//           notification={notification}
//           onClose={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
//         />
//       ))}

//       <style jsx global>{`
//         @keyframes float {
//           0% { transform: translate(0, 0); }
//           50% { transform: translate(10px, -20px); }
//           100% { transform: translate(0, 0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CryptoList;












// types.ts
export interface CryptoData {
    id: string;
    name: string;
    symbol: string;
    price: number;
    marketCap: number;
    change24h: number;
    image: string;
  }
  
  // CryptoList.tsx
  import React, { useState, useEffect } from 'react'; 
  import { Card, CardContent } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { ArrowUp, ArrowDown } from 'lucide-react';
  import { CryptoData } from "./types";
  
  interface ParticleProps {
    style: React.CSSProperties;
  }
  
  const Particle: React.FC<ParticleProps> = ({ style }) => (
    <div
      className="absolute bg-blue-300 rounded-full opacity-20 animate-float"
      style={style}
    />
  );
  
  const ParticleBackground: React.FC = () => (
    <div className="fixed inset-0 z-0">
      {Array.from({ length: 50 }).map((_, i) => (
        <Particle
          key={i}
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
  
  interface CoinCardProps {
    coin: CryptoData;
    onSelect: (coin: CryptoData) => void;
  }
  
  const CoinCard: React.FC<CoinCardProps> = ({ coin, onSelect }) => (
    <Card
      className="bg-opacity-20 bg-blue-900 backdrop-blur-lg border border-blue-800 hover:border-purple-500 
        transform hover:scale-105 transition-all duration-300"
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
            <div>
              <h2 className="font-bold">{coin.name}</h2>
              <p className="text-sm text-gray-400">{coin.symbol.toUpperCase()}</p>
            </div>
          </div>
          <span className={`flex items-center ${coin.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {coin.change24h >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
            {Math.abs(coin.change24h)}%
          </span>
        </div>
  
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-400">Price</span>
            <span className="font-bold">${coin.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Market Cap</span>
            <span className="font-bold">${(coin.marketCap / 1e9).toFixed(2)}B</span>
          </div>
  
          <Button
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
            onClick={() => onSelect(coin)}
          >
            Trade {coin.symbol.toUpperCase()}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
  
  interface TradingViewWidgetProps {
    symbol: string;
  }
  
  const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => (
    <div className="h-[600px] bg-gray-800 rounded-lg overflow-hidden">
      <div
        id="tradingview_widget"
        className="h-full"
        dangerouslySetInnerHTML={{
          __html: `
            <div class="tradingview-widget-container">
              <div id="tradingview_${symbol}"></div>
              <script type="text/javascript">
                new TradingView.widget({
                  "width": "100%",
                  "height": "100%",
                  "symbol": "BINANCE:${symbol.toUpperCase()}USDT",
                  "interval": "D",
                  "timezone": "Etc/UTC",
                  "theme": "dark",
                  "style": "1",
                  "locale": "en",
                  "toolbar_bg": "#f1f3f6",
                  "enable_publishing": false,
                  "allow_symbol_change": true,
                  "container_id": "tradingview_${symbol}"
                });
              </script>
            </div>
          `,
        }}
      />
    </div>
  );
  
  const CryptoList: React.FC = () => {
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const [selectedCoin, setSelectedCoin] = useState<CryptoData | null>(null);
    const [amount, setAmount] = useState<string>('');
  
    useEffect(() => {
      // Simulating API call
      const fetchData = async () => {
        const sampleData: CryptoData[] = [
          {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'BTC',
            price: 48250.32,
            marketCap: 934567890123,
            change24h: 2.5,
            image: '/api/placeholder/32/32',
          },
          {
            id: 'ethereum',
            name: 'Ethereum',
            symbol: 'ETH',
            price: 2890.15,
            marketCap: 345678901234,
            change24h: -1.2,
            image: '/api/placeholder/32/32',
          },
        ];
        setCryptoData(sampleData);
      };
  
      fetchData();
    }, []);
  
    const handleTransaction = (type: 'buy' | 'sell') => {
      if (!selectedCoin || !amount) return;
      console.log(`${type} ${amount} of ${selectedCoin.symbol}`);
      // Add actual transaction logic here
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <ParticleBackground />
  
        <div className="relative z-10 max-w-7xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Crypto Dashboard
          </h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cryptoData.map((coin) => (
              <Dialog key={coin.id}>
                <DialogTrigger asChild>
                  <div>
                    <CoinCard coin={coin} onSelect={setSelectedCoin} />
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 text-white border border-blue-800 max-w-4xl w-full">
                  <DialogHeader>
                    <DialogTitle className="text-2xl flex items-center gap-2">
                      <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                      {coin.name} ({coin.symbol.toUpperCase()})
                    </DialogTitle>
                  </DialogHeader>
  
                  <div className="mt-4 space-y-4">
                    <TradingViewWidget symbol={coin.symbol} />
  
                    <div className="flex gap-4">
                      <Input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-gray-800 border-blue-800"
                      />
                      <Button
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={() => handleTransaction('buy')}
                      >
                        Buy
                      </Button>
                      <Button
                        className="flex-1 bg-red-600 hover:bg-red-700"
                        onClick={() => handleTransaction('sell')}
                      >
                        Sell
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CryptoList;

  