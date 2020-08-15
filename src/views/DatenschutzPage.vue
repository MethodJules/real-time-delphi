<template>
    <v-container>
              <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
      <v-progress-linear value="9"></v-progress-linear>
        <strong>9%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
        <div id="datenschutz">
            <h2>Datenschutz</h2>
            <p>Uns interessiert Ihre ehrliche, persönliche Meinung. Die Befragung findet anonym statt,
                es werden keine persönlichen Angaben verarbeitet.
                Einzelne Fragebögen können nicht auf einzelne Personen zurückgeführt werden.
                Um die Zusammengehörigkeit der Seiten des Befragungsbogens identifizieren zu können
                und zugleich Ihre Anonymität zu schützen, ist zunächst eine ID herzuleiten.
                Die ID setzt sich aus den nachfolgenden Antworten zusammen.</p>
            <v-container>
              <v-col>
                <p>Bitte geben Sie Ihren Geburtsmonat ein.</p>
                <v-text-field label="Geburtsmonat" v-model="geburtsmonat" />
              </v-col>
            </v-container>
            <v-container>
              <v-col>
                <p>Bitte geben Sie den 3. Buchstaben des Familiennamens ein.</p>
                <v-text-field label="3. Buchstabe" v-model="buchstabe_familienname" />
              </v-col>
            </v-container>
            <v-container>
              <v-col>
                <p>Bitte geben Sie eine beliebige Zahl von 0-9 ein.</p>
                <v-text-field label="Zahl (0-9)" v-model="zahl" />
              </v-col>
            </v-container>
            <v-container>
              <v-col>
                <p>Bitte geben Sie den 2. Buchstaben ihres Vornamens ein.</p>
                <v-text-field label="2. Buchstabe des Vornamens" v-model="zweiter_buchstabe" />
              </v-col>
            </v-container>
            <v-btn to="/fragen2page">Weiter</v-btn>
        </div>
    </v-container>
</template>
<script>
import APIService from '@/services/api.service'
//import NumberQuestion from '@/components/NumberQuestion'
//import Question from '@/components/Question';
export default {
    components: {
        //Question
        //NumberQuestion
    },
    data() {
        return {
            node: APIService.get(1),
            geburtsmonat: '',
            buchstabe_familienname: '',
            zahl: '',
            zweiter_buchstabe: ''
        }
    },
}
</script>
