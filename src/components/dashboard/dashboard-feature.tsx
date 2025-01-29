






// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // For fetching crypto data
// import { ArrowUpRight, ArrowDownRight } from 'lucide-react'; // For up and down arrows
// import { motion } from 'framer-motion'; // For adding animations

// const Web3MemeDashboard = () => {
//   const [cryptoData, setCryptoData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetching Crypto data
//   useEffect(() => {
//     const fetchCryptoData = async () => {
//       try {
//         // Fetching top 20 trending cryptocurrencies (from CoinGecko API)
//         const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//           params: {
//             vs_currency: 'usd',
//             order: 'market_cap_desc',
//             per_page: 20, // Fetch top 20 cryptocurrencies
//             page: 1,
//           },
//         });
//         setCryptoData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching crypto data", error);
//         setLoading(false);
//       }
//     };

//     fetchCryptoData();
//   }, []);

//   const calculateChangePercentage = (oldPrice: number, newPrice: number) => {
//     return ((newPrice - oldPrice) / oldPrice) * 100;
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#0a0613] relative overflow-hidden text-purple-200/80 overflow-x-hidden">
//       {/* Crypto Profit/Loss Moving Bar */}
//       <div className="w-full bg-purple-950/30 backdrop-blur-sm rounded-xl mb-6 py-2 overflow-hidden">
//         {loading ? (
//           <div className="text-center text-purple-400">Loading trending crypto data...</div>
//         ) : (
//           <div className="relative">
//             <div className="flex animate-marquee whitespace-nowrap">
//               {cryptoData?.map((crypto: any) => {
//                 const priceChangePercentage = calculateChangePercentage(
//                   crypto.current_price - (crypto.price_change_24h || 0),
//                   crypto.current_price
//                 );

//                 // Determine if the change is positive or negative
//                 const isPositive = priceChangePercentage > 0;

//                 return (
//                   <div key={crypto.id} className="mr-10 flex items-center">
//                     <span className="text-lg text-purple-100/90">
//                       <span className="font-bold">{crypto.name}</span>
//                       <span className="ml-2 text-xl">
//                         {/* Show Arrow and Percentage */}
//                         {isPositive ? (
//                           <ArrowUpRight className="inline-block text-green-400" />
//                         ) : (
//                           <ArrowDownRight className="inline-block text-red-500" />
//                         )}
//                         <span className={isPositive ? 'text-green-400' : 'text-red-500'}>
//                           {isPositive ? '+' : '-'} {priceChangePercentage.toFixed(2)}%
//                         </span>
//                       </span>
//                       <span className="ml-2">${crypto.current_price}</span>
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Introduction Section */}
//       <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-12 px-8 text-center text-white rounded-lg shadow-xl mb-12">
//         <motion.h2
//           className="text-4xl font-bold mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to Kawaii.Mint
//         </motion.h2>
//         <motion.p
//           className="text-xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           Kawaii.Mint aims to revolutionize the way users interact with meme coins and crypto trends. By combining the fun of predictions and trading with the precision of data-driven tools, the platform fosters a community of informed and engaged crypto enthusiasts, all powered by the Solana blockchain for speed, security, and scalability.
//         </motion.p>

//         {/* What We Do Section */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           <motion.div
//             className="bg-purple-800 p-6 rounded-xl shadow-lg text-center"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             <h3 className="text-2xl font-bold mb-4">Crypto Trend Prediction</h3>
//             <p>Stay ahead of the market with our predictive tools that analyze trends and offer insights for better decision-making.</p>
//           </motion.div>
//           <motion.div
//             className="bg-purple-800 p-6 rounded-xl shadow-lg text-center"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.9 }}
//           >
//             <h3 className="text-2xl font-bold mb-4">Viral Meme NFTs</h3>
//             <p>Turn viral memes into unique NFTs and join the fun of creating, collecting, and trading them on the blockchain.</p>
//           </motion.div>
//           <motion.div
//             className="bg-purple-800 p-6 rounded-xl shadow-lg text-center"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 1.2 }}
//           >
//             <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
//             <p>Engage with a passionate community of crypto enthusiasts and meme lovers, all powered by the Solana blockchain.</p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="w-full px-8 grid grid-cols-1 md:grid-cols-3 gap-10 py-8">
//         {/* Add your stats section here, if required */}
//       </div>

