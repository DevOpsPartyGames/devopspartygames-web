import React from 'react';
import _ from 'lodash';

import {htmlToReact, Link, safePrefix} from '../utils';
import ActionLink from './ActionLink';

export default class MDXFooter extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
                <div className="footer-top outer">
                    <div className="inner">
                        <div className="footer-widgets">
                            <div className="widget footer-branding">
                                {this.props.site.siteMetadata.footer.logo_img ?
                                    <p className="site-logo">
                                        <Link to={safePrefix('/')}><img
                                            src={safePrefix(this.props.site.siteMetadata.footer.logo_img)} alt="Logo"/></Link>
                                    </p>
                                    :
                                    <p className="site-title">
                                        <Link to={safePrefix('/')}>{this.props.site.siteMetadata.header.title}</Link>
                                    </p>
                                }
                                {this.props.site.siteMetadata.footer.tagline &&
                                <p className="site-description">
                                    {this.props.site.siteMetadata.footer.tagline}
                                </p>
                                }
                            </div>
                            {(this.props.site.siteMetadata.footer.has_nav && this.props.site.siteMetadata.footer.nav_links) &&
                            <nav className="widget footer-navigation">
                                <div className="footer-nav-inside">
                                    {(this.props.site.siteMetadata.footer.nav_links && this.props.site.siteMetadata.footer.has_nav) &&
                                    <div className="secondary-nav">
                                        <h2 className="widget-title">{this.props.site.siteMetadata.footer.nav_title}</h2>
                                        <ul className="secondary-menu">
                                            {_.map(this.props.site.siteMetadata.footer.nav_links, (action, action_idx) => (
                                                <li key={action_idx}>
                                                    <ActionLink {...this.props} action={action}/>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    }
                                </div>
                            </nav>
                            }
                        </div>
                    </div>
                </div>
                <div className="site-info outer">
                    <div className="inner">
                        {htmlToReact(this.props.site.siteMetadata.footer.content)}
                        &nbsp;
                        {_.map(this.props.site.siteMetadata.footer.links, (action, action_idx) => (
                            <ActionLink key={action_idx} {...this.props} action={action}/>
                        ))}
                    </div>
                </div>
            </footer>
        );
    }
}
