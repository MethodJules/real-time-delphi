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
            
            <p>Bitte füllen Sie die folgenden Angaben entsprechend aus. Dies hilft uns zur Erstellung Ihrer eigenen ID.</p>
                <p><strong>Hinweis: Alle Fragen müssen beantwortet werden!</strong></p>

            <v-form ref="form"
             v-model="valid"
             >

            <v-container>
              <v-col>
                <p>Bitte geben Sie Ihren Geburtsmonat ein.</p>


                <v-text-field label="Geburtsmonat" v-model="geburtsmonat"
            :rules="nameRules"
            required/>
              </v-col>
            </v-container>
            <v-container>
              <v-col>
                <p>Bitte geben Sie den 3. Buchstaben des Familiennamens ein.</p>
                <v-text-field label="3. Buchstabe" v-model="buchstabe_familienname"
                :rules="letterRules"
                 required />
              </v-col>
            </v-container>
            <v-container>
              <v-col>
                <p>Bitte geben Sie eine beliebige Zahl von 0-9 ein.</p>
                <v-text-field label="Zahl (0-9)" v-model="zahl"
                :rules="numberRules"
                 required />
              </v-col>
            </v-container>
            <v-container>
              <v-col>
                <p>Bitte geben Sie den 2. Buchstaben ihres Vornamens ein.</p>
                <v-text-field label="2. Buchstabe des Vornamens" v-model="zweiter_buchstabe"
                :rules="letterRules"
                 required />
              </v-col>
            </v-container>
            <v-container>
              <v-col>
                <div class="code">
                  <p>Bitte bestätigen Sie einmal den generierten Code</p>
                  <p>Generierter Code: {{identification_code}}</p>
                  <v-btn @click="commitGeneratedCode">Bestätigen</v-btn>
                </div>
              </v-col>
            </v-container>
            </v-form>
            <p><strong>Hinweis: Alle Fragen müssen beantwortet werden!</strong></p>
           <!-- <v-btn :disabled="!valid" color="success" @click="validate"> -->
            <Stopwatch v-show="valid && codeCommit" to="/hintergrund" needTimer="true" />
          <!-- </v-btn> -->
         

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
          valid: true,
          nameRules:[
          v => !!v || ' Geben Sie einen Monat ein.',
          v => /^Januar$/.test(v)|| /^Februar$/.test(v)|| /^März$/.test(v)|| /^April$/.test(v)
          || /^Mai$/.test(v)|| /^Juni$/.test(v)|| /^Juli$/.test(v)|| /^August$/.test(v)
          || /^September$/.test(v)|| /^Oktober$/.test(v)|| /^November$/.test(v)|| /^Dezember$/.test(v)  || 'Januar-Dezember',

          ],
          letterRules:[
          v => !!v || ' Geben Sie einen Buchstaben an.',
          v => /^\b[a-z]\b$/.test(v)  || 'Geben Sie genau ein Buchstaben ein  ',
          ],
          numberRules: [
          v => !!v || ' Geben Sie eine Zahl an.',
          v => /^\b[0-9]\b$/.test(v)    ||'Zahl(0-9)',
           ],
            node: APIService.get(1),
            geburtsmonat: '',
            buchstabe_familienname: '',
            zahl: '',
            zweiter_buchstabe: '',
            codeCommit: false,

        }

    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      saveCode() {
        this.$store.dispatch('code/saveCode', this.identification_code )
      },
      commitGeneratedCode() {
        this.codeCommit = true;
        this.saveCode();
      },
    },
    computed: {
      identification_code: function() {
        var hash = Math.random().toString(36).substring(2,9);
        var code = this.geburtsmonat + this.buchstabe_familienname + this.zahl + this.zweiter_buchstabe + '_' + hash;
        return code;
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