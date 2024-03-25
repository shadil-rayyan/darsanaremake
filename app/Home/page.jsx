'use client'
import React from "react";

const DotIndicator = () => (
  <div className="dot-indicator" />
);

export default function EmpoweringDreams() {
  return (
    <>
      <style jsx>{`
        .banner {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 1);
          align-items: start;
          min-height: 720px;
          margin-top: 35px;
          width: 100%;
          padding: 80px 80px 14px;
        }
        .banner-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .banner-title,
        .action-title {
          position: relative;
          color: #fff;
          font-weight: 700;
          font-size: 64px;
          line-height: 77px;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .what-we-do,
        .action-button {
          display: flex;
          justify-content: center;
          gap: 8px;
          background-color: #0162e8;
          border-radius: 8px;
          padding: 12px 16px;
        }
        .video-button {
          display: flex;
          align-items: center;
          padding: 16px 32px;
        }
        .video-icon {
          aspect-ratio: 1;
          object-fit: cover;
          width: 24px;
        }
        .scholarship-title {
          color: rgba(255, 255, 255, 0.89);
          font-weight: 800;
          font-size: 20px;
          font-family: Roboto, sans-serif;
        }
        .dot-container {
          display: flex;
          gap: 9px;
          padding: 10px;
        }
        .dot-indicator {
          background-color: var(--Neutral-Gray, #8d8d8d);
          border-radius: 50%;
          width: 8px;
          height: 8px;
        }
        @media (max-width: 991px) {
          .banner {
            padding: 0 20px;
          }
          .banner-title,
          .action-title {
            font-size: 40px;
            line-height: 53px;
            margin-top: 40px;
          }
          .what-we-do,
          .action-button,
          .video-button {
            padding: 0 20px;
          }
        }
      `}</style>

      <header className="banner">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06d9c60dcb0372e7e23ee879391e2e809fe7ef45fce62f82b72de997b2a82fcd?apiKey=9170b13b4ade437289408c6c891662ab&"
          alt="Empowering Dreams Banner"
          className="banner-image"
        />
        <h1 className="banner-title">Empowering Dreams, Transforming Lives</h1>
        <section className="what-we-do">
          <h2 className="action-title">What we do</h2>
          <div className="video-button">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fff30e84ec455a820daa5e6d3797507ce1beb5d2e3753a7b53828f34a1deb6f6?apiKey=9170b13b4ade437289408c6c891662ab&"
              alt="Play Video Icon"
              className="video-icon"
            />
            <div>Play Video</div>
          </div>
        </section>
        <h2 className="scholarship-title">Biju Cherian Scholarship (BCS) program</h2>
        <div className="dot-container">
          <DotIndicator />
          <DotIndicator />
          <DotIndicator />
          <DotIndicator />
          <DotIndicator />
          <DotIndicator />
          <DotIndicator />
          <DotIndicator />
        </div>
      </header>
    </>
  );
}