<template>

    <v-container>

   <div>
      <!-- Fortschritsbalken wird erstellt -->
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
             <!-- Fragen werden erstellt und auf Regex geprüft-->
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
                 required/>
              </v-col>
            </v-container>
            <v-container>
              <v-col>
                <p>Bitte geben Sie eine beliebige Zahl von 0-9 ein.</p>
                <v-text-field label="Zahl (0-9)" v-model="zahl"
                :rules="numberRules"
                 required/>
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
           <!-- Verlinkung und Timer wird aktiviert -->
            <Stopwatch v-show="valid && codeCommit" to="/hintergrund" needTimer="true" />

         

     </div>

    </v-container>
</template>
<script>
import APIService from '@/services/api.service'
import Stopwatch from '@/components/Stopwatch'
export default //Popup falls der Nutzer zurück geht
{
  beforeRouteLeave(to, from, next) {
    if (to.path ==='/hintergrund' ){
      return next()
    }
      else if (confirm('Um das Experiment nicht zu verfälschen, bleiben Sie bitte auf der Seite.')) {
        return next(false)
      }
      else{
        return next(false)
      }
    },
    components: {
        Stopwatch
    },
    data() //Regex beschränkung
    {
        return {
          valid: true,
          nameRules:[
          v => !!v || ' Geben Sie einen Monat ein.',
          v => /^Januar$/.test(v) || /^Februar$/.test(v)|| /^März$/.test(v)|| /^April$/.test(v)
          || /^Mai$/.test(v)|| /^Juni$/.test(v)|| /^Juli$/.test(v)|| /^August$/.test(v)
          || /^September$/.test(v)|| /^Oktober$/.test(v)|| /^November$/.test(v)|| /^Dezember$/.test(v) || 'Januar-Dezember',

          ],
          letterRules:[
          v => !!v || ' Geben Sie einen Buchstaben an.',
          v => /\b^[a-z]$\b/.test(v) || /\b^[A-Z]$\b/.test(v)  ||/^ä$/.test(v)  ||
          /^Ä$/.test(v)  ||/^ö$/.test(v)  ||/^Ö$/.test(v)  ||/^ü$/.test(v)  ||/^Ü$/.test(v)  ||
          /^ß$/.test(v)  ||'Geben Sie genau ein Buchstaben ein  ',
          ],
          numberRules: [
          v => !!v || ' Geben Sie eine Zahl an.',
          v => /^0$/.test(v)  || /^1$/.test(v)  || /^2$/.test(v)  || /^3$/.test(v)  || /^4$/.test(v)  || 
          /^5$/.test(v)  || /^6$/.test(v)  || /^7$/.test(v)  || /^8$/.test(v)  || 
          /^9$/.test(v)  || 'Zahl(0-9)',
           ],
            node: APIService.get(1),
            geburtsmonat: '',
            buchstabe_familienname: '',
            zahl: '',
            zweiter_buchstabe: '',
            codeCommit: false,

        }

    },
    methods: //validierungs funktion
    {
      
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
    },
 

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