<template>
<v-container>
      <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
      <v-progress-linear value="0"></v-progress-linear>
        <strong>0%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
    <h2>{{node.title}}</h2>
    <div><span v-html="node.html"></span></div>
    <Stopwatch to="/datenschutz" needTimer="false" />
</v-container>
</template>
<script>
//import store from '@/store.js';
import APIService from '@/services/api.service'
import Stopwatch from '@/components/Stopwatch'
//import { mapState } from 'vuex'
export default {
    /*
    computed: mapState({
        nodes: state => state.begruessung.data
    }),
    created() {
        this.$store.dispatch('begruessung/getDataFromDrupal')
    },
    */
   components: {
     Stopwatch
   },
   data() {
     return {
       node: APIService.get(0)
     }
   }

}
</script>
