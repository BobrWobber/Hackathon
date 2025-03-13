import React, { useEffect } from 'react';
import './css/styles.css';
import { Link } from 'react-router-dom';

const Chatbot = () => {
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

