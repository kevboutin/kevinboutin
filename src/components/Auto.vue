<template>
    <div class="auto">
        <div id="outer-wrap">
            <div id="inner-wrap">
                <div id="header-container">
                    <header id="top" role="banner" class="clearfix">
                        <div class="block">
                            <a class="nav-btn" id="nav-open-btn" href="#nav">Navigation</a>
                        </div>
                        <nav id="nav" role="navigation">
                            <div class="wrapper block">
                                <ul>
                                    <li><a href="#wheels" title="wheels" rel="section">wheels</a></li><!--
                                 --><li><a href="#paint" title="paint" rel="section">paint</a></li><!--
                                 --><li><a href="#trim" title="trim" rel="section">trim</a></li><!--
                                 --><li><a href="#interior" title="interior" rel="section">interior</a></li>
                                </ul>
                                <a class="close-btn" id="nav-close-btn" href="#top">Return to Content</a>
                            </div>
                        </nav>
                        <h1 class="title">Recommendations for Auto Detailing</h1>
                        <div id="logo">
                            <span aria-hidden="true" class="icon-kblogo-sm logo"></span>
                        </div>
                    </header>
                </div>
                <div id="main-container">
                    <article role="main">
                        <section id="wheels">
                            <div class="wrapper">
                                <h2>wheels</h2>
                                <p>This section covers all products I recommend for usage on wheels.</p>
                                <ul>
                                    <li><a href="#wheels" title="wheels" rel="section">wheels</a></li>
                                </ul>
                            </div>
                        </section>
                        <section id="paint">
                            <div class="wrapper clearfix">
                                <h2>paint</h2>
                                <p>This section covers all products I recommend for usage on paint.</p>
                                <ul>
                                    <li><a href="#wheels" title="wheels" rel="section">paint</a></li>
                                </ul>
                            </div>
                        </section>
                        <section id="trim">
                            <div class="wrapper clearfix">
                                <h2>trim</h2>
                                <p>This section covers all products I recommend for usage on trim.</p>
                                <ul>
                                    <li><a href="#wheels" title="wheels" rel="section">trim</a></li>
                                </ul>
                            </div>
                        </section>
                        <section id="interior">
                            <div class="wrapper clearfix">
                                <h2>interior</h2>
                                <p>This section covers all products I recommend for usage on interiors.</p>
                                <ul>
                                    <li><a href="http://amzn.to/2wwdJ9b" title="glass" rel="section">Stoner
                                        invisible glass cleaner</a></li>
                                </ul>
                            </div>
                        </section>
                    </article>
                </div>
                <div id="footer-container">
                    <footer class="clearfix">
                        <div class="wrapper">
                            <p class="copy">&copy; 2019 Kevin Boutin <a rel="license"
                                                                        title="creative commons licensed work" target="_blank" href="//creativecommons.org/licenses/by/3.0/deed.en_US"><span aria-hidden="true" class="icon-creativecommons"></span></a></p>
                            <ul>
                                <li><a href="//plus.google.com/100734934401965975191" title="me on google+" rel="me" target="_blank"><span aria-hidden="true" class="icon-google-plus"></span><span class="descrip">&nbsp;google+</span></a></li>
                                <li><a href="//facebook.com/kevin.boutin" title="me on facebook" rel="me" target="_blank"><span aria-hidden="true" class="icon-facebook"></span><span class="descrip">&nbsp;facebook</span></a></li>
                                <li><a href="//twitter.com/kevboutin" title="me on twitter" rel="me" target="_blank"><span aria-hidden="true" class="icon-twitter"></span><span class="descrip">&nbsp;twitter</span></a></li>
                                <li><a href="//www.behance.net/kevboutin" title="me on behance" rel="me" target="_blank"><span aria-hidden="true" class="icon-behanced"></span><span class="descrip">&nbsp;behance</span></a></li>
                                <li><a href="//linkedin.com/in/kevinboutin/" title="me on linkedin" rel="me" target="_blank"><span aria-hidden="true" class="icon-linkedin"></span><span class="descrip">&nbsp;linkedin</span></a></li>
                                <li><a href="//github.com/kevboutin" title="fork me on github" rel="me" target="_blank"><span aria-hidden="true" class="icon-github"></span><span class="descrip">&nbsp;github</span></a></li>
                                <li><a href="mailto:me@kevinboutin.me" title="me on email" rel="me" target="_blank"><span aria-hidden="true" class="icon-mail"></span><span class="descrip">&nbsp;email</span></a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Auto',
        components: {
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html {
        color: #333;
    }
    body {
        font-size: 1em;
        line-height: 1.4;
        background: url('../assets/noise.png');
    }
    ::-moz-selection {
        background: #b3d4fc;
        text-shadow: none;
    }
    ::selection {
        background: #b3d4fc;
        text-shadow: none;
    }
    img {
        vertical-align: middle;
    }

    /* Links */
    a { color: #ccc; text-decoration: none; }
    a:visited { color: #ccc; text-decoration: none; }
    a:hover { color: #fff; text-decoration: none; }

    /* Standard links that are not images */
    #main-container a:not(.image) {
        color: #3f89bb;
        text-decoration: none;
        -webkit-transition: color 1.15s ease;
        -moz-transition: color 1.15s ease;
        -o-transition: color 1.15s ease;
        transition: color 1.15s ease;
    }
    #main-container a:not(.image):hover {
        color: #67e2fe;
        text-shadow: none;
        border: none;
    }

    h1, h2 {
        font-family: 'apple_chancerychancery';
        -webkit-font-smoothing: antialiased;
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }
    .logo {
        position: fixed;
        top: 6px;
        right: 6px;
        left: auto;
        bottom: 0;
        z-index: 200;
        font-size: 2.1em !important;
    }
    .roundimg {
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.65);
        height: 286px;
        width: 400px;
        overflow: hidden; /* keeps the image corners from peeking out over the border */
    }
    .toppush { padding-top: 2em; }
    .botpush { padding-bottom: 6em; }
    .smtxt {
        font-size: 0.8em !important;
        text-align: right;
        list-style-type: none;
    }
    #header-container,
    #footer-container {
        position: fixed;
        background: transparent;
        width: 100%;
        color: #fff;
        z-index: 10;
    }
    #footer-container {
        bottom: 0;
        right: 0;
    }
    article {
        background: url('../assets/noise.png') #eee;
        padding: 0;
    }
    #wheels {
        background: url('../assets/noise.png') #eee;
        padding: 4em 0;
    }
    #paint {
        background: url('../assets/noise.png') #fff;
    }
    #trim {
        background: url('../assets/noise.png') #ddd;
    }
    #interior {
        background: url('../assets/noise.png') #eee;
        padding: 0.5em 0 2.1em 0;
        margin-left: 0;
        margin-right: 0;
    }
    header#top {
        margin-top: 0;
    }
    .copy {
        font-size: .8em;
        float: left;
    }
    .block {
        position: relative;
        margin: 0 auto;
        max-width: 60em;
    }
    .auto {
        padding: 0;
    }
    .auto article h1 {
        font-size: 2em;
    }
    #footer-container footer {
        padding: 20px 0;
    }
    .title {
        color: white;
    }
    .wrapper {
        width: 90%;
        margin: 0 5%;
    }

    /* ==============
       MOBILE: Menu
       ============== */
    nav ul {
        margin: 0;
        padding: 0;
    }
    nav a {
        display: block;
        margin-bottom: 10px;
        padding: 15px 0;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
    }
    nav a:hover,
    nav a:visited {
        color: white;
    }
    nav a:hover {
        text-decoration: underline;
    }

    /* Navigation and Footer */
    .close-btn,
    .nav-btn {
        display: block;
        width: 2.625em;
        height: 2.25em;
        padding: 0;
        border: 0;
        outline: none;
        overflow: hidden;
        white-space: nowrap;
        text-indent: 100%;
    }
    .close-btn {
        background: url("../assets/close-btn.svg") left bottom no-repeat;
        background-size: 1.875em 1.875em;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        opacity: 1;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .no-svg .close-btn {
        background-image: url("../assets/close-btn.png");
    }
    .close-btn:focus,
    .close-btn:hover {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        opacity: 1;
    }
    .nav-btn {
        background: url("../assets/nav-icon.svg") left center no-repeat;
        background-size: 1.875em 1.5em;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
        opacity: 0.7;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        z-index: 25;
    }
    .no-svg .nav-btn {
        background-image: url("../assets/nav-icon.png");
    }
    .nav-btn:hover,
    .nav-btn:focus {
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        opacity: 1;
    }
    #outer-wrap {
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    #inner-wrap {
        position: relative;
        width: 100%;
    }
    nav,
    footer {
        background: url('../assets/nav-bar.png') repeat;
        z-index: 200;
        position: relative;
        overflow: hidden;
        width: 100%;
        color: #fff;
        list-style-image: none;
        list-style-type: none;
        list-style-position: outside;
        outline-style: none;
        outline-width: 0;
    }
    nav .close-btn {
        display: none;
    }
    nav .block-title {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    nav .block {
        z-index: 2;
        position: relative;
        padding: 0.75em 1.25em;
        padding-bottom: 0;
    }
    nav ul,
    footer ul {
        *zoom: 1;
        display: block;
    }
    footer ul {
        float: right;
    }
    nav ul:before,
    nav ul:after,
    footer ul:before,
    footer ul:after {
        content: "";
        display: table;
    }
    nav ul:after,
    footer ul:after {
        clear: both;
    }
    footer li {
        display: inline-block;
        vertical-align: baseline;
        padding-right: 0.5em;
    }
    nav li {
        display: block;
    }
    footer li {
        padding-left: 0.5em;
    }
    nav li a,
    footer li a {
        display: block;
        color: #ccc;
        font-size: 0.875em;
        line-height: 1.28571em;
        font-weight: bold;
        outline: none;
        text-decoration: none;
    }
    footer li a {
        margin-bottom: 0;
    }
    nav li a:visited,
    footer li a:visited {
        color: #ccc;
    }
    nav li a:focus,
    nav li a:hover,
    footer li a:focus,
    footer li a:hover {
        color: #fff;
        text-decoration: none;
    }
    nav li a:focus,
    nav li a:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    nav li.is-active a,
    footer li.is-active a {
        color: #fff;
    }
    #top {
        z-index: 100;
        position: relative;
        color: #fff;
    }
    #top .block-title {
        margin: 0;
        font-size: 1.875em;
        line-height: 1.2em;
        text-align: center;
        white-space: nowrap;
    }
    #top .nav-btn {
        position: absolute;
        top: 1.5em;
        left: 1.875em;
    }

    /* ==========================================================================
       Fonts
       ========================================================================== */
    @font-face {
        font-family: 'apple_chancerychancery';
        src: url('../assets/fonts/apple_chancery-webfont.eot');
        src: url('../assets/fonts/apple_chancery-webfont.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/apple_chancery-webfont.woff') format('woff'),
        url('../assets/fonts/apple_chancery-webfont.ttf') format('truetype'),
        url('../assets/fonts/apple_chancery-webfont.svg#apple_chancerychancery') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'kbglyph';
        src: url('../assets/fonts/kbglyph.eot');
        src: url('../assets/fonts/kbglyph.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/kbglyph.woff') format('woff'),
        url('../assets/fonts/kbglyph.ttf') format('truetype'),
        url('../assets/fonts/kbglyph.svg#kbglyph') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    /* ==========================================================================
       Icons
       ========================================================================== */
    .icon-twitter,
    .icon-facebook,
    .icon-github,
    .icon-google-plus,
    .icon-linkedin,
    .icon-mail,
    .icon-behanced,
    .icon-creativecommons,
    .icon-kblogo-sm {
        font-family: 'kbglyph';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        font-size: 1.5em;
        line-height: 1;
        padding-right: 0.2em;
        vertical-align: sub;
        -webkit-font-smoothing: antialiased;
    }
    .icon-twitter:before {
        content: "\f099";
    }
    .icon-facebook:before {
        content: "\f09a";
    }
    .icon-github:before {
        content: "\f09b";
    }
    .icon-google-plus:before {
        content: "\f0d5";
    }
    .icon-linkedin:before {
        content: "\f0e1";
    }
    .icon-mail:before {
        content: "\e038";
    }
    .icon-behanced:before {
        content: "\e03d";
    }
    .icon-creativecommons:before {
        content: "\e040";
    }
    .icon-kblogo-sm:before {
        content: "\e04b";
    }
    /* End Icons */

    .roundimg {
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.65);
        height: 286px;
        width: 400px;
        overflow: hidden; /* keeps the image corners from peeking out over the border */
    }
    .toppush { padding-top: 2em; }
    .botpush { padding-bottom: 6em; }
    .smtxt {
        font-size: 0.8em !important;
        text-align: right;
        list-style-type: none;
    }
    article {
        background: url('../assets/noise.png') #eee;
        padding: 0;
    }
    #wheels {
        background: url('../assets/noise.png') #eee;
    }
    #paint {
        background: url('../assets/noise.png') #fff;
    }
    #trim {
        background: url('../assets/noise.png') #ddd;
    }
    #interior {
        background: url('../assets/noise.png') #eee;
    }

    /* ==========================================================================
       Media Queries
       ========================================================================== */
    @media screen and (min-width: 45.0625em) {
        h1 {
            background-color: #08d;
            background: -webkit-gradient(linear, left top, left bottom, from(#077fd0), to(#09f));
            background: -webkit-linear-gradient(top, #077fd0, #09f);
            background-image: -moz-linear-gradient(top, #077fd0, #09f);
            background-image: -ms-linear-gradient(top, #077fd0, #09f);
            background-image: -o-linear-gradient(top, #077fd0, #09f);
            background-image: linear-gradient(to bottom, #077fd0, #09f);
        }
        h1.title {
            text-align: right;
            float: right;
            padding: 0.5em 1em 0.5em 0.3em;
            border-left: 2px solid #fff;
            border-top: 2px solid #fff;
            border-bottom: 2px solid #fff;
            -webkit-border-top-left-radius: 10px;
            border-top-left-radius: 10px;
            -webkit-border-bottom-left-radius: 10px;
            border-bottom-left-radius: 10px;
            -moz-box-shadow: 3px 3px 4px #103;
            -webkit-box-shadow: 3px 3px 4px #103;
            box-shadow: 3px 3px 4px #103;
            /* For IE 8 */
            -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#130f30')";
            /* For IE 5.5 - 7 */
            filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#130f30');
        }
        #top .nav-btn,
        nav .close-btn,
        nav .block-title {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }
        nav ul {
            white-space: nowrap;
        }
        nav li {
            display: inline-block;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        nav li:last-child {
            border-right: none;
        }
        nav li a {
            padding: 0.42857em 0.85714em;
        }
    }

    @media screen and (max-width: 60em) {
        .descrip { display: none; visibility: hidden; }
    }

    @media screen and (max-width: 45em) {
        h1.title {
            text-align: right;
            float: right;
            padding: 0.5em 1em 0.5em 0.3em;
        }
        #footer-container {
            position: relative;
        }
        .toppush { display: none; }
        .logo { top: 25px; }
        nav {
            position: absolute;
            top: 0;
            padding-top: 4.2em;
        }
        nav:not(:target) {
            z-index: 1;
            height: 0;
        }
        nav:target .close-btn {
            display: block;
        }
        nav .close-btn {
            position: absolute;
            top: -3.75em;
            left: 1.875em;
        }
        nav .block {
            position: relative;
            padding: 0;
        }
        nav li {
            position: relative;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        nav li:last-child {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        nav li.is-active:after {
            z-index: 50;
            display: block;
            content: "";
            position: absolute;
            top: 50%;
            right: -0.031em;
            margin-top: -0.625em;
            border-top: 0.625em transparent solid;
            border-bottom: 0.625em transparent solid;
            border-right: 0.625em white solid;
        }
        nav li a {
            padding: 0.85714em 2.14286em;
        }
        .js-ready #nav {
            height: 100%;
            width: 70%;
            -webkit-box-shadow: inset -1.5em 0 1.5em -0.75em rgba(0, 0, 0, 0.25);
            -moz-box-shadow: inset -1.5em 0 1.5em -0.75em rgba(0, 0, 0, 0.25);
            box-shadow: inset -1.5em 0 1.5em -0.75em rgba(0, 0, 0, 0.25);
        }
        .js-ready #nav .block {
            background: transparent;
        }
        .js-ready #nav .close-btn {
            display: block;
            filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
            opacity: 0.7;
        }
        .js-ready #nav .close-btn:focus,
        .js-ready #nav .close-btn:hover {
            filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
            opacity: 1;
        }
        .js-ready #nav {
            left: -70%;
        }
        .js-ready #canvas {
            left: 0;
        }
        .js-nav #inner-wrap {
            left: 70%;
        }
        .csstransforms3d.csstransitions.js-ready #nav,
        .csstransforms3d.csstransitions.js-ready #inner-wrap {
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            backface-visibility: hidden;
        }
        .csstransforms3d.csstransitions.js-ready #nav {
            left: 0;
            -webkit-transform: translate3d(-100%, 0, 0);
            -moz-transform: translate3d(-100%, 0, 0);
            -ms-transform: translate3d(-100%, 0, 0);
            -o-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
        .csstransforms3d.csstransitions.js-ready #inner-wrap,
        .csstransforms3d.csstransitions.js-nav #nav .block {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        .csstransforms3d.csstransitions.js-ready #inner-wrap {
            left: 0 !important;
            -webkit-transition: -webkit-transform 500ms ease;
            -moz-transition: -moz-transform 500ms ease;
            -o-transition: -o-transform 500ms ease;
            transition: transform 500ms ease;
        }

        .csstransforms3d.csstransitions.js-nav #inner-wrap {
            -webkit-transform: translate3d(70%, 0, 0) scale3d(1, 1, 1);
            -moz-transform: translate3d(70%, 0, 0) scale3d(1, 1, 1);
            -ms-transform: translate3d(70%, 0, 0) scale3d(1, 1, 1);
            -o-transform: translate3d(70%, 0, 0) scale3d(1, 1, 1);
            transform: translate3d(70%, 0, 0) scale3d(1, 1, 1);
        }

        .csstransforms3d.csstransitions.js-ready #nav .block {
            filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);
            opacity: 0.7;
            -webkit-transition: opacity 300ms 100ms, -webkit-transform 500ms ease;
            -webkit-transition-delay: ease, 0s;
            -moz-transition: opacity 300ms 100ms ease, -moz-transform 500ms ease;
            -o-transition: opacity 300ms 100ms ease, -o-transform 500ms ease;
            transition: opacity 300ms 100ms ease, transform 500ms ease;
            -webkit-transform: translate3d(70%, 0, 0) scale3d(0.9, 0.9, 0.9);
            -moz-transform: translate3d(70%, 0, 0) scale3d(0.9, 0.9, 0.9);
            -ms-transform: translate3d(70%, 0, 0) scale3d(0.9, 0.9, 0.9);
            -o-transform: translate3d(70%, 0, 0) scale3d(0.9, 0.9, 0.9);
            transform: translate3d(70%, 0, 0) scale3d(0.9, 0.9, 0.9);
            -webkit-transform-origin: 50% 0%;
            -moz-transform-origin: 50% 0%;
            -ms-transform-origin: 50% 0%;
            -o-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
        }

        .csstransforms3d.csstransitions.js-nav #nav .block {
            filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
            opacity: 1;
        }
    }

    @media only screen and (max-width: 534px) {
        .copy,
        .techlogo {
            display: none;
            visibility: hidden;
        }
    }

    @media only screen and (max-width: 480px) {
        footer li {
            padding-right: 0.3em;
            padding-left: 0.3em;
        }
    }

    @media only screen and (min-width: 1140px) {

        /* ===============
            Maximal Width
           =============== */

        .wrapper {
            width: 1026px; /* 1140px - 10% for margins */
            margin: 0 auto;
        }
    }

    /* ==========================================================================
       Helper classes
       ========================================================================== */
    .clearfix:before,
    .clearfix:after {
        content: " ";
        display: table;
    }
    .clearfix:after {
        clear: both;
    }
    .clearfix {
        *zoom: 1;
    }

    /* ==========================================================================
       Print styles
       ========================================================================== */
    @media print {
        * {
            background: transparent !important;
            color: #000 !important; /* Black prints faster: h5bp.com/s */
            box-shadow: none !important;
            text-shadow: none !important;
        }
        a,
        a:visited {
            text-decoration: underline;
        }
        a[href]:after {
            content: " (" attr(href) ")";
        }
        abbr[title]:after {
            content: " (" attr(title) ")";
        }
        .intervals {
            content: "";
        }

        /*
         * Don't show links for images, or javascript/internal links
         */
        .ir a:after,
        a[href^="javascript:"]:after,
        a[href^="#"]:after {
            content: "";
        }
        img {
            page-break-inside: avoid;
            max-width: 100% !important;
        }
        @page {
            margin: 0.5cm;
        }
        p,
        h2 {
            orphans: 3;
            widows: 3;
        }
        h2 {
            page-break-after: avoid;
        }
    }
</style>
