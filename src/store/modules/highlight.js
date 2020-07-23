const state = () => ({
    highlights: [],
})


const actions = {
    addHighlight({ commit }, text) {
        commit('pushhighlight', text)
    }
}


const mutations = {
    pushhighlight(state, text) {

        state.highlights.push(text);
        
        console.log("Mutation");
        console.log(state.highlights);
    },


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}