module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-json`,
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
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
