import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';
import SEO from "../components/seo";

export default class Landing extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <SEO
              title={_.get(this.props, 'pageContext.site.siteMetadata.title')}
              description={_.get(this.props, 'pageContext.site.siteMetadata.description')}
              image={_.get(this.props, 'pageContext.frontmatter.ogimage')}
            />
            {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type')));
                let Component = components[component];
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })}
            </Layout>
        );
    }
}
