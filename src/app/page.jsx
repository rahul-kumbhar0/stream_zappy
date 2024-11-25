"use client";
import React from "react";

function MainComponent() {
  const [showPopupAd, setShowPopupAd] = useState(true);
  const [showTelegramPopup, setShowTelegramPopup] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [showLeftAd, setShowLeftAd] = useState(true);
  const [showRightAd, setShowRightAd] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New match starting soon!", time: "2 min ago" },
    { id: 2, message: "Server maintenance complete", time: "1 hour ago" },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const channels = [
    {
      id: 1,
      name: "Sports HD 1",
      quality: "1080p",
      language: "English",
      info: "Premier League - London Stadium",
    },
    {
      id: 2,
      name: "Sports HD 2",
      quality: "720p",
      language: "Hindi",
      info: "La Liga - Santiago Bernabéu",
    },
    {
      id: 3,
      name: "Sports HD 3",
      quality: "1080p",
      language: "English",
      info: "NBA - Madison Square Garden",
    },
    {
      id: 4,
      name: "Sports HD 4",
      quality: "4K",
      language: "Spanish",
      info: "Champions League - Allianz Arena",
    },
    {
      id: 5,
      name: "Sports HD 5",
      quality: "720p",
      language: "French",
      info: "Ligue 1 - Parc des Princes",
    },
    {
      id: 6,
      name: "Sports HD 6",
      quality: "1080p",
      language: "German",
      info: "Bundesliga - Signal Iduna Park",
    },
    {
      id: 7,
      name: "Sports HD 7",
      quality: "4K",
      language: "Italian",
      info: "Serie A - San Siro",
    },
    {
      id: 8,
      name: "Sports HD 8",
      quality: "1080p",
      language: "Portuguese",
      info: "Primeira Liga - Estádio da Luz",
    },
  ];
  const ads = [
    { id: 1, title: "Premium Sports Package", link: "#" },
    { id: 2, title: "Live Betting", link: "#" },
    { id: 3, title: "Sports Gear", link: "#" },
    { id: 4, title: "Fantasy League", link: "#" },
    { id: 5, title: "Sports News", link: "#" },
  ];
  const handleBack = () => {
    setShowPlayer(false);
    setSelectedChannel(null);
  };

  useEffect(() => {
    if (showPopupAd) {
      const timer = setTimeout(() => {
        setShowPopupAd(false);
      }, 10000);

      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [showPopupAd]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] font-roboto">
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full text-white relative hover:shadow-lg hover:shadow-blue-500/20 transition-all"
        >
          <i className="fas fa-bell text-xl"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {notifications.length}
          </span>
        </button>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full text-white relative"
          >
            <i className="fas fa-bell text-xl"></i>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {notifications.length}
            </span>
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-[#1a1a1a] rounded-lg shadow-xl border border-gray-800">
              <div className="p-4">
                <h3 className="text-white font-bold mb-2">Notifications</h3>
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="mb-2 p-2 hover:bg-[#252525] rounded"
                  >
                    <p className="text-white text-sm">{notif.message}</p>
                    <span className="text-gray-400 text-xs">{notif.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {showPopupAd && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] p-8 rounded-lg max-w-md w-full relative">
            <div className="absolute top-2 right-4 text-gray-400">
              <span>Closing in {timeLeft}s</span>
            </div>
            <h2 className="text-white text-2xl mb-4">Special Offer!</h2>
            <p className="text-gray-400 mb-4">
              Get premium access to all sports channels!
            </p>
            <a
              href="#"
              className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition-all"
            >
              Claim Now
            </a>
          </div>
        </div>
      )}

      {!showPlayer ? (
        <>
          <header className="bg-gradient-to-r from-[#1a1a1a] to-[#252525] py-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  StreamZappy
                </h1>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowTelegramPopup(true)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    Join Telegram
                  </button>
                  <a
                    href="https://tx.me/archierips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Report Problem
                  </a>
                </div>
              </div>
              <div className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 text-black font-semibold rounded-full shadow-lg">
                🔴 Live Now: Multiple matches streaming across all channels
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <i className="fas fa-tv text-blue-500 text-2xl"></i>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {channel.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 mt-2 flex items-center gap-2">
                      <i className="fas fa-map-marker-alt text-purple-500"></i>
                      {channel.info}
                    </p>
                    <div className="flex justify-between mt-4">
                      <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent font-bold flex items-center gap-2">
                        <i className="fas fa-video"></i>
                        {channel.quality}
                      </span>
                      <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold flex items-center gap-2">
                        <i className="fas fa-language"></i>
                        {channel.language}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedChannel(channel);
                        setShowPlayer(true);
                      }}
                      className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-full transition-all watch-btn hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
                    >
                      <i className="fas fa-play-circle"></i>
                      Watch Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {ads.map((ad) => (
                <a
                  key={ad.id}
                  href={ad.link}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-4 rounded-xl text-white text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <i className="fas fa-star text-yellow-500"></i>
                  {ad.title}
                </a>
              ))}
            </div>
          </main>
          <footer className="bg-[#1a1a1a] py-8 mt-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="text-white mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold">StreamZappy</h2>
                  <p className="mt-2">
                    Your premier sports streaming destination
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-white hover:text-blue-500 transition-all"
                  >
                    <i className="fab fa-facebook text-2xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-blue-500 transition-all"
                  >
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-blue-500 transition-all"
                  >
                    <i className="fab fa-telegram text-2xl"></i>
                  </a>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="flex animate-scroll">
                  {[...ads, ...ads].map((ad, index) => (
                    <a
                      key={index}
                      href={ad.link}
                      className="flex-shrink-0 mx-4 bg-[#252525] px-6 py-3 rounded-lg text-white hover:bg-[#303030] transition-all whitespace-nowrap"
                    >
                      {ad.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </>
      ) : (
        selectedChannel && (
          <div className="min-h-screen flex justify-center relative">
            {showLeftAd && (
              <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 w-[160px] h-[600px] bg-[#1a1a1a] p-2">
                <button
                  onClick={() => setShowLeftAd(false)}
                  className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <i className="fas fa-times"></i>
                </button>
                <div className="w-full h-full bg-[#252525] flex items-center justify-center text-white">
                  Ad Space
                </div>
              </div>
            )}

            {showRightAd && (
              <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 w-[160px] h-[600px] bg-[#1a1a1a] p-2">
                <button
                  onClick={() => setShowRightAd(false)}
                  className="absolute -left-2 -top-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <i className="fas fa-times"></i>
                </button>
                <div className="w-full h-full bg-[#252525] flex items-center justify-center text-white">
                  Ad Space
                </div>
              </div>
            )}

            <div className="w-full max-w-[1280px] mx-auto">
              <div className="bg-[#1a1a1a] p-4">
                <div className="container mx-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={handleBack}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-2xl px-4 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                    >
                      <i className="fas fa-arrow-left"></i>
                    </button>
                    <div className="flex-1">
                      <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transform transition-all duration-300 hover:scale-105">
                        {selectedChannel.info}
                      </h1>
                      <p className="text-gray-400 text-sm">London Stadium</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        LIVE
                      </span>
                      <span className="text-gray-400 text-sm">Day -1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mx-auto p-4">
                <div className="bg-[#252525] p-3 mb-4 overflow-hidden">
                  <div className="flex animate-scroll whitespace-nowrap">
                    <span className="text-yellow-400 font-bold mr-4">
                      🔥 BREAKING:
                    </span>
                    <span className="text-white">
                      Match starts in 10 minutes! Get ready for an exciting
                      game. Don't forget to join our Telegram channel for live
                      updates and commentary.
                    </span>
                    <span className="text-yellow-400 font-bold mx-4">🏆</span>
                    <span className="text-white">
                      Previous match highlights now available. Check out the
                      best moments from yesterday's game!
                    </span>
                  </div>
                </div>
                <div className="relative w-full max-w-[800px] mx-auto pt-[45%] bg-black rounded-lg overflow-hidden mb-4 shadow-2xl player-container">
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                    <div className="text-center">
                      <i className="fas fa-play-circle text-6xl text-white mb-4"></i>
                      <p className="text-white">Click to Play Stream</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-green-500/20 flex items-center gap-2">
                    <i className="fas fa-play-circle"></i>
                    Watch in VLC Player
                  </button>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-xl">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <h2 className="text-white text-2xl font-bold">
                        {selectedChannel.name}
                      </h2>
                      <p className="text-gray-400 mt-1">Live Sports Stream</p>
                    </div>
                    <a
                      href="https://tx.me/archierips"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-2"
                    >
                      <i className="fas fa-exclamation-circle"></i>
                      Report Issue
                    </a>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#252525] p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <i className="fas fa-video text-green-500"></i>
                        <h3 className="text-white font-bold">Stream Quality</h3>
                      </div>
                      <p className="text-gray-400">
                        {selectedChannel.quality} HD Stream
                      </p>
                    </div>

                    <div className="bg-[#252525] p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <i className="fas fa-microphone text-blue-500"></i>
                        <h3 className="text-white font-bold">Audio</h3>
                      </div>
                      <p className="text-gray-400">
                        {selectedChannel.language} Commentary
                      </p>
                    </div>

                    <div className="bg-[#252525] p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <i className="fas fa-server text-purple-500"></i>
                        <h3 className="text-white font-bold">Server Details</h3>
                      </div>
                      <p className="text-gray-400">
                        Primary Streaming Server - EU
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowTelegramPopup(true)}
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-telegram"></i>
                    Join Our Telegram Channel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}

      {showTelegramPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] p-8 rounded-lg max-w-md w-full">
            <h2 className="text-white text-2xl mb-4">
              Join Our Telegram Channel
            </h2>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest streams and announcements!
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowTelegramPopup(false)}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded transition-all hover:shadow-lg hover:shadow-gray-600/20"
              >
                Close
              </button>
              <a
                href="https://t.me/streamzappy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded transition-all hover:shadow-lg hover:shadow-blue-500/20"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .watch-btn:hover {
          animation: pulse 1s infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes neonGlow {
          0% { box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff; }
          50% { box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff; }
          100% { box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff; }
        }

        .player-container {
          animation: neonGlow 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;