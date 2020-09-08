<template>
    <v-container>
        <div :id="questionId">
        <v-col>
            <v-form ref="form"
             v-model="valid1"
             >
            <p>{{question}}</p>
            <v-radio-group v-model="selection">
                <v-radio v-for="answer in answers" :key="answer.label" :label="answer.label"
                required
                :rules="[v => !!v || 'You must agree to continue!']"/>
            </v-radio-group>
            </v-form>
        </v-col>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return{
            valid1: true,
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

        },
        updateQuantity(event) {
        if(!this.form.selection){
        alert('Please select one of the options first')
        event.preventDefault()
      }
    }
    },
    watch: {
        selection: function(val){

            this.writeData(val);
            this.$emit("update", val);
        }
    }
}
</script>