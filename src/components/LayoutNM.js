// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import {Helmet} from "react-helmet/es/Helmet";
import {Helmet} from 'react-helmet';
import {safePrefix} from "../utils";
import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import FooterNM from "./FooterNM";
import HeaderNM from "./HeaderNM";


const LayoutNM = ({ children }) => {
    const props = useSiteMetadata();

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${ props.title } - ${children.id}`}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initialScale=1.0"/>
                <meta name="google" content="notranslate"/>
                <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i"
                      rel="stylesheet"/>
                <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
            </Helmet>
            <div id="page" className={`site palette-${props.palette}`}>
                <HeaderNM {...props} />
                <main id="content" className="site-content">
                    {children}
                </main>
                <FooterNM {...props}/>
            </div>
        </React.Fragment>
    )
}

export default LayoutNM
