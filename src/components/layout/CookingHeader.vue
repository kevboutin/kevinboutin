<template>
    <div id="header-container">
        <header id="top" role="banner" class="clearfix">
            <div class="block">
                <a class="nav-btn" id="nav-open-btn" href="#nav">Navigation</a>
            </div>
            <nav id="nav" role="navigation">
                <div class="wrapper block">
                    <ul>
                        <li><a href="#utensils" title="utensils" rel="section">utensils</a></li>
                        <li><a href="#equipment" title="equipment" rel="section">equipment</a></li>
                    </ul>
                    <a class="close-btn" id="nav-close-btn" href="#top">Return to Content</a>
                </div>
            </nav>
            <h1 class="title">Recommendations for Cooking</h1>
            <div id="logo">
                <span aria-hidden="true" class="icon-kblogo-sm logo"></span>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'CookingHeader'
};
</script>