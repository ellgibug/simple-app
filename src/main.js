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
    uniPlus,
    uniHome

} from 'vue-unicons/src/icons'
import "./styles/index.scss"

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);


import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';
import * as rules from 'vee-validate/dist/rules';


localize('ru');

// install rules and localization
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

// localize({
//     ru: {
//         messages: {
//             required: 'this field is required RU',
//             min: 'this field must have no less than {length} characters RU',
//             max: (_, { length }) => `this field must have no more than ${length} characters RU`
//         }
//     }
// });


Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


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
    uniSearchAlt,
    uniPlus,
    uniHome,
])
Vue.use(Unicon)
Vue.use(require('vue-moment'));
Vue.use(VueGrid, {
    columns: 12,
    gutter: 12,
    breakpoints: {
        xs: 320,
        sm: 576,
        md: 780,
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
