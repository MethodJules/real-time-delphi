<template>
    <v-container>
        <div id="datenschutz">
            <div v-for="node in nodes.data" :key="node.id">
                <h2>{{node.attributes.title}}</h2>
                <div><span v-html="node.attributes.body.value"></span></div>
            </div>
            <div v-for="question in nodes.included" :key="question.id">
                <div v-if="question.attributes.field_question_question_type == 'text'">
                    <TextQuestion :question="question.attributes.title" :label="question.attributes.label" />
                </div>
                <div v-if="question.attributes.field_question_question_type == 'number'">
                    <NumberQuestion :question="question.attributes.title" :label="question.attributes.label" />
                </div>
                
            </div>
            <div>
                <!-- <NumberQuestion v-for="question in node.questions" :question="question.question" :label="question.label" :key="question.label" /> -->
                <v-btn to="/begruessung">Zurück</v-btn>
                <v-btn to="/hintergrund">Weiter</v-btn>
            </div>
        </div>
    </v-container>    
</template>
<script>
import { mapState } from 'vuex'
import TextQuestion from '@/components/TextQuestion'
import NumberQuestion from '@/components/NumberQuestion'
export default {
    components: {
        TextQuestion,
        NumberQuestion
    },
    computed: mapState({
        nodes: state => state.datenschutz.data
    }),
    created() {
        this.$store.dispatch('datenschutz/getDataFromDrupal')
    },
    
}
</script>