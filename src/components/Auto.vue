<template>
    <div class="auto">
        <div id="outer-wrap">
            <div id="inner-wrap">
                <AutoHeader />

                <div id="main-container">
                    <article role="main">
                        <WheelsSection />
                        <PaintSection />
                        <TrimSection />
                        <InteriorSection />
                    </article>
                </div>

                <AppFooter />
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/styles/auto.css';
import AutoHeader from './layout/AutoHeader.vue';
import AppFooter from './layout/AppFooter.vue';
import WheelsSection from './sections/auto/WheelsSection.vue';
import PaintSection from './sections/auto/PaintSection.vue';
import TrimSection from './sections/auto/TrimSection.vue';
import InteriorSection from './sections/auto/InteriorSection.vue';

export default {
    name: 'Auto',
    components: {
        AutoHeader,
        AppFooter,
        WheelsSection,
        PaintSection,
        TrimSection,
        InteriorSection
    }
};
</script>

<style src="../assets/styles/auto.css"></style>
