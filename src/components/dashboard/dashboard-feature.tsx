

import React, { useState } from 'react';
import { 
  ArrowUpRight,
  Wallet,
  BarChart2,
  Activity,
  Heart,
  Clock,
  Search
} from 'lucide-react';

const Web3MemeDashboard = () => {
  // Previous state and data definitions remain the same
  const trendingMemes = [
    {
      id: 1,
      title: "Doge to the Moon",
      creator: "CryptoArtist",
      price: "0.5 ETH",
      likes: "2.3K",
      timeLeft: "5h 23m",
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      title: "Pepe Rare Collection",
      creator: "MemeVault",
      price: "1.2 ETH",
      likes: "4.1K",
      timeLeft: "2h 15m",
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      title: "Wojak Trading",
      creator: "NFTMaster",
      price: "0.8 ETH",
      likes: "1.8K",
      timeLeft: "8h 45m",
      image: "/api/placeholder/300/300"
    }
  ];

  const stats = [
    { title: 'Total Volume', value: '12,234 ETH', icon: BarChart2 },
    { title: 'Floor Price', value: '0.5 ETH', icon: ArrowUpRight },
    { title: 'Memes Listed', value: '1,337', icon: Activity },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0613] relative overflow-hidden text-purple-200/80">
    
        <div className="w-full px-8 grid grid-cols-1 md:grid-cols-3 gap-10 py-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-purple-950/30 backdrop-blur-sm rounded-xl p-6 border border-purple-900/50 hover:bg-purple-900/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-purple-400/70 text-sm">{stat.title}</h3>
                    <p className="text-2xl font-bold text-purple-100/90 mt-1">{stat.value}</p>
                  </div>
                  <Icon className="h-8 w-8 text-purple-500/70" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Trending Memes Grid */}
        <div className="w-full px-8 py-6">
          <h2 className="text-2xl font-bold mb-6 text-purple-100/90 flex items-center">
            <Activity className="w-6 h-6 mr-2 text-purple-500/70" /> 
            Trending Memes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingMemes.map((meme) => (
              <div key={meme.id} className="bg-purple-950/30 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-900/50 hover:border-purple-800/50 transition-all group">
                <img src={meme.image} alt={meme.title} className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-purple-100/90">{meme.title}</h3>
                    <span className="text-purple-400/70">{meme.price}</span>
                  </div>
                  <p className="text-sm text-purple-400/60 mb-4">by {meme.creator}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-sm text-purple-300/70">
                      <Heart className="h-4 w-4 text-purple-500/70" />
                      {meme.likes}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-300/70">
                      <Clock className="h-4 w-4 text-purple-500/70" />
                      {meme.timeLeft}
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-purple-900/50 hover:bg-purple-800/50 py-2 rounded-lg transition-all text-purple-100/90">
                    Mint NFT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hot Collections */}
        <div className="w-full px-8 py-6">
          <h2 className="text-2xl font-bold mb-6 text-purple-100/90 flex items-center">
            <ArrowUpRight className="w-6 h-6 mr-2 text-purple-500/70" /> 
            Hot Collections
          </h2>
          <div className="bg-purple-950/30 backdrop-blur-sm rounded-xl p-6 border border-purple-900/50">
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-purple-900/30 pb-4 last:border-0">
                  <span className="text-lg font-bold text-purple-400/70">#{i + 1}</span>
                  <img src={`/api/placeholder/48/48`} alt="collection" className="w-12 h-12 rounded-lg opacity-80" />
                  <div>
                    <h3 className="font-bold text-purple-100/90">Rare Pepe Collection {i + 1}</h3>
                    <p className="text-sm text-purple-400/60">Floor: {(0.1 * (i + 1)).toFixed(1)} ETH</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-bold text-green-400/80">+{123 + i * 45}%</p>
                    <p className="text-sm text-purple-400/60">24h Volume</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Web3MemeDashboard;



