<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <h1>Virtuelles Experiment von Rez@Kultur</h1>
        </v-container>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
 //import BegruessungPage from '@/views/BegruessungPage.vue';
 export default {
   components: {
     //BegruessungPage
   }
 }
</script>
<style>
.highlightText {
  background: yellow;
}
</style>