<template>
    <v-container>
        <div id="personal_background">
            <div v-for="node in nodes.data" :key="node.id">
                <h2>{{node.attributes.title}}</h2>
                <div v-if="node.attributes.body == null">
                    <p>Bitte prüfen Sie ihre Daten. Es wurde kein Text verfasst.</p>
                </div>
                <div v-else>
                    <div><span v-html="node.attributes.body.value"></span></div>
                </div>
                
            </div>
        </div>
        <!-- <h2>{{node.title}}</h2>
        <div><span v-html="node.html"></span></div>
        <div v-for="question in node.questions" :key="question.question">
            <div v-if="question.question_type == 'select'">
                <SelectQuestion :questionId="question.id" :question="question.question" :answers="question.answeroptions" />
            </div>
            <div v-if="question.question_type == 'number'">
                <NumberQuestion :question="question.question" :label="question.label" />
            </div>
            <div v-if="question.question_type == 'text'">
                <TextQuestion :question="question.question" :label="question.label" />
            </div>
        </div> -->

        <v-btn>Zurück</v-btn><v-btn to="/buch">Weiter</v-btn>   
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
// import SelectQuestion from '@/components/SelectQuestion'
// import NumberQuestion from '@/components/NumberQuestion'
// import TextQuestion from '@/components/TextQuestion'
export default {
    components: {
        //SelectQuestion,
        //NumberQuestion,
        //TextQuestion
    },
    computed: mapState({
        nodes: state => state.personal_background.data
    }),
    created() {
        this.$store.dispatch('personal_background/getDataFromDrupal')
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
        } 
    }
}
</script>