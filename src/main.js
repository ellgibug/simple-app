import Vue from 'vue'
import App from './App.vue'
import Skeleton from 'vue-loading-skeleton';
import router from './router'
import {store} from './store'
import axios from 'axios';
import {VueGrid} from '@liqueflies/vue-grid'
import Unicon from 'vue-unicons'
import {
    uniLayerGroupMonochrome,
    uniCarWash,
    uniUser,
    uniTimes,
    uniSignOutAlt,
    uniHouseUser,
    uniSetting,
    uniBookOpen,
    uniUserCircle,
    uniCheck,
    uniEdit,
    uniBars,
    uniBold,
    uniAngleRight,
    uniUsersAlt,
    uniBook,
    uniArrowCircleLeft,
    uniArrowCircleRight,
    uniAngleRightB,
    uniAngleLeftB,
    uniSearchAlt,

} from 'vue-unicons/src/icons'
import "./styles/index.scss"

require('dotenv').config();

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.config.productionTip = false;

Vue.use(Skeleton)

Unicon.add([
    uniLayerGroupMonochrome,
    uniCarWash,
    uniUser,
    uniTimes,
    uniSignOutAlt,
    uniHouseUser,
    uniSetting,
    uniBookOpen,
    uniUserCircle,
    uniCheck,
    uniEdit,
    uniBars,
    uniBold,
    uniAngleRight,
    uniUsersAlt,
    uniBook,
    uniArrowCircleLeft,
    uniArrowCircleRight,
    uniAngleRightB,
    uniAngleLeftB,
    uniSearchAlt
])
Vue.use(Unicon)
Vue.use(require('vue-moment'));
Vue.use(VueGrid, {
    columns: 12,
    gutter: 16,
    breakpoints: {
        xs: 320,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1188
    },
})


new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
