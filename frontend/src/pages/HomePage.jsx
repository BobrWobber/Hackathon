import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import ux_design from '../images/ux_design.png'
import logo_design from '../images/toni_img.png'
import appstore from '../images/toni_appstore.png'
import map_card from '../images/behördenMap.png'
import Dashboard from "./Dashboard"
import { useVoiceflowBot } from '../hooks/voiceflow.js';


const HomePage = () => {
  // Initialize the Voiceflow bot
  useVoiceflowBot();
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="./css/styles.css" />
        <link rel="icon" href={logo_design} />
        <title>Bürgerservice Toni | Kundensupport</title>
      </head>
      <body>
        <nav className="navbar">
          <div className="navbar__container container">
            <div className="navbar__logo">
              {/* <img src={logo_design} alt="" /> */}
            </div>
            <div className="navbar__menu">
              <ul className="navbar__menu-list">
                <li className="navbar__menu-item">
                  <Link to="index.html" className="navbar__menu-link">Home</Link>
                </li>
                <li className="navbar__menu-item">
                  <Link to="index.html#features" className="navbar__menu-link">Features</Link>
                </li>
                <li className="navbar__menu-item">
                  <Link to="index.html#details" className="navbar__menu-link">Details</Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu & Hamburger Icon */}
            <div className="navbar__mobile-menu">
              <div className="navbar__mobile-menu-toggle">
                <i className="fas fa-bars fa-2x"></i>
              </div>
              {/* Mobile Menu Items */}
              <div className="navbar__mobile-menu-items">
                <ul className="navbar__mobile-menu-list">
                  <li className="navbar__mobile-menu-item">
                    <Link to="index.html" className="navbar__mobile-menu-link">Home</Link>
                  </li>
                  <li className="navbar__mobile-menu-item">
                    <Link to="index.html#features" className="navbar__mobile-menu-link">Features</Link>
                  </li>
                  <li className="navbar__mobile-menu-item">
                    <Link to="index.html#details" className="navbar__mobile-menu-link">Details</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="hero">
          <div className="hero__container container">
            <div className="hero__content">
              <h1 className="hero__title">
                Dein
                <span className="hero__title--primary"> Bürgerservice</span> Assistant Toni
              </h1>
              <p className="hero__description">
                Unser digitaler Assistent Toni macht den BürgerService einfacher und schneller. 
                Ob Anträge, Informationen oder Terminvereinbarungen – mit nur wenigen Klicks erhalten Sie genau die Unterstützung, die Sie brauchen.
                Rund um die Uhr verfügbar, benutzerfreundlich und ohne lange Wartezeiten. Starten Sie jetzt und erledigen Sie Ihr Anliegen bequem online!
              </p>
              <div className="hero__buttons">
                <Link to="./Dashboard" className="hero__button btn">
                  <i className="fa-brands"></i> Employee Dashboard
                </Link>
                <Link to="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/14/09/20250314090706-AN1K3RI9.json" className="hero__button btn">
                  <i className="fa-brands"></i> Chat Assistant
                </Link>
              </div>
            </div>
            <div className="hero__image">
              <img src={ux_design} alt="Bürgerservice" />
            </div>
          </div>
        </header>

        {/* Features */}
        <section className="features" id="features">
          <div className="features__container container">
            <div className="features__content">
              <h2 className="features__title">Vorteile mit Toni</h2>
              {/* <p className="features__description">
                Die Vorteile von Toni, unseren Bürgerservice Assistenten sind Zahlreich. Darunter gehören: 
              </p> */}
              <div className="features__grid">
                <div className="features__grid-item">
                  <div className="features__grid-item-text">
                    <div className="features__grid-item-icon">
                      <i className="fas fa-rocket fa-4x"></i>
                    </div>
                    <h4 className="features__grid-item-text-title">Zussammenfasung von Dokumenten</h4>
                    <p className="features__grid-item-text-description">
                      Access real-time data instantly, ensuring you're always up-to-date.
                    </p>
                  </div>
                </div>

                <div className="features__grid-item">
                  <div className="features__grid-item-text">
                    <div className="features__grid-item-icon">
                      <i className="fas fa-code fa-4x"></i>
                    </div>
                    <h4 className="features__grid-item-text-title">Antworten auf Ihre Fragen</h4>
                    <p className="features__grid-item-text-description">
                      Customize your workspace with our intuitive visual editor.
                    </p>
                  </div>
                </div>
                <div className="features__grid-item">
                  <div className="features__grid-item-text">
                    <div className="features__grid-item-icon">
                      <i className="fas fa-gem fa-4x"></i>
                    </div>
                    <h4 className="features__grid-item-text-title">24/7 Erreichbarkeit</h4>
                    <p className="features__grid-item-text-description">
                      Access a wide range of refined options to tailor Toni to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        <div className="modal" id="videoModal">
          <div className="modal__content">
            <span className="modal__close-button">&times;</span>
            <iframe
              src=""
              frameborder="0"
              id="videoPlayer"
              width="560"
              height="315"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Details */}
        <section className="details" id="details">
          <div className="details__container container">
            <div className="details__grid">
              {/* Grid Item 1 */}
              <div className="details__grid-image">
                <img src={map_card} alt="Toni App" />
              </div>
              {/* Grid Item 2 */}
              <div className="details__grid-content">
                <h3 className="details__grid-heading">
                  Benutze Toni, um zu sehen, welche Behörden ausgelastet sind
                </h3>
                <p className="details__grid-description">
                  Toni zeigt dir auf einer Karte, welche Behörden gerade viel zu tun haben und wo es schneller geht. So kannst du Wartezeiten vermeiden und deine Termine besser planen.
                </p>            
                <Link to="details.html" className="details__grid-button btn">Mehr</Link>
              </div>
            </div>

            {/* Icons */}
            <div className="details__icons">
              <div className="details__icons-item">
                <i className="fas fa-users fa-4x"></i>
                <div className="details__icons-amount">55, 000</div>
                <h4 className="details__icons-title">Glückliche Nutzer</h4>
              </div>
              <div className="details__icons-item">
                <i className="fas fa-code fa-4x"></i>
                <div className="details__icons-amount">5845</div>
                <h4 className="details__icons-title">Termine vereinbart</h4>
              </div>
              <div className="details__icons-item">
                <i className="fas fa-comments fa-4x"></i>
                <div className="details__icons-amount">788</div>
                <h4 className="details__icons-title">Positive Reviews</h4>
              </div>
              <div className="details__icons-item">
                <i className="fas fa-rocket fa-4x"></i>
                <div className="details__icons-amount">100</div>
                <h4 className="details__icons-title">Case Studies</h4>
              </div>
              <div className="details__icons-item">
                <i className="fas fa-edit fa-4x"></i>
                <div className="details__icons-amount">110</div>
                <h4 className="details__icons-title">Press Article</h4>
              </div>
            </div>
          </div>
        </section>
        
        {/* SCREENSHOTS */}
        <section className="screenshots" id="screenshots">
          <div className="screenshots__container container">
            <div className="screenshots__content">
              <h2 className="screenshots__title">Screenshots</h2>
              <div className="screenshots__images">
                <img src={appstore} alt="Screenshot" />
                {/* <img src="./images/screenshot-2.png" alt="Screenshot" />
                <img src="./images/screenshot-3.png" alt="Screenshot" /> */}
                {/* <img src="./images/screenshot-4.png" alt="Screenshot" /> */}
                {/* <img src="./images/screenshot-5.png" alt="Screenshot" /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer__container container">
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <i className="fa-brands fa-facebook fa-3x"></i>
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
        <script src="./js/script.js"></script>
      </body>
    </div>
  );
};

export default HomePage;