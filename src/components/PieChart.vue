<template>
    <div :class="className" :style="{ height, width }"></div>
</template>

<script>
// Import only what's needed from ECharts
import * as echarts from 'echarts/core';
import {PieChart} from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';
import {debounce} from '@/utils';

// Register necessary components
echarts.use([
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    CanvasRenderer
]);

export default {
    name: 'PieChart',
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '300px'
        },
        // Add data as a prop for better reusability
        chartData: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data() {
        return {
            chart: null
        };
    },
    mounted() {
        this.initChart();
        this.__resizeHandler = debounce(() => {
            if (this.chart) {
                this.chart.resize();
            }
        }, 100);
        window.addEventListener('resize', this.__resizeHandler);
    },
    beforeDestroy() {
        if (!this.chart) {
            return;
        }
        window.removeEventListener('resize', this.__resizeHandler);
        this.chart.dispose();
        this.chart = null;
    },
    watch: {
        // Add watcher for data changes
        chartData: {
            handler(newData) {
                if (this.chart) {
                    this.updateChart(newData);
                }
            },
            deep: true
        }
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$el);
            this.updateChart(this.chartData);
        },
        updateChart(data) {
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} years ({d}%)'
                },
                legend: {
                    left: 'center',
                    bottom: '10',
                    data: data.map((item) => item.name)
                },
                series: [
                    {
                        name: 'experience',
                        type: 'pie',
                        roseType: 'radius',
                        radius: [15, 95],
                        center: ['50%', '38%'],
                        data,
                        label: {
                            color: 'rgba(0, 0, 0, 0.7)'
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(0, 0, 0, 0.7)'
                            }
                        },
                        animationEasing: 'cubicInOut',
                        animationDuration: 2600
                    }
                ]
            };

            this.chart.setOption(option);
        }
    }
};
</script>
