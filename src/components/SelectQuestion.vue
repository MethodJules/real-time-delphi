<template>
    <v-container>
        <v-col>
            <p>{{question}}</p>
            <v-radio-group v-model="selection">
                <v-radio @change="logAnswer" v-for="answer in answers" :key="answer.label" :label="answer.label" />
            </v-radio-group>
        </v-col>
    </v-container>
</template>

<script>
export default {
    data() {
        return{
            //question: "Testfrage",
            selection: 0,
            /*
            answers: [
                {
                    label: "0 Jahre"
                },
                {
                    label: "< 1 Jahr"
                },
                {
                    label: "1-2 Jahre"
                }
            ],*/
        }       
    },
    props: {
        question: String,
        answers: Array
    },
    methods: {
        logAnswer() {
            console.log(this.selection)
        }
    }
}
</script>