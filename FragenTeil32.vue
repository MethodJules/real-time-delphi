<template>
<v-container>
    
        <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, habe ich mir Mühe gegeben, 
              die Aufgabe zu bearbeiten. </p>
          <v-radio-group v-model="row">
              <v-radio label="1" name='radio1' value="81"></v-radio>
              <v-radio label="2" name="radio1" value="82"></v-radio>
              <v-radio label="3" name="radio1" value="83"></v-radio>
              <v-radio label="4" name="radio1" value="84"></v-radio>
              <v-radio label="5" name="radio1" value="85"></v-radio>
          </v-radio-group>
        </v-col>
          <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, war ich motiviert, die Aufgabe zu bearbeiten. </p>
          <v-radio-group v-model="row">
              <v-radio label="1" name="radio2" value="91"></v-radio>
              <v-radio label="2" name="radio2" value="92"></v-radio>
              <v-radio label="3" name="radio2" value="93"></v-radio>
              <v-radio label="4" name="radio2" value="94"></v-radio>
              <v-radio label="5" name="radio2" value="95"></v-radio>
          </v-radio-group>
        </v-col>

         <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, war ich bereit, mich mit der Aufgabe zu
            befassen. </p>
          <v-radio-group v-model="row">
              <v-radio label="1 " name="radio3" value="101"></v-radio>
              <v-radio label="2" name="radio3" value="102"></v-radio>
              <v-radio label="3" name="radio3" value="103"></v-radio>
              <v-radio label="4" name="radio3" value="104"></v-radio>
              <v-radio label="5" name="radio3" value="105"></v-radio>
          </v-radio-group>
        </v-col>

         <v-col>
          <p>AWenn ich zukünftig auf Online-Verkaufsplattformen Bücher kaufen und mich vorab informieren
            möchte, würde ich eine Plattform mit der hier gezeigten Darstellungsart von Rezensionen nutzen. </p>
          <v-radio-group v-model="row">
              <v-radio label="1 " name="radio4" value="111"></v-radio>
              <v-radio label="2" name="radio4" value="112"></v-radio>
              <v-radio label="3" name="radio4" value="113"></v-radio>
              <v-radio label="4" name="radio4" value="114"></v-radio>
              <v-radio label="5" name="radio4" value="115"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col>
          <p>Wenn ich zukünftig auf Online-Verkaufsplattformen Bücher kaufen und mich vorab informieren
            möchte, wäre die Nutzung einer Plattform mit der hier gezeigten Darstellungsart von Rezensionen
            für mich ansprechend. </p>
          <v-radio-group v-model="row">
              <v-radio label="1 " name="radio5" value="121"></v-radio>
              <v-radio label="2" name="radio5" value="122"></v-radio>
              <v-radio label="3" name="radio5" value="123"></v-radio>
              <v-radio label="4" name="radio5" value="124"></v-radio>
              <v-radio label="5" name="radio5" value="125"></v-radio>
          </v-radio-group>
        </v-col>

         <v-col>
          <p>Die Darstellungsweise der Rezension hat dazu beigetragen, dass ich die für mich relevanten
            Informationen ohne große Mühe auffinden konnte. </p>
          <v-radio-group v-model="row">
              <v-radio label="1 " name="radio6" value="131"></v-radio>
              <v-radio label="2" name="radio6" value="132"></v-radio>
              <v-radio label="3" name="radio6" value="133"></v-radio>
              <v-radio label="4" name="radio6" value="134"></v-radio>
              <v-radio label="5" name="radio6" value="135"></v-radio>
          </v-radio-group>
        </v-col>

         <v-col>
          <p>Die Darstellungsweise der Rezension hat dazu beigetragen, dass es mir leicht gefallen ist, 
              die für mich relevanten Informationen in der Rezension zu finden.</p>
          <v-radio-group v-model="row">
              <v-radio label="1" name="radio7" value="141"></v-radio>
              <v-radio label="2" name="radio7" value="142"></v-radio>
              <v-radio label="3" name="radio7" value="143"></v-radio>
              <v-radio label="4" name="radio7" value="144"></v-radio>
              <v-radio label="5" name="radio7" value="145"></v-radio>
          </v-radio-group>
        </v-col>

  
</v-container>
</template>
<script>
  export default {
    data () {
      return {
        fragen2: '',
      }
    },
  }
</script>