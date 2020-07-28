<template>
    <v-container>
        <h1>{{node.title}}</h1>
        <div><span v-html="node.html"></span></div>
        <SelectQuestion :question="node.questions[0].label" :answers="node.questions[0].answeroptions" />
        <p>Bitte geben Sie ihr Alter an</p>
        <v-row>
            <v-col cols="12" sm="6" md="3">
                <v-text-field label="Alter" v-model="alter"></v-text-field>
            </v-col>
        </v-row>
        <SelectQuestion :question="node.questions[2].label" :answers="node.questions[2].answeroptions" />
        <v-row>
            <v-col cols="12" sm="6" md="3">
                <v-text-field label="Sonstiger Abschluss" />
            </v-col>
        </v-row>
        <p>Welchen Abschluss streben Sie in Ihrem derzeitigen Studiengang an?</p>
        <v-radio-group v-model="angestrebter_abschluss">
            <v-radio label="Bachelor" />
            <v-radio label="Master" />
        </v-radio-group>
        <v-row>
            <v-col cols="12" sm="6" md="3">
                <v-text-field label="Sonstiges" v-model="sonstiger_angestrebter_abschluss"/>
            </v-col>
        </v-row>
        <p>Welchen Studiengang studieren Sie?</p>
        <v-row>
            <v-col cols="12" sm="6" md="3">
                <v-text-field label="Studiengang" v-model="studiengang" />
            </v-col>
        </v-row>
        <p>Wie lange nutzen Sie schon internetfähige Endgeräte (wie Tablet, Smartphone, Laptop, Desktop-PC)</p>
        <v-radio-group v-model="nutzung_endgeraete">
            <v-radio label="0 Jahre" />
            <v-radio label="< 1 Jahr" />
            <v-radio label="1-2 Jahre" />
            <v-radio label="3-4 Jahre" />
            <v-radio label="5-6 Jahre" />
            <v-radio label="7-8 Jahre" />
            <v-radio label="> 8 Jahre" />
        </v-radio-group>
        <p>Wie viele Stunden nutzen Sie durchschnittlich ein internetfähiges Endgerät am Tag?</p>
        <v-radio-group v-model="durchschnittliche_nutzung_endgeraete">
            <v-radio label="0 Stunden" />
            <v-radio label="< 1 Stunden" />
            <v-radio label="1-2 Stunden" />
            <v-radio label="3-4 Stunden" />
            <v-radio label="5-6 Stunden" />
            <v-radio label="7-8 Stunden" />
            <v-radio label="> 8 Stunden" />
        </v-radio-group>
        <p>Sind Sie vertraut mit dem Surfen im Internet?</p>
        <v-radio-group v-model="internetsurfen">
            <v-radio label="ja" />
            <v-radio label="nein" />
        </v-radio-group>
        <p>Wie oft kaufen Sie typischerweise Produkte auf Online-Verkaufsplattformen?</p>
        <v-radio-group v-model="produkteinkauf">
            <v-radio label="Mindestens 1x im Monat" />
            <v-radio label="Mindestens 1x in 2 Monaten" />
            <v-radio label="Mindestens 1x in 3 Monaten" />
            <v-radio label="Mindestens 1x in 4 Monaten" />
            <v-radio label="Mindestens 1x in 5 Monaten" />
            <v-radio label="Mindestens 1x im 6 Monaten" />
            <v-radio label="Höchstens alle halbe Jahre, eher seltener" />
            <v-radio label="nie" />
        </v-radio-group>
        <p>Lesen Sie Kundenproduktrezensionen auf Online-Verkaufsplattformen, wenn Sie planen, ein Produkt zu kaufen? (Kundenproduktrezensionen sind
            von Kunden verfasste Texte, in denen Kunden ihre Meinung über Produkte teilen.) </p>
        <v-radio-group v-model="produktrezensionen">
            <v-radio label="Ja"/>
            <v-radio label="Nein" />
        </v-radio-group>
        <p>Wie oft kaufen Sie typischerweise Bücher auf Online-Verkaufsplattformen?</p>
        <v-radio-group v-model="buechereinkauf">
            <v-radio label="Mindestens 1x im Monat" />
            <v-radio label="Mindestens 1x in 2 Monaten" />
            <v-radio label="Mindestens 1x in 3 Monaten" />
            <v-radio label="Mindestens 1x in 4 Monaten" />
            <v-radio label="Mindestens 1x in 5 Monaten" />
            <v-radio label="Mindestens 1x im 6 Monaten" />
            <v-radio label="Höchstens alle halbe Jahre, eher seltener" />
            <v-radio label="nie" />
        </v-radio-group>
        <p>Lesen Sie Buchrezensionen von anderen Kunden auf Online-Verkaufsplattformen, wenn Sie planen, ein Buch zu kaufen? (Buchrezensionen sind
            von Kunden verfasste Texte, in denen Kunden ihre Meinung über Bücher teilen.) </p>
        <v-radio-group v-model="buchrezensionen">
            <v-radio label="Ja"/>
            <v-radio label="Nein" />
        </v-radio-group>
        <v-btn>Zurück</v-btn><v-btn to="/buch">Weiter</v-btn>   
    </v-container>
</template>

<script>
import APIService from '@/services/api.service'
import SelectQuestion from '@/components/SelectQuestion'

export default {
    components: {
        SelectQuestion
    },
    data() {
        return {
            geschlecht: 'w',
            alter: 0,
            abschluss: 0,
            sonstiger_abschluss: '',
            sonstiger_angestrebter_abschluss: '',
            angestrebter_abschluss: 0,
            studiengang: '',
            nutzung_endgeraete: 0,
            durchschnittliche_nutzung_endgeraete: 0,
            internetsurfen: 0,
            produkteinkauf: 0,
            produktrezensionen: 0,
            buechereinkauf: 0,
            buchrezensionen: 0,

            node: APIService.get(5)



        } 
    }
}
</script>