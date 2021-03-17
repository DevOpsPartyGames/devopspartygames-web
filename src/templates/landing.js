import React from 'react';
import _ from 'lodash';
import components, {Layout} from '../components/index';
import SEO from "../components/seo";
import ListEpisodes from '../components/ListEpisodes';
import { safePrefix } from '../utils';


export default class Landing extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <SEO
              title={_.get(this.props, 'pageContext.site.siteMetadata.title')}
              description={_.get(this.props, 'pageContext.site.siteMetadata.description')}
              image={_.get(this.props, 'pageContext.frontmatter.ogimage')}
            />
            
            <section id="hero" class = "block hero-block outer">
              <div class = "inner">
                <div class = "grid">
                  <div class = "cell block-preview">
                    <img 
                      src = {safePrefix(`images/game-logo-with-stroke.png`)}
                    />
                  </div>
                  <div class = "cell block-content">
                    <div class = "hero-copy">
                      <p>
                        DevOps Party Games takes the idea of "online party games" and tilts it on its head by adding DevOps-inspired content to existing games, 
                        and then <a href = "https://twitch.tv/devopspartygames">streams it live via Twitch</a> for a worldwide audience to watch, comment, 
                        and hopefully be entertained. In addition, the hosts (<a href = "https://twitter.com/mattstratton">Matt Stratton</a>, 
                        <a href = "https://twitter.com/IAmJerdog">Jeremy Meiss</a>, and <a href = "https://twitter.com/phrawzty">Dan Maher</a>) 
                        will provide color commentary, much like a modern day Cotton McKnight and Pepper Brooks (announcers from <i>Dodgeball</i>). 
                        <br/>
                        <br/>
                        The goal here is to have fun and not take things too seriously.
                        A live streamed game show that is most definitely a ridiculous idea, but hopefully entertaining.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="episodes" class="block posts-block bg-gray outer">
              <div class = "block-header inner-small">
                <h2 class="block-title">Episodes</h2>
              </div>
              
              <div class = "inner">
                <div class = "post-feed">
                  <ListEpisodes />
                </div>
                
              </div>
            </section>
            </Layout>
        );
    }
}

