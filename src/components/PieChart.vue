<template>
    <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
    import echarts from 'echarts';
    require('echarts/theme/macarons');
    import {debounce} from '@/utils';

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
        methods: {
            initChart() {
                this.chart = echarts.init(this.$el, 'macarons');

                this.chart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} years ({d}%)'
                    },
                    legend: {
                        left: 'center',
                        bottom: '10',
                        data: ['Telecommunications', 'Beverages', 'Healthcare', 'Industry 4.0', 'Distribution', 'Other']
                    },
                    calculable: true,
                    series: [
                        {
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(0, 0, 0, 0.7)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(0, 0, 0, 0.7)'
                                    }
                                }
                            },
                            name: 'experience',
                            type: 'pie',
                            roseType: 'radius',
                            radius: [15, 95],
                            center: ['50%', '38%'],
                            data: [
                                {value: 9, name: 'Telecommunications'},
                                {value: 8, name: 'Beverages'},
                                {value: 7, name: 'Distribution'},
                                {value: 2.5, name: 'Healthcare'},
                                {value: 2, name: 'Industry 4.0'},
                                {value: 3.5, name: 'Other'}
                            ],
                            animationEasing: 'cubicInOut',
                            animationDuration: 2600
                        }
                    ]
                });
            }
        }
    };
</script>
