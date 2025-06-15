<template>
    <div id="header-container">
        <header id="top" role="banner" class="clearfix">
            <div class="block">
                <a class="nav-btn" id="nav-open-btn" href="#nav">Navigation</a>
            </div>
            <nav id="nav" role="navigation">
                <div class="wrapper block">
                    <ul>
                        <li><a href="#wheels" title="wheels" rel="section">wheels</a></li>
                        <li><a href="#paint" title="paint" rel="section">paint</a></li>
                        <li><a href="#trim" title="trim" rel="section">trim</a></li>
                        <li><a href="#interior" title="interior" rel="section">interior</a></li>
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
</template>

<script>
export default {
    name: 'AutoHeader'
};
</script>