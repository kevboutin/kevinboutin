<template>
    <section id="experience">
        <div class="wrapper clearfix">
            <h2>experience</h2>
            <p>I have worked in seven different industries during my career. The time I spent in
                each industry is detailed in the pie chart below. Below that, I illustrate how
                much time I have spent using various skills.</p>
            <div class="chart-wrapper">
                <pie-chart :chart-data="chartData"></pie-chart>
            </div>
            <TimelineChart :skills="skills" />
        </div>
    </section>
</template>

<script>
import PieChart from '../PieChart.vue';
import TimelineChart from '../TimelineChart.vue';

export default {
    name: 'ExperienceSection',
    components: {
        PieChart,
        TimelineChart
    },
    props: {
        chartData: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            skills: [
                {name: 'Python', period: '2019 - 2020', left: '76%', width: '12%'},
                {name: 'Serverless', period: '2015 - 2024', left: '61%', width: '34%'},
                {name: 'Spring', period: '2009 - 2017', left: '52%', width: '21.8%'},
                {name: 'Java', period: '2000 - 2020', left: '34.5%', width: '45.6%'},
                {name: 'JavaScript/Node.js', period: '2000 - 2024', left: '34.5%', width: '60.6%'},
                {name: 'PHP, Oracle', period: '2000 - 2005', left: '34.5%', width: '17%'},
                {name: 'C/C++', period: '1995 - 1998', left: '9%', width: '16%'},
                {name: 'RPG, COBOL, DB2', period: '1993 - 1999', left: '0', width: '35%'}
            ]
        };
    }
};
</script>