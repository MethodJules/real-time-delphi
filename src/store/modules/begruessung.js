import APIService from '@/services/api.service'


const state = () => ({
    data: []
})

const actions = {
    getDataFromDrupal({commit}){
        APIService.get('http://localhost:8080/web/jsonapi/node/welcome')
          .then((response) => {commit('GET_DATA_FROM_DRUPAL', response.data.data)},
          (error) => {
              console.log(error)
          });
    }
} 


const mutations = {
    GET_DATA_FROM_DRUPAL(state, data) {
        //console.log(data)
        state.data = data;
    }
}
//TODO Commit funtion getData from API
//TODO add data to data object


export default {
    namespaced: true,
    state,
    actions,
    mutations,
}