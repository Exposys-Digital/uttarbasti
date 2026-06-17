"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function VideoSection() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className={`${styles.videoSection} ${styles.darkSection}`} aria-labelledby="video-heading">
      <div className={styles.container}>
        <h2 id="video-heading" className={`${styles.sectionTitle} ${styles.pinkTitle}`}>
          Understand Uttar Basti Therapy from Our Experts
        </h2>
        <br />
        <div className={styles.videoWrap}>
          {playVideo ? (
            <div className={styles.videoThumb}>
              <iframe
                src="https://www.youtube.com/embed/Jn8NzRi9cVM?autoplay=1"
                title="Uttar Basti Therapy Explanation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: 0 }}
              />
            </div>
          ) : (
            <div
              className={styles.videoThumb}
              onClick={() => setPlayVideo(true)}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://img.youtube.com/vi/Jn8NzRi9cVM/maxresdefault.jpg"
                alt="Doctor explaining Uttar Basti therapy"
                className={styles.videoThumbImg}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://img.youtube.com/vi/Jn8NzRi9cVM/hqdefault.jpg";
                }}
              />
              <div className={styles.videoOverlay}>
                <button
                  suppressHydrationWarning
                  className={styles.playBtn}
                  aria-label="Play video"
                  onClick={() => setPlayVideo(true)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.videoCta}>
          <a href="#lead-form" className={styles.btnPrimary}>Book Consultation</a>
        </div>
      </div>
    </section>
  );
}