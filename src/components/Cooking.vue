<template>
    <div class="cooking">
        <div id="outer-wrap">
            <div id="inner-wrap">
                <CookingHeader />

                <div id="main-container">
                    <article role="main">
                        <UtensilsSection />
                        <EquipmentSection />
                    </article>
                </div>

                <AppFooter />
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/styles/cooking.css';
import CookingHeader from './layout/CookingHeader.vue';
import AppFooter from './layout/AppFooter.vue';
import UtensilsSection from './sections/cooking/UtensilsSection.vue';
import EquipmentSection from './sections/cooking/EquipmentSection.vue';

export default {
    name: 'Cooking',
    components: {
        CookingHeader,
        AppFooter,
        UtensilsSection,
        EquipmentSection
    }
};
</script>

<style src="../assets/styles/cooking.css"></style>
