<template>
    <v-container>
        <h2>{{node.title}}</h2>
        <div><span v-html="node.html"></span></div>
        <!-- <v-btn to="/datenschutz">Weiter</v-btn>-->
        <Stopwatch timer="/datenschutz" needTimer="false"/>
        <v-btn @click="callDrupalJSONApi">Fetch Data</v-btn>
    </v-container>
</template>
<script>
//import store from '@/store.js';
import APIService from '@/services/api.service'
import axios from 'axios'
import Stopwatch from '@/components/Stopwatch'
export default {
    components: {
        Stopwatch
    },

    data() {
        return {
            /*
            begruessungsText: {
                title: 'Begleitbogen – Hinweise zur Durchführung',
                body: 'Der vorliegende Befragungbogen bezieht sich auf den Besuch von Online-Verkaufsplattformen, auf denen man sich über \
                        Produkte (wie z. B. Bücher) informieren und diese käuflich erwerben kann. \
                        Uns interessiert Ihre ehrliche, persönliche Meinung. Die Befragung findet anonym statt, \
                        es werden keine persönlichen Angaben verarbeitet. \
                        Einzelne Fragebögen können nicht auf einzelne Personen zurückgeführt werden.',
                html: "<p>Der Befragungbogen umfasst drei Bereiche</p> \
                        <ol> \
                            <li>Pre-Fragebogen</li> \
                            <li>Simulation Einkauf auf einer Online-Verkaufsplattform</li> \
                            <li>Post-Fragebogen</li> \
                        </ol>"
            }*/
            node: APIService.get(0)
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