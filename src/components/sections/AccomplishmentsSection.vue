/* eslint-disable max-len */
<template>
    <section id="accomplishments">
        <div class="wrapper clearfix">
            <h2>accomplishments</h2>

            <div v-for="job in jobs" :key="job.company" class="job-entry">
                <p class="company">
                    <strong>{{ job.company }}</strong> -
                    <em>{{ job.period }}</em>
                </p>
                <p class="jobtitle">{{ job.title }}</p>
                <p v-if="job.summary" class="summary">{{ job.summary }}</p>
                <ul v-if="job.accomplishments" class="accomp">
                    <li v-for="(accomplishment, index) in job.accomplishments" :key="index">{{ accomplishment }}</li>
                </ul>
            </div>

            <div id="trainingmap">
                <p class="summary toppush">The map below depicts places I have conducted training
                    sessions during my career.</p>
                <div class="roundimg">
                    <img height="286" width="400" src="../../assets/gavetrainingmap.jpg"
                        alt="Map showing places I gave training: Vienna, Atlanta, Owensboro, Seoul, Jakarta, Makati, Melbourne, Sydney and Shanghai"
                        title="Places I gave training: Vienna, Atlanta, Owensboro, Seoul, Jakarta, Makati, Melbourne, Sydney and Shanghai" />
                </div>
                <div class="techlogo">
                    <a class="html5logo" href="//www.w3.org/html/logo/">
                        <img class="html5logo" src="../../assets/html5-badge-h-css3-graphics-semantics-storage.png"
                            width="229" height="64"
                            alt="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, Semantics, and Offline &amp; Storage"
                            title="HTML5 Powered with CSS3 / Styling, Graphics, 3D &amp; Effects, Semantics, and Offline &amp; Storage" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AccomplishmentsSection',
    data() {
        return {
            jobs: [
                {
                    company: 'Locus Robotics',
                    period: 'October 2022 - Current',
                    title: 'Principal Architect - Remote - Salary',
                    summary: 'Worked on a small team that built the LocusHub application from scratch using serverless functions with Node.js on the Azure cloud. This role provided many opportunities to architect, design and develop serverless solutions in Azure.',
                    accomplishments: [
                        'Reside on the global architecture board for the company.',
                        'Solely built a cloud agnostic, multi-tenant serverless solution for handling authentication and authorization for LocusHub. This used OpenID-Connect for SSO and also used MFA via TOTP.',
                        'Built and maintained several microservices for the LocusHub application to handle notifications, analytics, permissions, user management, fine-grained authorization and various other services.',
                        'Automated multi-regional deployments via CI/CD pipelines with API management policy updates and configuration updates.',
                        'Implemented an extremely strict and successful content security policy for the LocusHub application.'
                    ]
                },
                {
                    company: 'Dematic',
                    period: 'August 2019 - 2022',
                    title: 'Principal Architect - Atlanta - Salary',
                    summary: 'Working on multiple applications across multiple cloud providers, this role provided many opportunities to architect, design and develop serverless solutions in Azure and GCP.',
                    accomplishments: [
                        'Reside on the global architecture board for the company.',
                        'Solely built a cloud agnostic, multi-tenant serverless solution for handling authentication and authorization for use throughout multiple applications across the enterprise. This used the serverless framework (Azure/AWS), cloud run (GCP) and provided OAuth2 (local auth) and OpenID-Connect standards (SSO with various third party identity providers).',
                        'Assisted in design, architecture, security, and deployment of the WES application in GCP.',
                        'Assisted in design, architecture, security, deployment and development of the Control Tower application in Azure.',
                        'Designed the GCP architectures for the Control Tower application. This included global, multi-regional, resilient IoT and cloud architectures.',
                        'Spearheaded and developed modules and environments in Terraform in both Azure and GCP.',
                        'Developed a container module in Python to poll OPC-UA data on the IoT edge.',
                        'Presented various solutions and architectures for broad audiences as well as technical deep dives on a variety of cloud subjects.'
                    ]
                },
                {
                    company: 'Stanley Black & Decker',
                    period: 'March 2016 - August 2019',
                    title: 'Lead Software Engineer - Atlanta - Salary',
                    summary: 'Full stack developer using JavaScript on Node.js with serverless framework for the back-end RESTful web services with a strong emphasis on JavaScript Polymer/Vue.js front-ends. This includes heavy use of web sockets and is deployed completely in AWS.',
                    accomplishments: [
                        'Worked on the DIYZ applications before being decommissioned. Over 1 million downloads on iOS and Android platforms.',
                        'Worked on Industry 4.0 solutions for several plants in Germany, UK and USA.'
                    ]
                },
                {
                    company: 'Turner Broadcasting',
                    period: 'June 2015 - February 2016',
                    title: 'Senior Software Developer - Atlanta - Contract',
                    summary: 'Full stack developer using Scala and Java for back-end RESTful web services with a stronger emphasis on JavaScript front-ends.',
                    accomplishments: [
                        'Working in a very agile environment on the Edit Replacement project. Create and modifying Adobe panels for both Premiere Pro and After Effects as well as developing heavy front-end event-driven JavaScript for the NewsApps web portal application.',
                        'Worked on the CNN Elections team preparing software for the Primaries. This involved Java (Swing and Spring) for processing data feeds from the Associated Press and EMR as well as JavaScript with Backbone for developing data feeds to MSEs with web front-ends.'
                    ]
                },
                {
                    company: 'Cox Communications',
                    period: 'June 2006 - June 2015',
                    title: 'Senior Software Engineer - Atlanta - Salary',
                    summary: 'Soley responsible for various applications (Internet Tools, Self Activation, Webmail, DHCP abstraction, and Unified Address Book), which includes all enhancement design, development, implementation and support.',
                    accomplishments: [
                        'Lead a team of developers to incorporate the latest Openwave webmail product. This involved reskinning and making mass modifications to fulfill several hundred business requirements. This application is also using a responsive web design.',
                        'Developed solutions with various vendors such as RealNetworks, McAfee, Digi-Data, Affinegy, Ookla, Visicom, etc.',
                        'Redesigned and redeveloped the Internet Tools and Self Activation customer-facing applications to be server agnostic and to use more recent design patterns and frameworks.',
                        'Introduced Git, Spring, Seam, Ajax4JSF, EhCache, JMX and JSF to the department.',
                        'Devised and established application monitoring standards. Designed and developed a DHCP abstraction system (web service) to ease IPv6 compliance.',
                        'Designed three new systems for handling customer self activation of equipment for internet, digital phone and digital video.',
                        'Provided technical training of Git, Seam, Spring and internally developed applications to colleagues locally and in China.',
                        'Solely managed off-shore development teams in India and China.',
                        'Developed a CAPTCHA system with audio.',
                        'Lead a small team of developers to redesign and rebuild the In-Browser Notification application for use by residential data customers.'
                    ]
                },
                {
                    company: 'InSite Systems',
                    period: 'July 2005 - June 2006',
                    title: 'Software Engineer - Atlanta - Salary',
                    accomplishments: [
                        'Developed a support site for clients.',
                        'Rebranded the company.',
                        'Custom tailored complex EMR forms for clients.',
                        'Re-engineered Java applications for performance, reusability and standards.',
                        'Solely designed and developed an HL7 interface engine to exchange patient data under HIPAA compliancy with other companies.',
                        'Designed and developed a POC to handle e-Signatures.',
                        'Implemented a dashboard for clients to manage their practice graphically in real-time.',
                        'Designed and developed a document management system.'
                    ]
                },
                {
                    company: 'Childrens Healthcare of Atlanta',
                    period: 'February 2004 - July 2005',
                    title: 'I.T. Consultant - Atlanta - Contract',
                    accomplishments: [
                        'Developed a web interface for tracking equipment movements.',
                        'Assisted in large software implementations across the organization.',
                        'Supported software applications for clinical staff.'
                    ]
                },
                {
                    company: 'We Provide I.T.',
                    period: 'September 2002 - January 2004',
                    title: 'Web Designer - Sydney/Atlanta - Self',
                    accomplishments: [
                        'Designed and developed a suite of Java and PHP services to gather results from Google search, manage content and communicate with other web sites.',
                        'Designed and developed entire web sites for clients.'
                    ]
                },
                {
                    company: 'Coca-Cola Amatil',
                    period: 'January 1998 - July 2002',
                    title: 'Senior Analyst Programmer - Sydney - Salary',
                    accomplishments: [
                        'Developed standards and templates for enterprise usage.',
                        'Provided support (locally and overseas) for several applications developed and maintained by myself.',
                        'Solely developed cross-platform Java packages designed to handle all pricing requirements using a variety of different database systems.',
                        'Played a key role in design and development of a mobile computing system in the delivery area of the business.',
                        'Spearheaded a development team to construct the first B2B web implementation in the Coca-Cola system.',
                        'Lead a development team to build a pre-sell system.',
                        'Presented several applications to other countries (Austria, Indonesia, Korea and the Philippines).',
                        'Designed and conducted a four day advanced RPG programming course to several European colleagues.',
                        'Assisted in development, training, implementing and supporting a vending application in South Korea.',
                        'Worked with an implementation team for delivery and route planning in South Korea, Indonesia, the Philippines and Australia.',
                        'Assisted in designing, testing and developing a middleware architecture using Mercator and MQSeries.',
                        'Lead a development team in Korea to develop a B2B web application in Mercator.'
                    ]
                },
                {
                    company: 'Kurt Salmon Associates',
                    period: 'January 1997 - September 1997',
                    title: 'Analyst Programmer - Atlanta - Salary',
                    accomplishments: [
                        'Developed applications to assist in managing distribution center processes.',
                        'Constructed a complex system to automatically determine the best shipping method based on size and weight of the packaging.'
                    ]
                },
                {
                    company: 'Equifax',
                    period: 'September 1996 - January 1997',
                    title: 'Analyst Programmer - Atlanta - Contract',
                    accomplishments: [
                        'Reconstructed Micro6X applications for year 2000 compliance, which included national credit files, motor vehicle reports, insurance claims, etc.'
                    ]
                },
                {
                    company: 'Genuine Parts Company',
                    period: 'January 1996 - September 1996',
                    title: 'Analyst Programmer - Atlanta - Contract',
                    accomplishments: [
                        'Developed applications to be emulated on Telxon handheld units via wireless communications for bar code scanning and key input for multiple distribution centers selling NAPA auto parts.', 'Developed cross-platform client-server communications as a standard for multiple applications.'
                    ]
                },
                {
                    company: 'The Coca-Cola Company',
                    period: 'July 1994 - January 1996',
                    title: 'Analyst Programmer - Atlanta - Contract',
                    accomplishments: [
                        'Developed client-server solutions on various platforms to assist in mobile communications and applications in delivery, field service and sales.'
                    ]
                },
                {
                    company: 'Mainheim Auctions',
                    period: 'May 1993 - May 1994',
                    title: 'Analyst Programmer - Atlanta - Salary',
                    accomplishments: [
                        'Developed and supported various programs assisting in managing auto auction activities across the US.'
                    ]
                }
            ]
        };
    }
};
</script>