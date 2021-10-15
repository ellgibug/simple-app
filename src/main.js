import Vue from 'vue'
import App from './App.vue'
import Skeleton from 'vue-loading-skeleton';
import router from './router'
import {store} from './store'
import axios from 'axios';
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
])
Vue.use(Unicon)
Vue.use(require('vue-moment'));

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
