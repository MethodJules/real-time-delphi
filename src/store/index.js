import Vue from 'vue'
import Vuex from 'vuex'
import highlight from './modules/highlight'

Vue.use(Vuex)
Vue.config.devtools = true



export default new Vuex.Store({
    modules: {
        highlight
    }
})

