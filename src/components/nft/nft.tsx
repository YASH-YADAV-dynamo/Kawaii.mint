import React, { useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';

const SimpleNFTForm = () => {
  const [formData, setFormData] = useState({
    xLink: '',
    telegramId: '',
    metadata: '',
    launchDate: new Date()
  });
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [message, setMessage] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setIsLoading(false);
        setMessage('Image uploaded successfully!');
        setTimeout(() => setMessage(''), 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFile(null);
    setImagePreview('');
    setMessage('Image removed');
    setTimeout(() => setMessage(''), 2000);
  };

  const validateForm = () => {
    if (!file) return 'Please upload an image';
    if (!formData.xLink) return 'Please enter X (Twitter) link';
    if (!formData.telegramId) return 'Please enter Telegram ID';
    if (!formData.metadata) return 'Please enter metadata';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setMessage(error);
      return;
    }

    setIsLoading(true);
    setMessage('Processing your NFT...');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const fakeLikes = Math.floor(Math.random() * 3000);
      
      if (fakeLikes >= 2000) {
        setMessage(`Minting NFT... Your meme has ${fakeLikes} likes!`);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setMessage('NFT created successfully! 🎉');
      } else {
        setMessage(`The shared meme isn't popular enough (${fakeLikes} likes). Need at least 2000 likes.`);
      }
    } catch (error) {
      setMessage('Error processing NFT. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Convert trendy memes to NFT and earn!!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Image Upload */}
          <div className="space-y-4">
            <div className={`border-2 border-dashed border-gray-600 rounded-xl p-4 
              ${!imagePreview ? 'min-h-[300px] flex items-center justify-center' : ''}`}>
              {isLoading ? (
                <div className="flex flex-col items-center justify-center">
                  <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                  <p className="mt-2 text-gray-400">Processing...</p>
                </div>
              ) : imagePreview ? (
                <div className="relative">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="rounded-lg max-h-[400px] w-full object-contain"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer text-center hover:opacity-80 transition-opacity">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Upload className="w-12 h-12 mx-auto text-gray-400" />
                  <p className="mt-2 text-gray-300">Drop your meme here</p>
                  <p className="text-sm text-gray-500">or click to upload</p>
                </label>
              )}
            </div>
          </div>

          {/* Right Side - Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">X (Twitter) Link</label>
              <input
                type="url"
                value={formData.xLink}
                onChange={(e) => setFormData(prev => ({ ...prev, xLink: e.target.value }))}
                placeholder="https://x.com/..."
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Telegram ID</label>
              <input
                type="text"
                value={formData.telegramId}
                onChange={(e) => setFormData(prev => ({ ...prev, telegramId: e.target.value }))}
                placeholder="@username"
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Metadata</label>
              <textarea
                value={formData.metadata}
                onChange={(e) => setFormData(prev => ({ ...prev, metadata: e.target.value }))}
                placeholder="Enter NFT metadata..."
                rows={3}
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Launch Date</label>
              <input
                type="date"
                value={formData.launchDate?.toISOString().split('T')[0]}
                onChange={(e) => setFormData(prev => ({ ...prev, launchDate: new Date(e.target.value) }))}
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium 
                hover:from-purple-600 hover:to-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                'Convert to NFT'
              )}
            </button>

            {message && (
              <div className={`p-4 rounded-lg transition-all ${
                message.includes('error') ? 'bg-red-900/20' : 'bg-gray-700/50'
              }`}>
                <p>{message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleNFTForm;