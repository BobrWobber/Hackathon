import React, { useEffect } from 'react';
import './css/styles.css';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'YOUR_BOTPRESS_BOT_ID',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'YOUR_CLIENT_ID',
        webhookId: 'YOUR_WEBHOOK_ID',
        lazySocket: true,
        themeName: 'prism',
        stylesheet: 'https://webchat-styler-css.botpress.app/prod/code/90281be9-c517-47a6-b1dc-b18afc98d4c8/v39673/style.css',
        frontendVersion: 'v1',
        useSessionStorage: true,
        theme: 'light',
        themeColor: '#2563eb',
      });

      window.botpressWebChat.onEvent(
        function (event) {
          if (event.type === 'LIFECYCLE.LOADED') {
            window.botpressWebChat.sendEvent({ type: 'LIFECYCLE.TOGGLE' });
          }
        },
        ['LIFECYCLE.LOADED']
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <navbar className="navbar">
        <div className="navbar__container container">
          <div className="navbar__logo">
            <img src="./images/logo.svg" alt="Leno" />
          </div>
          <div className="navbar__menu">
            <ul className="navbar__menu-list">
              <li className="navbar__menu-item">
                <a href="index.html" className="navbar__menu-link">Home</a>
              </li>
              <li className="navbar__menu-item">
                <a href="index.html#features" className="navbar__menu-link">Features</a>
              </li>
              <li className="navbar__menu-item">
                <a href="index.html#preview" className="navbar__menu-link">Preview</a>
              </li>
              <li className="navbar__menu-item">
                <a href="index.html#details" className="navbar__menu-link">Details</a>
              </li>
              <li className="navbar__menu-item">
                <a href="index.html#download" className="navbar__menu-link">Download</a>
              </li>
              <li className="navbar__menu-item">
                <a href="#" className="navbar__menu-link--primary">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="navbar__menu-item">
                <a href="#" className="navbar__menu-link--primary">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar__mobile-menu">
            <div className="navbar__mobile-menu-toggle">
              <i className="fas fa-bars fa-2x"></i>
            </div>
            <div className="navbar__mobile-menu-items">
              <ul className="navbar__mobile-menu-list">
                <li className="navbar__mobile-menu-item">
                  <a href="index.html" className="navbar__mobile-menu-link">Home</a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a href="index.html#features" className="navbar__mobile-menu-link">Features</a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a href="index.html#preview" className="navbar__mobile-menu-link">Preview</a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a href="index.html#details" className="navbar__mobile-menu-link">Details</a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a href="index.html#download" className="navbar__mobile-menu-link">Download</a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a href="#" className="navbar__mobile-menu-link--primary">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a href="#" className="navbar__mobile-menu-link--primary">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </navbar>
      <header className="hero">
        <div className="hero__container container">
          <div className="hero__content">
            <h1 className="hero__title">
              Your <span className="hero__title--primary">productivity</span> assistant
            </h1>
            <p className="hero__description">
              Boost your productivity and improve your health with Leno - the all-in-one app for developers and creators.
            </p>
            <div className="hero__buttons">
              <a href="#download" className="hero__button btn">
                <i className="fa-brands fa-apple"></i> For Apple
              </a>
              <Link to="/secondpage" className="hero__button btn">
              <a href="#download" className="hero__button btn">
                <i className="fa-brands fa-android"></i> Got to Second Page
              </a>
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <img src="./images/header-smartphones.png" alt="Leno App" />
          </div>
        </div>
      </header>
      <main className="main-content">
        {/* Your page content goes here */}
      </main>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__social">
            <a href="#" className="footer__social-link">
              <i className="fa-brands fa-facebook fa-3x"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="fa-brands fa-twitter fa-3x"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="fa-brands fa-instagram fa-3x"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="fa-brands fa-linkedin fa-3x"></i>
            </a>
          </div>
        </div>
      </footer>
      <div id="botpress-webchat-container"></div>
    </div>
  );
};


// COMMENT JSX REACT SCRIPT
import { useState } from 'react';

import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';

const clientId = "a7d07157-0a08-4434-b9f2-ac4f2fdd446c";

const configuration: Configuration = {
  color: '#000',
};

export default function App() {
  const client = getClient({
    clientId,
  });

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WebchatProvider client={client} configuration={configuration}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? 'block' : 'none',
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}


export default Chatbot;
