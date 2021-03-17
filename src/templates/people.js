import React from 'react';
import _ from 'lodash';
import {Layout} from '../components/index';
import SEO from "../components/seo";
import ListPeople from '../components/ListPeople';


export default class Landing extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <SEO
              title={_.get(this.props, 'pageContext.site.siteMetadata.title')}
              description={_.get(this.props, 'pageContext.site.siteMetadata.description')}
              image={_.get(this.props, 'pageContext.frontmatter.ogimage')}
            />
            <section id="episodes" class="block posts-block bg-gray outer">
              <div class = "block-header inner-small">
                <h2 class="block-title">Players and Hosts of DevOps Party Games</h2>
              </div>
              
              <div class = "inner">
                <div class = "post-feed">
                  <ListPeople />
                </div>
                
              </div>
            </section>
            </Layout>
        );
    }
}

