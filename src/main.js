import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view';
import * as echarts from 'echarts'
import { ToolboxComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import './assets/scss/style.scss';
echarts.use([
    ToolboxComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
]);

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(dataV)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
