<template>
    <div class="timeline">
        <ul class="events">
            <li v-for="skill in skills" :key="skill.name" :style="{ width: skill.width, left: skill.left }">
                {{ skill.name }} <em>({{ skill.period }})</em>
            </li>
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
            <li>2017</li>
            <li>2020</li>
            <li class="last">2025</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TimelineChart',
    props: {
        skills: {
            type: Array,
            required: true
        }
    }
};
</script>