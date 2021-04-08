import {useStaticQuery, graphql} from "gatsby";

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteTitleQuery {
                site {
                    id
                    siteMetadata {
                        description
                        footer {
                            content
                            has_nav
                            has_social
                            links {
                                label
                                new_window
                                url
                            }
                            logo_img
                            tagline
                            social_title
                            social_links {
                                label
                                new_window
                                url
                            }
                            nav_title
                            nav_links {
                                label
                                new_window
                                url
                            }
                        }
                        title
                        social {
                            twitter
                        }
                        siteUrl
                        palette
                        image
                        header {
                            has_nav
                            logo_img
                            nav_links {
                                label
                                new_window
                                url
                            }
                            title
                        }
                    }
                }
            }
        `
    )
    return site.siteMetadata
}
