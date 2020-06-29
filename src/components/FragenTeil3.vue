<template>
<v-container>
    
        <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, konnte ich die meisten Ablenkungen ausblenden.</p>
          <v-radio-group v-model="row">
              <v-radio label="1" name='radio1' value="11"></v-radio>
              <v-radio label="2" name="radio1" value="12"></v-radio>
              <v-radio label="3" name="radio1" value="13"></v-radio>
              <v-radio label="4" name="radio1" value="14"></v-radio>
              <v-radio label="5" name="radio1" value="15"></v-radio>
          </v-radio-group>
        </v-col>
          <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, war ich in das, was ich tat vertieft. </p>
          <v-radio-group v-model="row">
              <v-radio label="1" name="radio2" value="21"></v-radio>
              <v-radio label="2" name="radio2" value="22"></v-radio>
              <v-radio label="3" name="radio2" value="23"></v-radio>
              <v-radio label="4" name="radio2" value="24"></v-radio>
              <v-radio label="5" name="radio2" value="25"></v-radio>
          </v-radio-group>
        </v-col>

         <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, war ich in die Aufgabe vertieft, 
              die ich gerade ausführte.</p>
          <v-radio-group v-model="row">
              <v-radio label="1 " name="radio3" value="31"></v-radio>
              <v-radio label="2" name="radio3" value="32"></v-radio>
              <v-radio label="3" name="radio3" value="33"></v-radio>
              <v-radio label="4" name="radio3" value="34"></v-radio>
              <v-radio label="5" name="radio3" value="35"></v-radio>
          </v-radio-group>
        </v-col>

         <v-col>
          <p>Als ich die Buchrezensionen betrachtet habe, ließ ich mich sehr leicht durch andere Dinge ablenken. </p>
          <v-radio-group v-model="row">
              <v-radio label="1 " name="radio4" value="41"></v-radio>
              <v-radio label="2" name="radio4" value="42"></v-radio>
              <v-radio label="3" name="radio4" value="43"></v-radio>
              <v-radio label="4" name="radio4" value="44"></v-radio>
              <v-radio label="5" name="radio4" value="45"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, 
              wurde meine Aufmerksamkeit nicht leicht gestört. </p>
          <v-radio-group v-model="row">
              <v-radio label="1 " name="radio5" value="51"></v-radio>
              <v-radio label="2" name="radio5" value="52"></v-radio>
              <v-radio label="3" name="radio5" value="53"></v-radio>
              <v-radio label="4" name="radio5" value="54"></v-radio>
              <v-radio label="5" name="radio5" value="55"></v-radio>
          </v-radio-group>
        </v-col>

         <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, wurde ich von den Personen im Raum gestört.  </p>
          <v-radio-group v-model="row">
              <v-radio label="1 " name="radio6" value="61"></v-radio>
              <v-radio label="2" name="radio6" value="62"></v-radio>
              <v-radio label="3" name="radio6" value="63"></v-radio>
              <v-radio label="4" name="radio6" value="64"></v-radio>
              <v-radio label="5" name="radio6" value="65"></v-radio>
          </v-radio-group>
        </v-col>

         <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, konnte ich mich aufgrund von Störungen im
            Raum nicht auf die Aufgabe konzentrieren. </p>
          <v-radio-group v-model="row">
              <v-radio label="1" name="radio7" value="71"></v-radio>
              <v-radio label="2" name="radio7" value="72"></v-radio>
              <v-radio label="3" name="radio7" value="73"></v-radio>
              <v-radio label="4" name="radio7" value="74"></v-radio>
              <v-radio label="5" name="radio7" value="75"></v-radio>
          </v-radio-group>
        </v-col>

  
</v-container>
</template>
<script>
  export default {
    data () {
      return {
        fragen: '',
      }
    },
  }
</script>