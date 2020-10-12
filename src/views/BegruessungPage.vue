<template>
<v-container>
      <div>
        <!-- Fortschritsbalken wird erstellt -->
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
  <!-- Text wird von der API geladen -->
 
    <h2>{{node.title}}</h2>
    <div><span v-html="node.html"></span></div>
    <!-- Verlinkung zur nächten Seite, Timer wird nicht gestellt -->
    <Stopwatch to="/datenschutz" needTimer="false" />
</v-container>

</template>

<script>

import APIService from '@/services/api.service'
import Stopwatch from '@/components/Stopwatch'
export default {
   beforeRouteLeave(to, from, next) {
    if (to.path ==='/datenschutz' ){
      confirm('Um Darstellungsprobleme zu vermeiden, nutzen Sie bitte die Aktuellesten Browser Versionen')
      return next()}
       else{
        return next(false)
      }
      
      
    },

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