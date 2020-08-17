import Vue from 'vue'
import Vuex from 'vuex'
import highlight from './modules/highlight'
import begruessung from './modules/begruessung'
import datenschutz from './modules/datenschutz'
import personal_background from './modules/personal_background'
import senddata from './modules/senddata'
import answers from './modules/answers'
import code from './modules/code'

Vue.use(Vuex)
Vue.config.devtools = true



export default new Vuex.Store({
    modules: {
        highlight,
        begruessung,
        datenschutz,
        personal_background,
        senddata,
        answers,
        code
    }
})

