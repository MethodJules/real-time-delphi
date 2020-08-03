<template>
<v-container>
    <div v-for="node in nodes" :key="node.id">
        <h2>{{node.attributes.title}}</h2>
        <div><span v-html="node.attributes.body.value"></span></div>
    </div>
    <!-- <div><span v-html="node.body.value"></span></div> -->
    <v-btn to="/datenschutz">Weiter</v-btn>
</v-container>
</template>
<script>
//import store from '@/store.js';
//import APIService from '@/services/api.service'
import { mapState } from 'vuex'
export default {
    computed: mapState({
        nodes: state => state.begruessung.data
    }),
    created() {
        this.$store.dispatch('begruessung/getDataFromDrupal')
    },
    
}
</script>