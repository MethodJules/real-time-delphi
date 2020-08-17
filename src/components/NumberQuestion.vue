<template>
    <v-container>
        <v-col>
            <p>{{question}}</p>
            <v-text-field :label="label" v-model="answer" @change="saveAnswer" />
        </v-col>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            answer: '',
        }
    },
    props: {
        question: String,
        label: String
    },
    methods:  {
        saveAnswer() {
            console.log(this.answer)
            this.$store.dispatch('answers/addAnswer', { question: this.question, answer: this.answer  })
        }
    }
}
</script>