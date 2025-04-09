import React from "react";

function PortfolioSite() {
  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
      <h1 className="text-4xl font-bold text-lime-400 mb-2">OGSHADRACHDINGLE</h1>
      <p className="text-purple-400 text-xl mb-6">Fortnite Island Creator | Music Architect</p>

      <section className="mb-8">
        <h2 className="text-2xl text-green-400 mb-2">Fortnite Maps</h2>
        <ul className="list-disc list-inside">
          <li>Shadrach's Shack - 4691-3453-9615</li>
          <li>Port-A-Royale - 2448-7534-2692</li>
          <li>Rozz's Prop Hunt - 8359-2850-9966</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-green-400 mb-2">Music</h2>
        <div className="mb-4">
          <iframe
            src="https://open.spotify.com/embed/track/4Aqg4EZvpgNm74chUUlGqU"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://open.spotify.com/embed/track/3sydU0Vu6K4sPxzHdkYXPZ"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-green-400 mb-2">Socials</h2>
        <ul className="space-y-1">
          <li>
            <a href="https://www.tiktok.com/@ogshadrachdingle" target="_blank" rel="noreferrer" className="text-lime-400 underline">TikTok</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@ogshadrachdingle" target="_blank" rel="noreferrer" className="text-lime-400 underline">YouTube</a>
          </li>
          <li>
            <a href="https://discord.gg/3yB7uVqR" target="_blank" rel="noreferrer" className="text-lime-400 underline">Discord</a>
          </li>
          <li>
            <a href="https://www.fortnite.com/@ogsd" target="_blank" rel="noreferrer" className="text-lime-400 underline">Fortnite Profile</a>
          </li>
          <li>
            <a href="https://open.spotify.com/artist/0IQQ52cGu5lpqEjVpbkskn" target="_blank" rel="noreferrer" className="text-lime-400 underline">Spotify Artist</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PortfolioSite;
