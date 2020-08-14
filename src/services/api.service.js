import axios from 'axios'
//import apiSim from './api.simulation'

const APIService = {
    init(baseUrl) {
        axios.defaults.baseURL = baseUrl;
    },

    get(resource) {
        //console.log(apiSim.survey)
        //return apiSim.survey[resource];
        //console.log(resource)
        return axios.get(resource)
    },

    /*
    getPage(resource) {
        axios.get(`http://localhost:8080/web/jsonapi/node/${resource}`)
                .then((response) => {
                    //const data = response.data.data;
                    //console.log(data[0]);
                    //console.log(data[0].attributes.title)
                    //console.log(data[0].attributes.body.value)
                    
                })
    },*/
    
    post(resource, data) {
        return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource){
        return axios.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
    customRequest(data) {
        return axios(data)
    }
}

export default APIService