/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <html lang="en">
      <head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-47073255-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
        
              gtag("config", "UA-47073255-2");
           `,
          }}
        />

        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Monmouth Rambling and Hillwalking Club is a long established walking club based in Monmouth. We walk every Sunday in our beautiful local countryside."
        />
        <meta name="author" content="" />

        <title>Monmouth Rambling and Hillwalking Club</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          property="og:title"
          content="Monmouth Rambling and Hillwalking Club"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Monmouth Rambling and Hillwalking Club is a long established walking club based in Monmouth. We walk every Sunday in our beautiful local countryside."
        />
        <meta
          property="og:image"
          content="https://monmouthwalkers.com/images/pen-y-crug.jpg"
        />
        <meta property="og:url" content="https://monmouthwalkers.com/" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://monmouthwalkers.com/" />
        <meta
          name="twitter:title"
          content="Monmouth Rambling and Hillwalking Club"
        />
        <meta
          name="twitter:description"
          content="Monmouth Rambling and Hillwalking Club is a long established walking club based in Monmouth. We walk every Sunday in our beautiful local countryside."
        />
        <meta
          name="twitter:image"
          content="https://monmouthwalkers.com/images/pen-y-crug.jpg"
        />

        {/* <!-- Bootstrap core CSS --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Dosis|PT+Sans"
          rel="stylesheet"
        />
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="vendor/lightbox/ekko-lightbox.css" rel="stylesheet" />

        {/* <!-- Custom styles for this template --> */}
        <link href="css/main.css" rel="stylesheet" />

        <div id="fb-root"></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (d, s, id) {
                var js,
                  fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src =
                  "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1&appId=2125053681069339&autoLogAppEvents=1";
                fjs.parentNode.insertBefore(js, fjs);
              })(document, "script", "facebook-jssdk");
           `,
          }}
        />
      </head>

      <body id="top">
        {/* <!-- Navigation --> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#top">
              <img src="/images/welsh_dragon-simple.svg" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#contact">
                    Join
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#gallery">
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#faq">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
