import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, htmlToReact} from '../utils';
import ActionLink from './ActionLink';
import SubscribeForm from './SubscribeForm';

const FooterNM = (props) => {
        return (
            <footer id="colophon" className="site-footer">
              <div className="footer-top outer">
                <div className="inner">
                  <div className="footer-widgets">
                    <div className="widget footer-branding">
                      {props.footer.logo_img ?
                      <p className="site-logo">
                        <Link to={safePrefix('/')}><img src={safePrefix(props.footer.logo_img)} alt="Logo" /></Link>
                      </p>
                       : 
                      <p className="site-title">
                        <Link to={safePrefix('/')}>{props.header.title}</Link>
                      </p>
                      }
                      {props.footer.tagline &&
                      <p className="site-description">
                        {props.footer.tagline}
                      </p>
                      }
                    </div>
                    {
                        (
                            (props.footer.has_nav && props.footer.nav_links) ||
                            (props.footer.has_social && props.footer.social_links)
                        ) &&
                    <nav className="widget footer-navigation">
                      <div className="footer-nav-inside">
                        {
                            (props.footer.nav_links && props.footer.has_nav) &&
                        <div className="secondary-nav">
                          <h2 className="widget-title">{props.footer.nav_title}</h2>
                          <ul className="secondary-menu">
                            {_.map(props.footer.nav_links, (action, action_idx) => (
                            <li key={action_idx}>
                              <ActionLink {...props} action={action} />
                            </li>
                            ))}
                          </ul>
                        </div>
                        }
                        {props.footer.has_social &&
                        <div className="social-nav">
                          <h2 className="widget-title">{props.footer.social_title}</h2>
                          <ul className="social-links">
                            {_.map(props.footer.social_links, (action, action_idx) => (
                            <li key={action_idx}>
                              <ActionLink {...props} action={action} />
                            </li>
                            ))}
                          </ul>
                        </div>
                        }
                      </div>
                    </nav>
                    }
                    {props.footer.has_subscribe &&
                    <div className="widget footer-subscribe">
                      <h2 className="widget-title">{props.footer.subscribe_title}</h2>
                      {props.footer.subscribe_content &&
                      <p>{htmlToReact(props.footer.subscribe_content)}</p>
                      }
                      <SubscribeForm {...props} />
                    </div>
                    }
                  </div>
                </div>
              </div>
              <div className="site-info outer">
                <div className="inner">
                  {htmlToReact(props.footer.content)}
                  &nbsp;
                  {_.map(props.footer.links, (action, action_idx) => (
                    <ActionLink key={action_idx} {...props} action={action} />
                  ))}
                </div>
              </div>
            </footer>
        );
    };

export default FooterNM