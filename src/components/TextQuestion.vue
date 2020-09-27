<template>
    <v-container>
        <v-col>
            <v-form ref="form"
             v-model="valid3"
             >
            <p>{{question}}</p>
            <v-text-field :label="label" v-model="answer" @change="saveAnswer"
            :rules="letterRules"
                  required
                />
            </v-form>
        </v-col>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            valid3: true,
            letterRules:[
          v => !!v || ' Geben Sie Ihren Beruf an .',
           v => /^\b[^\d\W]+\b$/.test(v) ||/ä/.test(v)  ||/Ä/.test(v)  ||/ö/.test(v)  ||/Ö/.test(v)  ||/ü/.test(v)
             ||/Ü/.test(v)  ||/ß/.test(v)||'Geben Sie Ihren Beruf ein  ',
         
          ],
            answer: ''
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