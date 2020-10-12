<template>
    <v-container>
        <v-col>
            <v-form ref="form"
             v-model="valid2"
             >
            <p>{{question}}</p>
            <!-- Fragen aus der API mit Zahlen abfrage werden geladen  -->
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
            //ReGex beschränkung
            numberRules: [
          v => !!v || ' Geben Sie Ihr Alter ein .',
          v => /^[1-9]\d{0,1}(?:,\d{1,2})?$/.test(v)  || 'Zahl(1-99)',
           ],
            answer: '',
        }
    },
    props: {
        question: String,
        label: String
    },
    methods:  //Validierungs Befehl( Feld muss ausgefüllt sein)
    {
              validate () {
        this.$refs.form.validate()
      },
        saveAnswer() //Antwort wird gespeichert
        {
            console.log(this.answer)
            this.$store.dispatch('answers/addAnswer', { question: this.question, answer: this.answer  })
            this.$emit("update", this.answer);
        }
    }
}
</script>