<template>
    <v-container>
        <div :id="questionId">
        <v-col>
            <p>{{question}}</p>
            <v-radio-group v-model="selection">
                <v-radio v-for="answer in answers" :key="answer.label" :label="answer.label" />
            </v-radio-group>
        </v-col>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return{
            selection: '',
        }
    },
    props: {
        questionId: Number,
        question: String,
        answers: Array,

    },
    methods: {
        logAnswer() {
            console.log(this.selection)
        },
        writeData(val) {
            console.log('Question: ' + this.question + ' Answer: ' + val)
            this.$store.dispatch('answers/addAnswer', { question: this.question, answer: val  })

        }
    },
    watch: {
        selection: function(val){

            this.writeData(val);
        }
    }
}
</script>