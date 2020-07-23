<template>
<v-container>
    <h1>{{begruessungsText.title}}</h1>
    <p>{{begruessungsText.body}}</p>
    <div><span v-html="begruessungsText.html"></span></div>

    <p>Bitte lesen Sie alle Anweisungen...</p>
    <!-- <section class="begruessung">
        <div>
            <p>{{begruessungsText.text}}</p>
            <router-link to="/datenschutz">Weiter</router-link>
        </div>
    </section> -->
    <v-btn to="/datenschutz">Weiter</v-btn>
</v-container>
</template>
<script>
//import store from '@/store.js';
export default {
    data() {
        return {
            begruessungsText: {
                title: 'Begleitbogen – Hinweise zur Durchführung',
                body: 'Der vorliegende Befragungbogen bezieht sich auf den Besuch von Online-Verkaufsplattformen, auf denen man sich über \
                        Produkte (wie z. B. Bücher) informieren und diese käuflich erwerben kann. \
                        Uns interessiert Ihre ehrliche, persönliche Meinung. Die Befragung findet anonym statt, \
                        es werden keine persönlichen Angaben verarbeitet. \
                        Einzelne Fragebögen können nicht auf einzelne Personen zurückgeführt werden.',
                html: "<p> Der Befragungbogen umfasst drei Bereiche</p> \
                        <ol> \
                            <li>Pre-Fragebogen</li> \
                            <li>Simulation Einkauf auf einer Online-Verkaufsplattform</li> \
                            <li>Post-Fragebogen</li> \
                        </ol>"
            }
        }
    }
}
</script>