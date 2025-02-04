<template>
    <div id="header-container">
        <header id="top" role="banner" class="clearfix">
            <div class="block">
                <a class="nav-btn" id="nav-open-btn" href="#nav">Navigation</a>
            </div>
            <nav id="nav" role="navigation">
                <div class="wrapper block">
                    <ul>
                        <li><a href="#about" title="about me" rel="section">about me</a></li>
                        <li><a href="#experience" title="experience" rel="section">experience</a></li>
                        <li><a href="#accomplishments" title="accomplishments" rel="section">accomplishments</a></li>
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
</template>

<script>
export default {
    name: 'AppHeader'
};
</script>