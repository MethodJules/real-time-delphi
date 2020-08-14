import Vue from 'vue'
import Vuex from 'vuex'
import highlight from './modules/highlight'
import begruessung from './modules/begruessung'
import datenschutz from './modules/datenschutz'
import personal_background from './modules/personal_background'

Vue.use(Vuex)
Vue.config.devtools = true



export default new Vuex.Store({
    modules: {
        highlight,
        begruessung,
        datenschutz,
        personal_background
    }
})

