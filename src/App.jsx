import React from "react";

function PortfolioSite() {
  return (
    <div className="bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-lime-400">OGSHADRACHDINGLE</h1>
      <p className="text-purple-400">Fortnite Island Creator | Music Architect</p>

      <section className="mt-6">
        <h2 className="text-2xl mb-2">Fortnite Maps</h2>
        <ul>
          <li>Shadrach's Shack - 4691-3453-9615</li>
          <li>Port-A-Royale - 2448-7534-2692</li>
          <li>Rozz's Prop Hunt - 8359-2850-9966</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl mb-2">Music</h2>
        <iframe
          src="https://open.spotify.com/embed/track/4Aqg4EZvpgNm74chUUlGqU"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl mb-2">Socials</h2>
        <ul>
          <li><a href="https://www.tiktok.com/@ogshadrachdingle" className="text-lime-400">TikTok</a></li>
          <li><a href="https://www.youtube.com/@ogshadrachdingle" className="text-lime-400">YouTube</a></li>
          <li><a href="https://discord.gg/3yB7uVqR" className="text-lime-400">Discord</a></li>
        </ul>
      </section>
    </div>
  );
}

export default PortfolioSite;