//       {/* Trending Memes Grid */}
//       <div className="w-full px-8 py-6">
//         {/* Add your trending memes grid here */}
//       </div>

//       {/* Hot Collections */}
//       <div className="w-full px-8 py-6">
//         {/* Add your hot collections section here */}
//       </div>
//     </div>
//   );
// };

// export default Web3MemeDashboard;




















// import React, { useState, useEffect } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Sparkles, Rocket, Users, TrendingUp, ArrowUpRight, ArrowDownRight, Globe } from 'lucide-react';

// // Crystal SVG Component
// const Crystal = ({ style }) => (
//   <div className="absolute animate-float-crystal" style={style}>
//     <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="opacity-20">
//       <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" 
//         fill="url(#crystal-gradient)"
//         stroke="rgba(147, 51, 234, 0.3)" 
//         strokeWidth="0.5" 
//       />
//       <defs>
//         <linearGradient id="crystal-gradient" x1="0" y1="0" x2="100" y2="100">
//           <stop offset="0%" stopColor="rgba(147, 51, 234, 0.1)" />
//           <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
//         </linearGradient>
//       </defs>
//     </svg>
//   </div>
// );

// // Particle Component
// const Particle = ({ style }) => (
//   <div 
//     className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-float-particle" 
//     style={style}
//   />
// );

// const KawaiiMintHome = () => {
//   const [particles, setParticles] = useState([]);
//   const [crystals, setCrystals] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     // Generate particles
//     const generateParticles = () => {
//       return Array.from({ length: 30 }, (_, i) => ({
//         id: i,
//         size: Math.random() * 8 + 2,
//         left: Math.random() * 100,
//         top: Math.random() * 100,
//         duration: Math.random() * 15 + 5,
//         delay: Math.random() * -20
//       }));
//     };

//     // Generate crystals
//     const generateCrystals = () => {
//       return Array.from({ length: 15 }, (_, i) => ({
//         id: i,
//         size: Math.random() * 100 + 50,
//         left: Math.random() * 100,
//         top: Math.random() * 100,
//         rotation: Math.random() * 360,
//         duration: Math.random() * 20 + 15,
//         delay: Math.random() * -20
//       }));
//     };

//     setParticles(generateParticles());
//     setCrystals(generateCrystals());

