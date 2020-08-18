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
            <v-form>
            <v-container>
              <v-col>
                <p>Bitte geben Sie Ihren Geburtsmonat ein.</p>
                <v-text-field label="Geburtsmonat" v-model="geburtsmonat" required/>
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
            <v-container>
              <v-col>
                <div class="code">
                  <p>Generierter Code: {{identification_code}}</p>
                </div>
              </v-col>
            </v-container>
            </v-form>
            <Stopwatch to="/hintergrund" needTimer="true" />
        </div>
    </v-container>
</template>
<script>
import APIService from '@/services/api.service'
import Stopwatch from '@/components/Stopwatch'
//import NumberQuestion from '@/components/NumberQuestion'
//import Question from '@/components/Question';
export default {
    components: {
        //Question
        //NumberQuestion
        Stopwatch
    },
    data() {
        return {
            node: APIService.get(1),
            geburtsmonat: '',
            buchstabe_familienname: '',
            zahl: '',
            zweiter_buchstabe: '',

        }
    },
    methods: {

      saveCode() {
        this.$store.dispatch('code/saveCode', this.identification_code )
      }
    },
    computed: {
      identification_code: function() {
        var code = this.geburtsmonat + this.buchstabe_familienname + this.zahl + this.zweiter_buchstabe
        return code
      }
    }
}
</script>
<style scoped>
.code {
  background-color: gray;
  color: white;
}

.code p {
  padding: 10px;
}
</style>