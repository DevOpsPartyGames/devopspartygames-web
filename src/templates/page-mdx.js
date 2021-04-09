import React from "react";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {Helmet} from "react-helmet";
import {safePrefix} from "../utils";
// import MDXHeader from "../components/MDXHeader";
// import MDXFooter from "../components/MDXFooter";
import FooterNM from "../components/FooterNM";
import HeaderNM from "../components/HeaderNM";
import {StaticQuery, graphql} from "gatsby";

export default function PageMdx() {
    return (
        <StaticQuery query={graphql`
            query {
        site {
            siteMetadata {
                palette
                title
                header {
                    logo_img
                    has_nav
                    title
                    nav_links {
                        label
                        url
                    }
                }
                description
                footer {
                    content
                    has_nav
                    has_social
                    links {
                        label
                        url
                    }
                    logo_img
                    tagline
                    social_title
                    social_links {
                        label
                        url
                    }
                    nav_title
                    nav_links {
                        label
                        url
                    }
                }
            }
        }
        mdx {
            id
            slug
            body
            frontmatter {
                title
                subtitle
            }
        }
    }
                            `}
                     render={data => (
                         <React.Fragment>
                             <Helmet>
                                 <title>{data.site.siteMetadata.title}</title>
                                 <meta charSet="utf-8"/>
                                 <meta name="viewport" content="width=device-width, initialScale=1.0"/>
                                 <meta name="google" content="notranslate"/>
                                 <link rel="preload" href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i&display=swap" as="style" />
                                 <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i&display=swap" />
                                 <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                             </Helmet>
                             <div id="page" className='site palette-blue'>
                                 <HeaderNM {...data.site.siteMetadata} />
                                 <main id="content" className="site-content">
                                     <div className="outer">
                                         <div className="inner-medium">
                                             <article className="post post-full">
                                                 <header className="post-header">
                                                     <h1 className="post-title">{data.mdx.frontmatter.title}</h1>
                                                 </header>
                                                 {data.mdx.frontmatter.image &&
                                                 <div className="post-thumbnail">
                                                     <img
                                                         src={data.mdx.frontmatter.image}
                                                         alt={data.mdx.frontmatter.title}/>
                                                 </div>
                                                 }
                                                 {data.mdx.frontmatter.subtitle &&
                                                 <div className="post-subtitle">
                                                     {data.mdx.frontmatter.subtitle}
                                                 </div>
                                                 }
                                                 <MDXRenderer className="post-content">
                                                     {data.mdx.body}
                                                 </MDXRenderer>
                                             </article>
                                         </div>
                                     </div>
                                 </main>
                                 <FooterNM {...data.site.siteMetadata} />
                             </div>
                         </React.Fragment>
                     )}
        />
    )
}
