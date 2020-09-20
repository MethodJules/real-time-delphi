<template>
    <v-container>
        <v-col>
            <v-form ref="form"
             v-model="valid2"
             >
            <p>{{question}}</p>
            <v-text-field :label="label" v-model="answer" @change="saveAnswer"
            :rules="numberRules"
                 required/>
            </v-form>
        </v-col>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            valid2: true,
            numberRules: [
          v => !!v || ' Geben Sie eine Zahl an.',
          v => /^[0-9]+$/.test(v)  || 'Zahl(0-9)',
           ],
            answer: '',
        }
    },
    props: {
        question: String,
        label: String
    },
    methods:  {
              validate () {
        this.$refs.form.validate()
      },
        saveAnswer() {
            console.log(this.answer)
            this.$store.dispatch('answers/addAnswer', { question: this.question, answer: this.answer  })
            this.$emit("update", this.answer);
        }
    }
}
</script>