<template>
    <div class="home">
        <div id="outer-wrap">
            <div id="inner-wrap">
                <AppHeader />

                <div id="main-container">
                    <article role="main">
                        <AboutSection />
                        <ExperienceSection :chart-data="experienceData" />
                        <AccomplishmentsSection />
                    </article>
                </div>

                <AppFooter />
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from './layout/AppHeader.vue';
import AppFooter from './layout/AppFooter.vue';
import AboutSection from './sections/AboutSection.vue';
import ExperienceSection from './sections/ExperienceSection.vue';
import AccomplishmentsSection from './sections/AccomplishmentsSection.vue';

export default {
    name: 'Home',
    components: {
        AppHeader,
        AppFooter,
        AboutSection,
        ExperienceSection,
        AccomplishmentsSection
    },
    data() {
        return {
            experienceData: [
                { value: 9, name: 'Telecommunications' },
                { value: 8, name: 'Beverages' },
                { value: 7, name: 'Distribution' },
                { value: 2.5, name: 'Healthcare' },
                { value: 2, name: 'Industry 4.0' },
                { value: 3.5, name: 'Other' }
            ]
        };
    }
};
</script>

<style src="../assets/styles/home.css"></style>
