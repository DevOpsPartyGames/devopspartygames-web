module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-json`,
        `gatsby-plugin-antd`,
        `gatsby-plugin-advanced-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "DevOps Party Games",
                short_name: "DevOps Party Games",
                start_url: "/",
                background_color: "#f7f9fb",
                theme_color: "#4c5269",
                display: "standalone",
                icons: [
                    {
                        src: "/images/icons/favicon.svg",
                        type: "image/svg",
                        sizes: "192x192"
                    },
                    {
                        src: "/images/icons/icon_512.png",
                        type: "image/png",
                        sizes: "512x512"
                    },
                    {
                        src: "/images/icons/maskable_icon.png",
                        sizes: "196x196",
                        type: "image/png",
                        purpose: "any maskable"
                    }
                ]
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data`
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              // replace "UA-XXXXXXXXX-X" with your own Tracking ID
              trackingId: "UA-167098414-1",
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`],
                defaultLayouts: {
                    pages: require.resolve("./src/templates/page-mdx.js"),
                    default: require.resolve("./src/templates/page-mdx.js"),
                },
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://devopspartygames.us2.list-manage.com/subscribe/post?u=f5a52a13fe832c1bd09846fb3&amp;id=f653bcdca8',
            },
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
