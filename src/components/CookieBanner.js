import React, { useState } from 'react';
import { X, Settings } from 'lucide-react';

const CookieBanner = ({ onClose }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    strictly: true,
    performance: false,
    targeting: false,
    functionality: false
  });

  const handleAcceptAll = () => {
    setCookieSettings({
      strictly: true,
      performance: true,
      targeting: true,
      functionality: true
    });
    onClose();
  };

  const handleDeclineAll = () => {
    setCookieSettings({
      strictly: true,
      performance: false,
      targeting: false,
      functionality: false
    });
    onClose();
  };

  const handleSaveSettings = () => {
    onClose();
  };

  return (
    <div className="cookie-banner">
      <div className="container-custom">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              This website uses cookies
            </h3>
            <p className="text-gray-300 mb-4">
              This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.{' '}
              <a href="#" className="text-primary-400 hover:text-primary-300 underline">
                Read more
              </a>
            </p>
            
            {showDetails && (
              <div className="mb-6 space-y-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      checked={cookieSettings.strictly}
                      disabled
                      className="checkbox-custom"
                    />
                    <span className="text-sm text-gray-300">STRICTLY NECESSARY</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      checked={cookieSettings.performance}
                      onChange={(e) => setCookieSettings({...cookieSettings, performance: e.target.checked})}
                      className="checkbox-custom"
                    />
                    <span className="text-sm text-gray-300">PERFORMANCE</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      checked={cookieSettings.targeting}
                      onChange={(e) => setCookieSettings({...cookieSettings, targeting: e.target.checked})}
                      className="checkbox-custom"
                    />
                    <span className="text-sm text-gray-300">TARGETING</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      checked={cookieSettings.functionality}
                      onChange={(e) => setCookieSettings({...cookieSettings, functionality: e.target.checked})}
                      className="checkbox-custom"
                    />
                    <span className="text-sm text-gray-300">FUNCTIONALITY</span>
                  </label>
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-3">
              {!showDetails && (
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">SHOW DETAILS</span>
                </button>
              )}
              
              <button
                onClick={handleAcceptAll}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
              >
                ACCEPT ALL
              </button>
              
              <button
                onClick={handleDeclineAll}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
              >
                DECLINE ALL
              </button>
              
              {showDetails && (
                <button
                  onClick={handleSaveSettings}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
                >
                  SAVE SETTINGS
                </button>
              )}
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;