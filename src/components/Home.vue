<template>
    <div class="home">
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
                                    <li><a href="#about" title="about me" rel="section">about me</a></li><!--
                                 --><li><a href="#competencies" title="competencies" rel="section">competencies</a></li><!--
                                 --><li><a href="#experience" title="experience" rel="section">experience</a></li><!--
                                 --><li><a href="#accomplishments" title="accomplishments" rel="section">accomplishments</a></li>
                                </ul>
                                <a class="close-btn" id="nav-close-btn" href="#top">Return to Content</a>
                            </div>
                        </nav>
                        <h1 class="title">kevin boutin</h1>
                        <div id="logo">
                            <span aria-hidden="true" class="icon-kblogo-sm logo"></span>
                        </div>
                    </header>
                </div>
                <div id="main-container">
                    <article role="main">
                        <section id="about">
                            <div class="wrapper">
                                <h2>about me</h2>
                                <p>I possess over twenty-five years of strong software development experience in various
                                    industries. JavaScript, Java and web related environments are my specialty with
                                    familiarity in mobile application development. I am actively involved in the full
                                    project life cycle from user requirements to development, testing and implementation
                                    as a full-stack software engineer. I am a self-learner, leader, great team player
                                    and am quite capable of working independently.</p>
                                <p>It is important to note that this site not only serves as my resumé but as also a
                                    demonstration of my work. I am using Vue.js with HTML5 semantics, app cache, media
                                    queries for responsive layouts, border radius, box shadow, box reflection,
                                    animation, transitions, 3D transforms and gradients. Feel free to head over to my
                                    github page to view my development for this site. You can find a link along with
                                    several contact methods at the bottom of this page.</p>
                            </div>
                        </section>
                        <section id="competencies">
                            <div class="wrapper clearfix">
                                <h2>competencies</h2>
                                <p>&nbsp;</p>
                                <dl id="chart" class="clearfix">
                                    <dt>Java</dt>
                                    <dd><span id="data-one">9/10</span></dd>
                                    <dt>JavaScript</dt>
                                    <dd><span id="data-two">9/10</span></dd>
                                    <dt>Vue.js / Polymer</dt>
                                    <dd><span id="data-three">7/10</span></dd>
                                    <dt>Node.js / Serverless</dt>
                                    <dd><span id="data-four">9/10</span></dd>
                                    <dt>PHP</dt>
                                    <dd><span id="data-five">7/10</span></dd>
                                    <dt>Spring (aop, cache, di, jmx, orm, remoting)</dt>
                                    <dd><span id="data-six">9/10</span></dd>
                                    <dt>Seam + JSF + Ajax4JSF</dt>
                                    <dd><span id="data-seven">9/10</span></dd>
                                    <dt>SQL / PL/SQL</dt>
                                    <dd><span id="data-eight">8/10</span></dd>
                                    <dt>Photoshop + Illustrator</dt>
                                    <dd><span id="data-nine">6/10</span></dd>
                                </dl>
                            </div>
                        </section>
                        <section id="experience">
                            <div class="wrapper clearfix">
                                <h2>experience</h2>
                                <p>I have worked in seven different industries during my career. The time I spent in each industry
                                    is detailed in the pie chart below. Below that, I illustrate how much time I have spent using
                                    various skills.</p>
                                <div class="chart-wrapper">
                                    <pie-chart></pie-chart>
                                </div>
                                <div class="timeline">
                                    <ul class="events">
                                        <li style="width: 34%; left: 61%;">Angular, Polymer, Vue, Node, Serverless <em>(2015 - 2018)</em ></li>
                                        <li style="width: 31.8%; left: 52%;">Spring <em>(2009 - 2017)</em></li>
                                        <li style="width: 60.6%; left: 34.5%;">Java, JavaScript, MySQL <em>(2000 - 2018)</em></li>
                                        <li style="width: 17%; left: 34.5%;">PHP, Oracle <em>(2000 - 2005)</em></li>
                                        <li style="width: 16%; left: 9%;">C/C++ <em>(1995 - 1998)</em></li>
                                        <li style="width: 35%; left: 0;">RPG, COBOL, DB2 <em>(1993 - 1999)</em></li>
                                    </ul>
                                    <ul class="intervals">
                                        <li class="first">1993</li>
                                        <li>1995</li>
                                        <li>1998</li>
                                        <li>1999</li>
                                        <li>2000</li>
                                        <li>2005</li>
                                        <li>2009</li>
                                        <li>2015</li>
                                        <li>2016</li>
                                        <li>2017</li>
                                        <li class="last">2018</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section id="accomplishments">
                            <div class="wrapper clearfix">
                                <h2>accomplishments</h2>
                                <p class="company"><strong>Stanley Black & Decker</strong> -
                                    <em>March&nbsp;2016 - Current</em></p>
                                <p class="jobtitle">Senior Software Developer - Atlanta - Salary</p>
                                <p class="summary">Full stack developer using JavaScript on Node.js with serverless
                                    framework for the back-end RESTful web services with a strong emphasis on JavaScript
                                    Polymer/Vue.js front-ends. This includes heavy use of web sockets and is deployed
                                    completely in AWS.</p>
                                <ul class="accomp">
                                    <li>Worked on the DIYZ applications before being decommissioned. Over
                                        1 million downloads on iOS and Android platforms.</li>
                                    <li>Currently working on Industry 4.0 solutions for several plants.</li>
                                </ul>
                                <p class="company"><strong>Turner Broadcasting</strong> -
                                    <em>June&nbsp;2015 - February&nbsp;2016</em></p>
                                <p class="jobtitle">Senior Software Developer - Atlanta - Contract</p>
                                <p class="summary">Full stack developer using Scala and Java for back-end
                                    RESTful web services with a stronger emphasis on JavaScript front-ends.</p>
                                <ul class="accomp">
                                    <li>Working in a very agile environment on the Edit Replacement project. Create and
                                        modifying Adobe panels for both Premiere Pro and After Effects as well as
                                        developing heavy front-end event-driven JavaScript for the NewsApps web portal
                                        application.</li>
                                    <li>Worked on the CNN Elections team preparing software for the Primaries. This
                                        involved Java (Swing and Spring) for processing data feeds from the Associated
                                        Press and EMR as well as JavaScript with Backbone for developing data feeds to
                                        MSEs with web front-ends.</li>
                                </ul>
                                <p class="company"><strong>Cox Communications</strong> - <em>June&nbsp;2006 -
                                    June&nbsp;2015</em></p>
                                <p class="jobtitle">Senior Software Engineer - Atlanta - Salary</p>
                                <p class="summary">Soley responsible for various applications (Internet Tools,
                                    Self Activation, Webmail, DHCP abstraction, and Unified Address Book), which
                                    includes all enhancement design, development, implementation and support.</p>
                                <ul class="accomp">
                                    <li>Lead a team of developers to incorporate the latest Openwave webmail product.
                                        This involved reskinning and making mass modifications to fulfill several
                                        hundred business requirements. This application is also using a responsive web
                                        design.</li>
                                    <li>Developed solutions with various vendors such as RealNetworks, McAfee,
                                        Digi-Data, Affinegy, Ookla, Visicom, etc.</li>
                                    <li>Redesigned and redeveloped the Internet Tools and Self Activation
                                        customer-facing applications to be server agnostic and to use more recent design
                                        patterns and frameworks.</li>
                                    <li>Introduced Git, Spring, Seam, Ajax4JSF, EhCache, JMX and JSF to the department.</li>
                                    <li>Devised and established application monitoring standards. Designed and developed
                                        a DHCP abstraction system (web service) to ease IPv6 compliance.</li>
                                    <li>Designed three new systems for handling customer self activation of equipment
                                        for internet, digital phone and digital video.</li>
                                    <li>Provided technical training of Git, Seam, Spring and internally developed
                                        applications to colleagues locally and in China.</li>
                                    <li>Solely managed off-shore development teams in India and China.</li>
                                    <li>Developed a CAPTCHA system with audio.</li>
                                    <li>Lead a small team of developers to redesign and rebuild the
                                        In-Browser Notification application for use by residential data
                                        customers.</li>
                                </ul>
                                <p class="company"><strong>InSite Systems</strong> - <em>July&nbsp;2005 - June&nbsp;2006</em></p>
                                <p class="jobtitle">Software Engineer - Atlanta - Salary</p>
                                <ul class="accomp">
                                    <li>Developed a support site for clients.</li>
                                    <li>Rebranded the company.</li>
                                    <li>Custom tailored complex EMR forms for clients.</li>
                                    <li>Re-engineered Java applications for performance, reusability and standards.</li>
                                    <li>Solely designed and developed an HL7 interface engine to exchange patient data
                                        under HIPAA compliancy with other companies.</li>
                                    <li>Designed and developed a POC to handle e-Signatures.</li>
                                    <li>Implemented a dashboard for clients to manage their practice graphically in
                                        real-time.</li>
                                    <li>Designed and developed a document management system.</li>
                                </ul>
                                <p class="company"><strong>Childrens Healthcare of Atlanta</strong> - <em>February&nbsp;2004 - July&nbsp;2005</em></p>
                                <p class="jobtitle">I.T. Consultant - Atlanta - Contract</p>
                                <p class="summary">Developed a web interface for tracking equipment movements. Assisted in large
                                    software implementations across the organization. Supported software applications for clinical
                                    staff.</p>
                                <p class="company"><strong>We Provide I.T.</strong> - <em>September&nbsp;2002 - January&nbsp;2004</em></p>
                                <p class="jobtitle">Web Designer - Sydney/Atlanta - Self</p>
                                <p class="summary">Designed and developed a suite of Java and PHP services to gather results from
                                    Google search, manage content and communicate with other web sites. Designed and developed
                                    entire web sites for clients.</p>
                                <p class="company"><strong>Coca-Cola Amatil</strong> - <em>January&nbsp;1998 - July&nbsp;2002</em></p>
                                <p class="jobtitle">Senior Analyst Programmer - Sydney - Salary</p>
                                <ul class="accomp">
                                    <li>Developed standards and templates for enterprise usage.</li>
                                    <li>Provided support (locally and overseas) for several applications developed and
                                        maintained by myself.</li>
                                    <li>Solely developed cross-platform Java packages designed to handle all pricing
                                        requirements using a variety of different database systems.</li>
                                    <li>Played a key role in design and development of a mobile computing system in the
                                        delivery area of the business.</li>
                                    <li>Spearheaded a development team to construct the first B2B web implementation in
                                        the Coca-Cola system.</li>
                                    <li>Lead a development team to build a pre-sell system.</li>
                                    <li>Presented several applications to other countries (Austria, Indonesia, Korea
                                        and the Philippines).</li>
                                    <li>Designed and conducted a four day advanced RPG programming course to several
                                        European colleagues.</li>
                                    <li>Assisted in development, training, implementing and supporting a vending
                                        application in South Korea.</li>
                                    <li>Worked with an implementation team for delivery and route planning in South
                                        Korea, Indonesia, the Philippines and Australia.</li>
                                    <li>Assisted in designing, testing and developing a middleware architecture using
                                        Mercator and MQSeries.</li>
                                    <li>Lead a development team in Korea to develop a B2B web application in Mercator.</li>
                                </ul>
                                <p class="company"><strong>Kurt Salmon Associates</strong> - <em>January&nbsp;1997 - September&nbsp;1997</em></p>
                                <p class="jobtitle">Analyst Programmer - Atlanta - Salary</p>
                                <p class="summary">Developed applications to assist in managing distribution center
                                    processes. Constructed a complex system to automatically determine the best shipping
                                    method based on size and weight of the packaging.</p>
                                <p class="company"><strong>Equifax</strong> - <em>September&nbsp;1996 - January&nbsp;1997</em></p>
                                <p class="jobtitle">Analyst Programmer - Atlanta - Contract</p>
                                <p class="summary">Reconstructed Micro6X applications for year 2000 compliance, which
                                    included national credit files, motor vehicle reports, insurance claims, etc.</p>
                                <p class="company"><strong>Genuine Parts Company</strong> - <em>January&nbsp;1996 - September&nbsp;1996</em></p>
                                <p class="jobtitle">Analyst Programmer - Atlanta - Contract</p>
                                <p class="summary">Developed applications to be emulated on Telxon handheld units via
                                    wireless communications for bar code scanning and key input for multiple
                                    distribution centers selling NAPA auto parts. Developed cross-platform client-server
                                    communications as a standard for multiple applications.</p>
                                <p class="company"><strong>The Coca-Cola Company</strong> - <em>July&nbsp;1994 - January&nbsp;1996</em></p>
                                <p class="jobtitle">Analyst Programmer - Atlanta - Contract</p>
                                <p class="summary">Developed client-server solutions on various platforms to assist in
                                    mobile communications and applications in delivery, field service and sales.</p>
                                <p class="company"><strong>Mainheim Auctions</strong> - <em>May&nbsp;1993 - May&nbsp;1994</em></p>
                                <p class="jobtitle">Analyst Programmer - Atlanta - Salary</p>
                                <p class="summary">Developed and supported various programs assisting in managing auto
                                    auction activities across the country.</p>
                                <div id="trainingmap">
                                    <p class="summary toppush">The map below depicts places I have conducted training
                                        sessions during my career.</p>
                                    <div class="roundimg">
                                        <img height="286" width="400" src="../assets/gavetrainingmap.jpg"
                                             alt="Map showing places I gave training: Vienna, Atlanta, Owensboro, Seoul, Jakarta, Makati, Melbourne, Sydney and Shanghai"
                                             title="Places I gave training: Vienna, Atlanta, Owensboro, Seoul, Jakarta, Makati, Melbourne, Sydney and Shanghai"/>
                                    </div>
                                    <div class="techlogo">
                                        <a class="html5logo" href="//www.w3.org/html/logo/">
                                            <img class="html5logo"
                                                 src="../assets/html5-badge-h-css3-graphics-semantics-storage.png"
                                                 width="229" height="64"
                                                 alt="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, Semantics, and Offline &amp; Storage"
                                                 title="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, Semantics, and Offline &amp; Storage"/>
                                        </a>
                                    </div>
                                </div>
                                <p class="summary smtxt"><strong>Professional training received:</strong></p>
                                <ul class="accomp smtxt botpush">
                                    <li>Learning Microsoft Visual C++ - Atlanta&nbsp;1995</li>
                                    <li>IBM Visual Age C++ for OS/2 - Atlanta&nbsp;1995</li>
                                    <li>IBM MQSeries Introduction – Sydney&nbsp;2000</li>
                                    <li>IBM MQSeries System Administration – Sydney&nbsp;2000</li>
                                    <li>IBM MQSeries Application Development – Sydney&nbsp;2000</li>
                                    <li>Mercator Mapping Fundamentals – Sydney&nbsp;2000</li>
                                    <li>Oracle SQL/SQL Plus – Sydney&nbsp;2001</li>
                                    <li>Oracle PL/SQL – Sydney&nbsp;2001</li>
                                    <li>Oracle Reports Developer – Sydney&nbsp;2001</li>
                                    <li>Oracle Functional Foundations – Sydney&nbsp;2001</li>
                                    <li>Oracle Workflow – Sydney&nbsp;2001</li>
                                    <li>Sun Java Programming – Sydney&nbsp;2001</li>
                                    <li>HP-Unix Fundamentals – Sydney&nbsp;2001</li>
                                    <li>JBoss System Administration – Atlanta&nbsp;2009</li>
                                    <li>Spring Fundamentals – Atlanta&nbsp;2010</li>
                                    <li>HTML5 – Atlanta&nbsp;2011</li>
                                    <li>Git Essentials - Atlanta&nbsp;2012</li>
                                    <li>Up and Running with Backbone.js – Atlanta&nbsp;2014</li>
                                    <li>Up and Running with AngularJS – Atlanta&nbsp;2015</li>
                                    <li>Building a Data-Driven App with AngularJS – Atlanta&nbsp;2015</li>
                                    <li>Shaping Up with AngularJS – Atlanta&nbsp;2015</li>
                                    <li>Staying Sharp with AngularJS – Atlanta&nbsp;2015</li>
                                    <li>Node.js Essential Training - Atlanta&nbsp;2015</li>
                                    <li>JavaScript Road Trip – Atlanta&nbsp;2015</li>
                                    <li>JavaScript Best Practices – Atlanta&nbsp;2015</li>
                                    <li>Blasting Off with Bootstrap – Atlanta&nbsp;2015</li>
                                    <li>Warming Up with Ember.js – Atlanta&nbsp;2015</li>
                                    <li>Anatomy of Backbone.js – Atlanta&nbsp;2015</li>
                                    <li>Anatomy of Backbone.js Part 2 – Atlanta&nbsp;2016</li>
                                    <li>ES2015: The Shape of JavaScript to Come - Atlanta 2016</li>
                                    <li>Real-time Web with Node.js - Atlanta 2016</li>
                                    <li>Building Block of Express.js - Atlanta 2016</li>
                                    <li>The Magical Marvels of MongoDB - Atlanta 2016</li>
                                </ul>
                            </div>
                        </section>
                    </article>
                </div>
                <div id="footer-container">
                    <footer class="clearfix">
                        <div class="wrapper">
                            <p class="copy">&copy; 2018 Kevin Boutin <a rel="license" title="creative commons licensed work" target="_blank" href="//creativecommons.org/licenses/by/3.0/deed.en_US"><span aria-hidden="true" class="icon-creativecommons"></span></a></p>
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
    import pieChart from './PieChart.vue';

    export default {
        name: 'Home',
        components: {
            pieChart
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
    }
    ::-moz-selection {
        background: #b3d4fc;
        text-shadow: none;
    }
    ::selection {
        background: #b3d4fc;
        text-shadow: none;
    }
    body {
        background: url('../assets/noise.png');
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
    .jobtitle {
        font-size: 0.9em;
        font-weight: bold;
        margin: 0;
    }
    .company {
        margin-bottom: 0;
        margin-top: 2.5em;
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
    ul.accomp {
        margin: 0 0 5em 0;
        padding-left: 1em;
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
    #about {
        background: url('../assets/noise.png') #eee;
        padding: 4em 0;
    }
    #competencies {
        background: url('../assets/noise.png') #fff;
    }
    #experience {
        background: url('../assets/noise.png') #ddd;
    }
    #accomplishments {
        background: url('../assets/noise.png') #eee;
        padding: 0.5em 0 2.1em 0;
        margin-left: 0;
        margin-right: 0;
    }
    header#top {
        margin-top: 0;
    }
    .summary, .accomp { font-size: 0.9em; }
    .copy {
        font-size: .8em;
        float: left;
    }
    .block {
        position: relative;
        margin: 0 auto;
        max-width: 60em;
    }
    .home {
        padding: 0;
    }
    .home article h1 {
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
    .chart-wrapper {
        padding: 16px 16px 0;
        margin-bottom: 32px;
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

    /* Timeline */
    .timeline {
        clear: both;
        padding: 1.5em 0;
    }
    ul.events {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    ul.events li {
        -webkit-border-radius: 11px;
        -moz-border-radius: 11px;
        border-radius: 11px;
        background: #eee;
        border: 1px solid #bbb;
        color: #707070;
        font-size: 0.8em;
        font-weight: bold;
        margin-bottom: 6px;
        padding: 0;
        position: relative;
        text-align: center;
    }
    ul.events li em {
        color: #aaa;
        font-weight: normal;
        font-size: 0.8em;
    }
    ul.intervals {
        list-style-type: none;
        padding: 0;
        display: block;
        margin-bottom: 3em;
    }
    /* The width depends on the number of intervals. For example 100 / 7 = 14.29% -- then subtract a little bit
     * for room for the borders (100 / 21 = 4.76%). */
    ul.intervals li {
        background-color: #fff;
        border-right: 1px solid #ccc;
        color: #999;
        float: left;
        font-size: 0.7em;
        margin: 0;
        padding: 5px 0;
        text-align: center;
        width: 8.7%;
    }
    ul.intervals li.first {
        border-left: 1px solid #ccc;
    }
    /* end timeline */

    /* bar chart - competencies */
    dl { width: 100%; height: 22em; }
    dt { clear: left; float: left; width: 50%; }
    dd { float: left; width: 50%; }
    #chart {
        width: 100%;
    }
    #chart dt {
        float: left;
        margin: 0 5px 5px 0;
        padding: 2px 0;
        display: inline;
        text-align: right;
        font-size: 0.9em;
    }
    #chart dd {
        width: 40%;
        float: left;
        margin-bottom: 5px;
        display: inline;
        font-size: 0.9em;
    }
    #chart dd span {
        color: #fff;
        background: #09f;
        text-align: center;
        padding: 2px 0;
        display: block;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        background: -webkit-gradient(linear, left top, left bottom, from(#09f), to(#077fd0));
        background: -webkit-linear-gradient(top, #09f, #077fd0);
        background-image: -moz-linear-gradient(top, #09f, #077fd0);
        background-image: -ms-linear-gradient(top, #09f, #077fd0);
        background-image: -o-linear-gradient(top, #09f, #077fd0);
        background-image: linear-gradient(to bottom, #09f, #077fd0);
    }
    /* Each width should be changed accordingly */
    #data-one {
        width: 90%;
        -webkit-animation-name: bar-one;
    }
    #data-two {
        width: 90%;
        -webkit-animation-name: bar-two;
    }
    #data-three {
        width: 70%;
        -webkit-animation-name: bar-three;
    }
    #data-four {
        width: 90%;
        -webkit-animation-name: bar-four;
    }
    #data-five {
        width: 70%;
        -webkit-animation-name: bar-five;
    }
    #data-six {
        width: 90%;
        -webkit-animation-name: bar-six;
    }
    #data-seven {
        width: 90%;
        -webkit-animation-name: bar-seven;
    }
    #data-eight {
        width: 80%;
        -webkit-animation-name: bar-eight;
    }
    #data-nine {
        width: 60%;
        -webkit-animation-name: bar-eight;
    }
    #data-one,
    #data-two,
    #data-three,
    #data-four,
    #data-five,
    #data-six,
    #data-seven,
    #data-eight {
        -webkit-animation-duration: 0.5s;
        -webkit-animation-iteration-count: 1;
        -webkit-animation-timing-function: ease-out;
    }
    /* Each width should be changed accordingly */
    @-webkit-keyframes bar-one {
        0%{
            width: 0;
            -webkit-transform: rotate(0deg);
        }
        100%{
            width: 90%;
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes bar-two {
        0%{
            width: 0;
            -webkit-transform: rotate(0deg);
        }
        100%{
            width: 90%;
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes bar-three {
        0%{
            width: 0;
            -webkit-transform: rotate(0deg);
        }
        100%{
            width: 70%;
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes bar-four {
        0%{
            width: 0;
            -webkit-transform: rotate(0deg);
        }
        100%{
            width: 90%;
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes bar-five {
        0%{
            width: 0;
            -webkit-transform: rotate(0deg);
        }
        100%{
            width: 70%;
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes bar-six {
        0%{
            width: 0;
            -webkit-transform: rotate(0deg);
        }
        100%{
            width: 90%;
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes bar-seven {
        0%{
            width: 0;
            -webkit-transform: rotate(0deg);
        }
        100%{
            width: 90%;
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes bar-eight {
        0%{
            width: 0;
            -webkit-transform: rotate(0deg);
        }
        100%{
            width: 80%;
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes bar-nine {
        0%{
            width: 0;
            -webkit-transform: rotate(0deg);
        }
        100%{
            width: 60%;
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes bar-one,
    @-webkit-keyframes bar-two,
    @-webkit-keyframes bar-three,
    @-webkit-keyframes bar-four,
    @-webkit-keyframes bar-five,
    @-webkit-keyframes bar-six,
    @-webkit-keyframes bar-seven,
    @-webkit-keyframes bar-eight,
    @-webkit-keyframes bar-nine {
        0%{
            -webkit-transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(360deg);
        }
    }
    /* end bar chart - competencies */

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

    .jobtitle {
        font-size: 0.9em;
        font-weight: bold;
        margin: 0;
    }
    .company {
        margin-bottom: 0;
        margin-top: 2.5em;
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
    article {
        background: url('../assets/noise.png') #eee;
        padding: 0;
    }
    #about {
        background: url('../assets/noise.png') #eee;
        padding: 4em 0;
    }
    #competencies {
        background: url('../assets/noise.png') #fff;
    }
    #experience {
        background: url('../assets/noise.png') #ddd;
    }
    #accomplishments {
        background: url('../assets/noise.png') #eee;
        padding: 0.5em 0 2.1em 0;
        margin-left: 0;
        margin-right: 0;
    }
    .summary, .accomp { font-size: 0.9em; }

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
        #trainingmap {
            float: left;
            width: 400px;
        }
        .html5logo {
            padding: 3.5em;
            width: 229px;
            height: 64px;
            /* Use grayscale filters if you use the html5 logo site
                filter: grayscale(100%);
                -webkit-filter: grayscale(100%);
                -moz-filter: grayscale(100%);
                -ms-filter: grayscale(100%);
                -o-filter: grayscale(100%);*/
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

    @media screen and (max-width: 55em) {
        .timeline { display: none; }
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
        #trainingmap {
            display: none;
        }
        ul.accomp {
            margin: 0 0 1em 0;
            padding-left: 1em;
        }
        .toppush { display: none; }
        dt,
        dd {
            float: none; width: 100%;
        }
        dt { clear: left; }
        dl { height: 37em; }
        #chart { margin-bottom: 5em; }
        #chart dt,
        #chart dd {
            display: block;
        }
        #chart dd {
            width: 100%;
        }
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

    @media only screen and (min-width: 480px) {
        .legend {
            clear: right;
            float: right;
            width: 190px;
        }
        .industries { width: 100%; }

        /* ====================
            INTERMEDIATE: Menu
           ====================

            nav a {
                float: left;
                width: 27%;
                margin: 0 1.7%;
                padding: 25px 2%;
                margin-bottom: 0;
            }

            nav li:first-child a {
                margin-left: 0;
            }

            nav li:last-child a {
                margin-right: 0;
            }
        */
        /* ========================
            INTERMEDIATE: IE Fixes
           ========================

            nav ul li {
                display: inline;
            }

            .oldie nav a {
                margin: 0 0.7%;
            }
            */
    }

    @media only screen and (min-width: 768px) {
        .industries { width: 61%; }
    }

    @media only screen and (min-width: 980px) {
        .industries { width: 47%; }
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