//     // Mouse move effect
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       setMousePosition({
//         x: (clientX / window.innerWidth) * 100,
//         y: (clientY / window.innerHeight) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const cryptoData = [
//     { id: 1, name: "DOGE", price: 0.12, change: 5.2 },
//     { id: 2, name: "SHIB", price: 0.00002, change: -2.1 },
//     { id: 3, name: "PEPE", price: 0.000001, change: 12.5 },
//     { id: 4, name: "FLOKI", price: 0.0003, change: -1.8 }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-zinc-200 relative overflow-hidden">
//       {/* Interactive Background */}
//       <div className="fixed inset-0 pointer-events-none">
//         {/* Crystals Layer */}
//         <div className="absolute inset-0">
//           {crystals.map((crystal) => (
//             <Crystal
//               key={crystal.id}
//               style={{
//                 width: crystal.size,
//                 height: crystal.size,
//                 left: `${crystal.left}%`,
//                 top: `${crystal.top}%`,
//                 transform: `rotate(${crystal.rotation}deg)`,
//                 animationDuration: `${crystal.duration}s`,
//                 animationDelay: `${crystal.delay}s`,
//                 // Subtle parallax effect based on mouse position
//                 transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px) rotate(${crystal.rotation}deg)`
//               }}
//             />
//           ))}
//         </div>

//         {/* Particles Layer */}
//         <div className="absolute inset-0">
//           {particles.map((particle) => (
//             <Particle
//               key={particle.id}
//               style={{
//                 width: particle.size,
//                 height: particle.size,
//                 left: `${particle.left}%`,
//                 top: `${particle.top}%`,
//                 animationDuration: `${particle.duration}s`,
//                 animationDelay: `${particle.delay}s`,
//                 // Subtle parallax effect based on mouse position
//                 transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`
//               }}
//             />
//           ))}
//         </div>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
//       </div>

//       {/* Content */}
//       <div className="relative z-20">
//         {/* Rest of the content remains the same */}
//         {/* Ticker Banner */}
//         <div className="w-full h-14 bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-800">
//           <div className="h-full flex items-center overflow-hidden">
//             <div className="flex animate-scroll space-x-8 px-4">
//               {cryptoData.map((coin) => (
//                 <div key={coin.id} className="flex items-center space-x-3 text-sm">
//                   <span className="font-bold text-zinc-100">{coin.name}</span>
//                   <span className="text-zinc-400">${coin.price}</span>
//                   <span className={`flex items-center ${coin.change > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
//                     {coin.change > 0 ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
//                     {Math.abs(coin.change)}%
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
//           <div className="text-center mb-16">
//             <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
//               Kawaii.Mint
//             </h1>
//             <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
//               Where Cute Meets Crypto in the Next Generation of Digital Assets
//             </p>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//             {[
//               { value: "50K+", label: "Active Users", icon: Users },
//               { value: "$2.5M", label: "Daily Volume", icon: TrendingUp },
//               { value: "12K", label: "NFTs Minted", icon: Sparkles },
//               { value: "24/7", label: "Global Trading", icon: Globe }
//             ].map((stat, index) => (
//               <Card key={index} className="bg-zinc-900/30 backdrop-blur-xl border-zinc-800/50 hover:border-purple-500/50 transition-all duration-500">
//                 <CardContent className="p-6">
//                   <stat.icon className="w-8 h-8 mb-4 text-purple-400/80" />
//                   <div className="text-3xl font-bold mb-2 text-white">{stat.value}</div>
//                   <div className="text-zinc-400">{stat.label}</div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Features Grid */}
//           <div className="grid md:grid-cols-3 gap-6 mb-16">
//             {[
//               {
//                 title: "AI-Powered Predictions",
//                 description: "Stay ahead with machine learning insights on trending meme coins",
//                 icon: Rocket,
//               },
//               {
//                 title: "Create & Trade NFTs",
//                 description: "Turn viral memes into valuable digital assets on Solana",
//                 icon: Sparkles,
//               },
//               {
//                 title: "Community Rewards",
//                 description: "Earn rewards for active participation and trading",
//                 icon: Users,
//               }
//             ].map((feature, index) => (
//               <Card key={index} className="bg-zinc-900/30 backdrop-blur-xl border-zinc-800/50 hover:border-purple-500/50 transition-all duration-500">
//                 <CardContent className="p-8">
//                   <feature.icon className="w-12 h-12 mb-6 text-purple-400/80" />
//                   <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
//                   <p className="text-zinc-400">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="text-center">
//             <button className="px-8 py-4 bg-gradient-to-r from-purple-600/90 to-pink-600/90 rounded-full text-white font-bold text-lg hover:from-purple-500/90 hover:to-pink-500/90 transition-all duration-300 backdrop-blur-xl border border-purple-500/20">
//               Connect Wallet to Start
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float-crystal {
//           0% { transform: translate(0, 0) rotate(0deg); }
//           50% { transform: translate(20px, 20px) rotate(180deg); }
//           100% { transform: translate(0, 0) rotate(360deg); }
//         }
//         @keyframes float-particle {
//           0% { transform: translate(0, 0); opacity: 0.3; }
//           50% { transform: translate(30px, 30px); opacity: 0.6; }
//           100% { transform: translate(0, 0); opacity: 0.3; }
//         }
//         .animate-float-crystal {
//           animation: float-crystal linear infinite;
//         }
//         .animate-float-particle {
//           animation: float-particle linear infinite;
//         }
//         .animate-scroll {
//           animation: scroll 20s linear infinite;
//         }
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default KawaiiMintHome;













// import React, { useState, useEffect } from 'react';
// import { Sparkles, Rocket, Users, TrendingUp, ArrowUpRight, ArrowDownRight, Globe } from 'lucide-react'; 

// const Card = ({ children, className = "" }) => (
//   <div className={`rounded-xl border backdrop-blur-xl ${className}`}>
//     {children}
//   </div>
// );

// const KawaiiMintHome = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     // Generate particles
//     setParticles(
//       Array.from({ length: 50 }, (_, i) => ({
//         id: i,
//         size: Math.random() * 4 + 2,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         duration: Math.random() * 20 + 10
//       }))
//     );

//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const cryptoData = [
//     { id: 1, name: "DOGE", price: 0.12, change: 5.2 },
//     { id: 2, name: "SHIB", price: 0.00002, change: -2.1 },
//     { id: 3, name: "PEPE", price: 0.000001, change: 12.5 },
//     { id: 4, name: "FLOKI", price: 0.0003, change: -1.8 }
//   ];

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 bg-animate">
//         <div className="absolute inset-0 bg-black/50" /> 
        
//         {/* Particles */}
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             className="absolute rounded-full bg-white/10 animate-float"
//             style={{
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               animationDuration: `${particle.duration}s`,
//               transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Ticker Banner */}
//         <div className="w-full h-14 bg-black/40 backdrop-blur-sm border-b border-white/10">
//           <div className="h-full flex items-center overflow-hidden">
//             <div className="flex animate-scroll space-x-8 px-4">
//               {cryptoData.map((coin) => (
//                 <div key={coin.id} className="flex items-center space-x-3 text-sm">
//                   <span className="font-bold text-white">{coin.name}</span>
//                   <span className="text-gray-400">${coin.price}</span>
//                   <span className={`flex items-center ${coin.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
//                     {coin.change > 0 ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
//                     {Math.abs(coin.change)}%
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
//           <div className="text-center mb-32">
//             <h1 className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
//               Kawaii.Mint
//             </h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Where Cute Meets Crypto in the Next Generation of Digital Assets
//             </p>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 mt-20">
//             {[
//               { value: "50K+", label: "Active Users", icon: Users },
//               { value: "$2.5M", label: "Daily Volume", icon: TrendingUp },
//               { value: "12K", label: "NFTs Minted", icon: Sparkles },
//               { value: "24/7", label: "Global Trading", icon: Globe }
//             ].map((stat, index) => (
//               <Card key={index} className="border-white/5 bg-black/20 hover:bg-black/30 transition-all duration-500">
//                 <div className="p-6">
//                   <stat.icon className="w-8 h-8 mb-4 text-purple-400" />
//                   <div className="text-3xl font-bold mb-2 text-white">{stat.value}</div>
//                   <div className="text-gray-400">{stat.label}</div>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Features Grid */}
//           <div className="grid md:grid-cols-3 gap-6 mb-16 mt-32">
//             {[
//               {
//                 title: "AI-Powered Predictions",
//                 description: "Stay ahead with machine learning insights on trending meme coins",
//                 icon: Rocket,
//               },
//               {
//                 title: "Create & Trade NFTs",
//                 description: "Turn viral memes into valuable digital assets on Solana",
//                 icon: Sparkles,
//               },
//               {
//                 title: "Community Rewards",
//                 description: "Earn rewards for active participation and trading",
//                 icon: Users,
//               }
//             ].map((feature, index) => (
//               <Card key={index} className="border-white/5 bg-black/20 hover:bg-black/30 transition-all duration-500">
//                 <div className="p-8">
//                   <feature.icon className="w-12 h-12 mb-6 text-purple-400" />
//                   <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
//                   <p className="text-gray-400">{feature.description}</p>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="text-center">
//             <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg hover:opacity-90 transition-all duration-300 border border-white/10">
//               Connect Wallet to Start
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .bg-animate {
//           background: linear-gradient(
//             45deg,
//             rgb(15, 5, 25),
//             rgb(20, 10, 30),
//             rgb(25, 15, 35),
//             rgb(30, 20, 40)
//           );
//           background-size: 400% 400%;
//           animation: gradient 15s ease infinite;
//         }

//         @keyframes gradient {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0px) translateX(0px);
//             opacity: 0;
//           }
//           50% {
//             opacity: 0.5;
//           }
//           100% {
//             transform: translateY(-100px) translateX(20px);
//             opacity: 0;
//           }
//         }

//         .animate-float {
//           animation: float 10s infinite linear;
//         }

//         .animate-scroll {
//           animation: scroll 20s linear infinite;
//         }

//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default KawaiiMintHome;
























// import React, { useState, useEffect } from 'react';
// import { Sparkles, Rocket, Users, TrendingUp, ArrowUpRight, ArrowDownRight, Globe } from 'lucide-react'; 

// const Card = ({ children, className = "" }) => (
//   <div className={`rounded-xl border backdrop-blur-xl ${className}`}>
//     {children}
//   </div>
// );

// const KawaiiMintHome = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     setParticles(
//       Array.from({ length: 50 }, (_, i) => ({
//         id: i,
//         size: Math.random() * 4 + 2,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         duration: Math.random() * 20 + 10
//       }))
//     );

//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const cryptoData = [
//     { id: 1, name: "DOGE", price: 0.12, change: 5.2 },
//     { id: 2, name: "SHIB", price: 0.00002, change: -2.1 },
//     { id: 3, name: "PEPE", price: 0.000001, change: 12.5 },
//     { id: 4, name: "FLOKI", price: 0.0003, change: -1.8 }
//   ];

//   return (
//     <div className="relative min-h-screen">
//       {/* Animated Background - Now positioned relative to this container */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-animate">
//           <div className="absolute inset-0 bg-black/50" />
          
//           {/* Particles */}
//           {particles.map((particle) => (
//             <div
//               key={particle.id}
//               className="absolute rounded-full bg-white/10 animate-float"
//               style={{
//                 width: `${particle.size}px`,
//                 height: `${particle.size}px`,
//                 left: `${particle.x}%`,
//                 top: `${particle.y}%`,
//                 animationDuration: `${particle.duration}s`,
//                 transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Content - Now properly layered above the background */}
//       <div className="relative z-10">
//         {/* Ticker Banner */}
//         <div className="w-full h-14 bg-black/40 backdrop-blur-sm border-b border-white/10">
//           <div className="h-full flex items-center overflow-hidden">
//             <div className="flex animate-scroll space-x-8 px-4">
//               {cryptoData.map((coin) => (
//                 <div key={coin.id} className="flex items-center space-x-3 text-sm">
//                   <span className="font-bold text-white">{coin.name}</span>
//                   <span className="text-gray-400">${coin.price}</span>
//                   <span className={`flex items-center ${coin.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
//                     {coin.change > 0 ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
//                     {Math.abs(coin.change)}%
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
//           <div className="text-center mb-32">
//             <h1 className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
//               Kawaii.Mint
//             </h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Where Cute Meets Crypto in the Next Generation of Digital Assets
//             </p>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 mt-20">
//             {[
//               { value: "50K+", label: "Active Users", icon: Users },
//               { value: "$2.5M", label: "Daily Volume", icon: TrendingUp },
//               { value: "12K", label: "NFTs Minted", icon: Sparkles },
//               { value: "24/7", label: "Global Trading", icon: Globe }
//             ].map((stat, index) => (
//               <Card key={index} className="border-white/5 bg-black/20 hover:bg-black/30 transition-all duration-500">
//                 <div className="p-6">
//                   <stat.icon className="w-8 h-8 mb-4 text-purple-400" />
//                   <div className="text-3xl font-bold mb-2 text-white">{stat.value}</div>
//                   <div className="text-gray-400">{stat.label}</div>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Features Grid */}
//           <div className="grid md:grid-cols-3 gap-6 mb-16 mt-32">
//             {[
//               {
//                 title: "AI-Powered Predictions",
//                 description: "Stay ahead with machine learning insights on trending meme coins",
//                 icon: Rocket,
//               },
//               {
//                 title: "Create & Trade NFTs",
//                 description: "Turn viral memes into valuable digital assets on Solana",
//                 icon: Sparkles,
//               },
//               {
//                 title: "Community Rewards",
//                 description: "Earn rewards for active participation and trading",
//                 icon: Users,
//               }
//             ].map((feature, index) => (
//               <Card key={index} className="border-white/5 bg-black/20 hover:bg-black/30 transition-all duration-500">
//                 <div className="p-8">
//                   <feature.icon className="w-12 h-12 mb-6 text-purple-400" />
//                   <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
//                   <p className="text-gray-400">{feature.description}</p>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="text-center">
//             <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg hover:opacity-90 transition-all duration-300 border border-white/10">
//               Connect Wallet to Start
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .bg-animate {
//           background: linear-gradient(
//             45deg,
//             rgb(15, 5, 25),
//             rgb(20, 10, 30),
//             rgb(25, 15, 35),
//             rgb(30, 20, 40)
//           );
//           background-size: 400% 400%;
//           animation: gradient 15s ease infinite;
//         }

//         @keyframes gradient {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0px) translateX(0px);
//             opacity: 0;
//           }
//           50% {
//             opacity: 0.5;
//           }
//           100% {
//             transform: translateY(-100px) translateX(20px);
//             opacity: 0;
//           }
//         }

//         .animate-float {
//           animation: float 10s infinite linear;
//         }

//         .animate-scroll {
//           animation: scroll 20s linear infinite;
//         }

//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default KawaiiMintHome;











import React, { useState, useEffect } from 'react';
import { Sparkles, Rocket, Users, TrendingUp, ArrowUpRight, ArrowDownRight, Globe } from 'lucide-react'; 

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border backdrop-blur-xl ${className}`}>
    {children}
  </div>
);

const KawaiiMintHome = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch crypto data
  const fetchCryptoData = async () => {
    try {

      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?' +
        new URLSearchParams({
          vs_currency: 'usd',
          ids: 'bitcoin,ethereum,dogecoin,shiba-inu,pepe,floki,solana,cardano,polkadot,chainlink,avalanche-2,polygon,cosmos,uniswap,litecoin,near,fantom,tron,stellar,vechain',
          order: 'market_cap_desc',
          per_page: '20',
          page: '1',
          sparkline: 'false',
          price_change_percentage: '24h'
        })
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setCryptoData(data.map(coin => ({
        id: coin.id,
        name: coin.symbol.toUpperCase(),
        price: coin.current_price,
        change: coin.price_change_percentage_24h,
        image: coin.image
      })));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      setError('Failed to fetch crypto data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    // Fetch data every 1 minute
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10
      }))
    );

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-animate">
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDuration: `${particle.duration}s`,
                transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Ticker Banner */}
        <div className="w-full h-14 bg-black/40 backdrop-blur-sm border-b border-white/10">
          <div className="h-full flex items-center overflow-hidden">
            {loading ? (
              <div className="px-4 text-gray-400">Loading crypto data...</div>
            ) : error ? (
              <div className="px-4 text-red-400">{error}</div>
            ) : (
              <div className="flex animate-scroll space-x-8 px-4">
                {cryptoData.map((coin) => (
                  <div key={coin.id} className="flex items-center space-x-3 text-sm">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                    <span className="font-bold text-white">{coin.name}</span>
                    <span className="text-gray-400">
                      ${coin.price < 0.01 ? coin.price.toFixed(8) : coin.price.toFixed(2)}
                    </span>
                    <span className={`flex items-center ${coin.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {coin.change > 0 ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                      {Math.abs(coin.change).toFixed(2)}%
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Rest of the content remains the same */}
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 flex-col absolute ml-28 mt-20">
          <div className="text-center mb-32">
            <h1 className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Kawaii.Mint
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Where Cute Meets Crypto in the Next Generation of Digital Assets
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 mt-20">
            {[
              { value: "50K+", label: "Active Users", icon: Users },
              { value: "$2.5M", label: "Daily Volume", icon: TrendingUp },
              { value: "12K", label: "NFTs Minted", icon: Sparkles },
              { value: "24/7", label: "Global Trading", icon: Globe }
            ].map((stat, index) => (
              <Card key={index} className="border-white/5 bg-black/20 hover:bg-black/30 transition-all duration-500">
                <div className="p-6">
                  <stat.icon className="w-8 h-8 mb-4 text-purple-400" />
                  <div className="text-3xl font-bold mb-2 text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 mt-32">
            {[
              {
                title: "AI-Powered Predictions",
                description: "Stay ahead with machine learning insights on trending meme coins",
                icon: Rocket,
              },
              {
                title: "Create & Trade NFTs",
                description: "Turn viral memes into valuable digital assets on Solana",
                icon: Sparkles,
              },
              {
                title: "Community Rewards",
                description: "Earn rewards for active participation and trading",
                icon: Users,
              }
            ].map((feature, index) => (
              <Card key={index} className="border-white/5 bg-black/20 hover:bg-black/30 transition-all duration-500">
                <div className="p-8">
                  <feature.icon className="w-12 h-12 mb-6 text-purple-400" />
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg hover:opacity-90 transition-all duration-300 border border-white/10">
              Connect Wallet to Start
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-animate {
          background: linear-gradient(
            45deg,
            rgb(15, 5, 25),
            rgb(20, 10, 30),
            rgb(25, 15, 35),
            rgb(30, 20, 40)
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 10s infinite linear;
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default KawaiiMintHome;












// import React, { useState, useEffect } from 'react';
// import { Sparkles, Rocket, Users, TrendingUp, ArrowUpRight, ArrowDownRight, Globe } from 'lucide-react'; 

// const Card = ({ children, className = "" }) => (
//   <div className={`rounded-xl border backdrop-blur-xl ${className}`}>
//     {children}
//   </div>
// );

// const KawaiiMintHome = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState([]);
//   const [cryptoData, setCryptoData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch crypto data
//   const fetchCryptoData = async () => {
//     try {
//       const response = await fetch(
//         'https://api.coingecko.com/api/v3/coins/markets?' +
//         new URLSearchParams({
//           vs_currency: 'usd',
//           ids: 'bitcoin,ethereum,dogecoin,shiba-inu,pepe,floki,solana,cardano,polkadot,chainlink,avalanche-2,polygon,cosmos,uniswap,litecoin,near,fantom,tron,stellar,vechain',
//           order: 'market_cap_desc',
//           per_page: '20',
//           page: '1',
//           sparkline: 'false',
//           price_change_percentage: '24h'
//         })
//       );

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setCryptoData(data.map(coin => ({
//         id: coin.id,
//         name: coin.symbol.toUpperCase(),
//         price: coin.current_price,
//         change: coin.price_change_percentage_24h,
//         image: coin.image,
//         market_cap: coin.market_cap
//       })));
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching crypto data:', error);
//       setError('Failed to fetch crypto data');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCryptoData();
//     // Fetch data every 1 minute
//     const interval = setInterval(fetchCryptoData, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setParticles(
//       Array.from({ length: 50 }, (_, i) => ({
//         id: i,
//         size: Math.random() * 4 + 2,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         duration: Math.random() * 20 + 10
//       }))
//     );

//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-animate">
//           <div className="absolute inset-0 bg-black/50" />
          
//           {/* Particles */}
//           {particles.map((particle) => (
//             <div
//               key={particle.id}
//               className="absolute rounded-full bg-white/10 animate-float"
//               style={{
//                 width: `${particle.size}px`,
//                 height: `${particle.size}px`,
//                 left: `${particle.x}%`,
//                 top: `${particle.y}%`,
//                 animationDuration: `${particle.duration}s`,
//                 transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Ticker Banner */}
//         <div className="w-full h-16 bg-black/40 backdrop-blur-sm border-b border-white/10">
//           <div className="h-full flex items-center overflow-hidden">
//             {loading ? (
//               <div className="px-4 text-gray-400">Loading crypto data...</div>
//             ) : error ? (
//               <div className="px-4 text-red-400">{error}</div>
//             ) : (
//               <div className="flex animate-scroll-extended space-x-8 px-4">
//                 {cryptoData.map((coin) => (
//                   <div key={coin.id} className="flex items-center space-x-3 text-sm whitespace-nowrap">
//                     <img src={coin.image} alt={coin.name} className="w-6 h-6" />
//                     <span className="font-bold text-white min-w-[60px]">{coin.name}</span>
//                     <span className="text-gray-400 min-w-[80px]">
//                       ${coin.price < 0.01 ? coin.price.toFixed(8) : coin.price.toFixed(2)}
//                     </span>
//                     <span className={`flex items-center min-w-[80px] ${coin.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
//                       {coin.change > 0 ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
//                       {Math.abs(coin.change).toFixed(2)}%
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Rest of the content remains the same */}
//         <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
//           {/* ... (rest of the component remains unchanged) ... */}
//         </div>
//       </div>

//       <style jsx>{`
//         .bg-animate {
//           background: linear-gradient(
//             45deg,
//             rgb(15, 5, 25),
//             rgb(20, 10, 30),
//             rgb(25, 15, 35),
//             rgb(30, 20, 40)
//           );
//           background-size: 400% 400%;
//           animation: gradient 15s ease infinite;
//         }

//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes float {
//           0% {
//             transform: translateY(0px) translateX(0px);
//             opacity: 0;
//           }
//           50% { opacity: 0.5; }
//           100% {
//             transform: translateY(-100px) translateX(20px);
//             opacity: 0;
//           }
//         }

//         .animate-float {
//           animation: float 10s infinite linear;
//         }

//         .animate-scroll-extended {
//           animation: scroll 40s linear infinite;
//           will-change: transform;
//         }

//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         /* Add smooth transition for hover effects */
//         .crypto-item {
//           transition: all 0.3s ease;
//         }
        
//         .crypto-item:hover {
//           transform: translateY(-2px);
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 8px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default KawaiiMintHome;