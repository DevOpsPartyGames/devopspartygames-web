import React from 'react';
import _ from 'lodash';
import {Layout} from '../components/index';
import SEO from "../components/seo";
import ListAllScores from '../components/ListAllScores';
import {safePrefix, htmlToReact} from '../utils';


export default class Landing extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <SEO
              title={_.get(this.props, 'pageContext.site.siteMetadata.title')}
              description={_.get(this.props, 'pageContext.site.siteMetadata.description')}
              image={_.get(this.props, 'pageContext.frontmatter.ogimage')}
            />
            <div className="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title dpg-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.image') && 
                  <div className="post-thumbnail">
                    <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.image'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
                  </div>
                  }
                  {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                  </div>
                  }
                  <div className="post-content">
                  <ListAllScores />
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}

