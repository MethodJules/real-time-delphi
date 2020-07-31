const state = () => ({
    stopwatches: [],
})


const actions = {
    addStopwatch({ commit }, watch) {
        commit('pushWatch', watch)
    }
}


const mutations = {
    pushWatch(state, watch) {

        state.stopwatches.push(watch);

        console.log("Mutation");
        console.log(state.stopwatches);
    },


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}