import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view';
import * as echarts from 'echarts/core'
import {ToolboxComponent, LegendComponent, TooltipComponent, GridComponent, TitleComponent} from 'echarts/components';
import {PieChart, BarChart, LineChart} from 'echarts/charts';
import {LabelLayout, UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';
import './assets/scss/style.scss';

echarts.use([
    TitleComponent,
    ToolboxComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout,
    TooltipComponent,
    GridComponent,
    BarChart,
    LineChart,
    UniversalTransition
]);

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(dataV)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
