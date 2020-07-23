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
            selection: 0,
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
            console.log('Value: ' + val + ' id: ' + this.questionId)
        }
    },
    watch: {
        selection: function(val){
            
            this.writeData(val);
        }
    }
}
</script>