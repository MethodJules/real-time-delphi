<template>
<v-container>
          <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
        <strong>100%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
    <h2>{{abschlussText.title}}</h2>
    <div><span v-html="abschlussText.html"></span></div>
    <v-btn @click="callDrupalJSONApi">Fetch Data</v-btn>
</v-container>
</template>
<script>
//import store from '@/store.js';
import APIService from '@/services/api.service'
import axios from 'axios'
export default {
    data() {
        return {
            /*
            abschlussText: {
                html: "<p>Vielen Dank für Ihre Teilnahme an der Veranstaltung</p> \
                       <p>Sollten Sie früher fertig geworden sein, warten Sie bitte bis zum Ende der Veranstaltung.</p> \"
            }*/
            abschlussText: APIService.get(0)
        }
    },
    methods: {
        callDrupalJSONApi() {
            axios.get('http://localhost:8080/web/jsonapi/node/article')
                .then((response) => {
                    const data = response.data.data;
                    console.log(data);
                    console.log(data[0].attributes.body.value)
                })
        },
    }
}
</script>