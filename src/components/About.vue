<script setup>
import AboutItem from './AboutItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
    <AboutItem>
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>Documentation</template>

        Vue’s
        <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
        provides you with all information you need to get started.
    </AboutItem>

    <AboutItem>
        <template #icon>
            <ToolingIcon />
        </template>
        <template #heading>Tooling</template>

        This project is served and bundled with
        <a href="https://vite.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The recommended IDE
        setup is
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If you need to test
        your
        components and web pages, check out
        <a href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a>
        and
        <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
        /
        <a href="https://playwright.dev/" target="_blank" rel="noopener">Playwright</a>.

        <br />

        More instructions are available in
        <a href="javascript:void(0)" @click="openReadmeInEditor"><code>README.md</code></a>.
    </AboutItem>

    <AboutItem>
        <template #icon>
            <EcosystemIcon />
        </template>
        <template #heading>Ecosystem</template>

        Get official tools and libraries for your project:
        <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
        <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
        <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
        <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If you need
        more
        resources, we suggest paying
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
        a visit.
    </AboutItem>

    <AboutItem>
        <template #icon>
            <CommunityIcon />
        </template>
        <template #heading>Community</template>

        Got stuck? Ask your question on
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>
        (our official Discord server), or
        <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>.
        You should also follow the official
        <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener">@vuejs.org</a>
        Bluesky account or the
        <a href="https://x.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
        X account for latest news in the Vue world.
    </AboutItem>

    <AboutItem>
        <template #icon>
            <SupportIcon />
        </template>
        <template #heading>Support Vue</template>

        As an independent project, Vue relies on community backing for its sustainability. You can help us by
        <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
    </AboutItem>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>

<style src="../assets/about.css"></style>
