import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="site-footer"
      id="colophon"
      itemScope
      itemType="https://schema.org/WPFooter"
      itemId="#colophon"
    >
      <div
        className="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-2-lheavy ast-builder-grid-row-tablet-2-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack"
        data-section="section-primary-footer-builder"
      >
        <div className="ast-builder-grid-row-container-inner">
          <div className="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
            <div className="site-footer-primary-section-1 site-footer-section site-footer-section-1">
              <div
                className="footer-widget-area widget-area site-footer-focus-item"
                data-section="section-footer-menu"
              >
                <div className="footer-bar-navigation">
                  <nav
                    className="site-navigation ast-flex-grow-1 navigation-accessibility footer-navigation"
                    id="footer-site-navigation"
                    aria-label="Site Navigation"
                    itemType="https://schema.org/SiteNavigationElement"
                    itemScope
                    itemProp="https://schema.org/SiteNavigationElement"
                  >
                    <div className="footer-nav-wrap">
                      <ul
                        id="astra-footer-menu"
                        className="ast-nav-menu ast-flex astra-footer-vertical-menu astra-footer-tablet-vertical-menu astra-footer-mobile-vertical-menu"
                      >
                        <li
                          id="menu-item-161"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161"
                        >
                          <a
                            href="https://moveit.com.ph/how-it-works/"
                            className="menu-link"
                          >
                            How it Works
                          </a>
                        </li>
                        <li
                          id="menu-item-161"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161"
                        >
                          <a
                            href="https://moveit.com.ph/how-it-works/"
                            className="menu-link"
                          >
                            Passenger Appeal Form
                          </a>
                        </li>
                        <li
                          id="menu-item-161"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161"
                        >
                          <a
                            href="https://moveit.com.ph/how-it-works/"
                            className="menu-link"
                          >
                            Move It Code of Conduc: Consumer
                          </a>
                        </li>
                        <li
                          id="menu-item-161"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161"
                        >
                          <a
                            href="https://moveit.com.ph/how-it-works/"
                            className="menu-link"
                          >
                            Trust, Safety & Insurance
                          </a>
                        </li>
                        <li
                          id="menu-item-161"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161"
                        >
                          <a
                            href="https://moveit.com.ph/how-it-works/"
                            className="menu-link"
                          >
                            Privacy Notice
                          </a>
                        </li>
                        <li
                          id="menu-item-161"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-161"
                        >
                          <a
                            href="https://moveit.com.ph/how-it-works/"
                            className="menu-link"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                      </ul>
                      <div className="footer-image-container">
                        <img
                          src="/img/logo2.png"
                          alt="Footer Image"
                          className="footer-image"
                        />
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="site-footer-primary-section-2 site-footer-section site-footer-section-2">
              <aside
                className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner"
                data-section="sidebar-widgets-footer-widget-1"
                aria-label="Footer Widget 1"
              >
                <section id="block-32" className="widget widget_block">
                  <figure className="wp-block-image size-large">
                    <img
                      src="https://moveit.com.ph/wp-content/uploads/2023/10/Clean2.png"
                      alt=""
                      style={{ maxWidth: "120px" }}
                    />
                  </figure>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-2-lheavy ast-builder-grid-row-tablet-2-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack"
        data-section="section-below-footer-builder"
      >
        <div className="ast-builder-grid-row-container-inner">
          <div className="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row">
            <div className="site-footer-below-section-1 site-footer-section site-footer-section-1">
              <div
                className="ast-builder-layout-element ast-flex site-footer-focus-item"
                data-section="section-footer-builder"
              >
                <div className="ast-footer-copyright">
                  <p>©2024 by MOVE IT Philippines. All Rights Reserved</p>
                </div>
                <div
                  className="footer-widget-area widget-area site-footer-focus-item ast-footer-html-1"
                  data-section="section-fb-html-1"
                >
                  <div className="footer-social-inner-wrap element-social-inner-wrap social-show-label-false ast-social-color-type-custom ast-social-stack-none ast-social-element-style-filled">
                    <a
                      href="https://www.instagram.com/moveitph/"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ast-builder-social-element ast-inline-flex ast-instagram footer-social-item-1"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "#8a3ab9" }}
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/moveitphil/"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ast-builder-social-element ast-inline-flex ast-facebook footer-social-item-2"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ color: "#557dbc" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
