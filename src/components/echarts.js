import Vue from 'vue';
import Echarts from 'vue-echarts';
//const Echarts = require('vue-echarts');
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
Vue.component('chart', Echarts);