import React, { useState } from 'react'
import videosData from './videos.json'

export default function App() {
  const [active, setActive] = useState(null)
  const videos = videosData.videos || []
  const shorts = videosData.shorts || []

  return (
    <div className="page-bg">
      <div className="site-wrap">
        <header className="channel-header">
          <div className="banner-container">
            <img id="bannerImg" className="banner-img" src="/banner3.jpg" alt="banner" />

            <div id="leftFade" className="left-fade"></div>
            <div id="rightFade" className="right-fade"></div>

            <img src="/icon.jpg" className="profile-icon" alt="icon" />

            {/* NEW: follower text inside banner container */}
            <div className="profile-info">
              27K followers • 20 following
            </div>
          </div>
        </header>


        <main className="content">
          <section className="section">
            <h2>Videos</h2>
            <div className="video-grid">
              {videos.map(v => (
                <div key={v.id} className="video-card" onClick={() => setActive(v.id)}>
                  <div className="thumb">
                    <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} />
                    <div className="play-overlay">▶</div>
                  </div>
                  <div className="vtitle">{v.title}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Shorts</h2>
            <div className="shorts-row">
              {shorts.map(s => (
                <div key={s.id} className="short-card" onClick={() => setActive(s.id)}>
                  <img src={`https://img.youtube.com/vi/${s.id}/mqdefault.jpg`} alt={s.title} />
                  <div className="short-title">{s.title}</div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {active && (
          <div className="modal" onClick={() => setActive(null)}>
            <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setActive(null)}>✕</button>
              <iframe title="player" src={`https://www.youtube.com/embed/${active}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
