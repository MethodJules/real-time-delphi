<template>
<v-container>
    
        <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, habe ich mir Mühe gegeben, 
              die Aufgabe zu bearbeiten. </p>
          <Five />
        </v-col>
          <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, war ich motiviert, die Aufgabe zu bearbeiten. </p>
          <Five />
        </v-col>

         <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, war ich bereit, mich mit der Aufgabe zu
            befassen. </p>
         <Five />
        </v-col>

         <v-col>
          <p>AWenn ich zukünftig auf Online-Verkaufsplattformen Bücher kaufen und mich vorab informieren
            möchte, würde ich eine Plattform mit der hier gezeigten Darstellungsart von Rezensionen nutzen. </p>
        <Five />
        </v-col>

        <v-col>
          <p>Wenn ich zukünftig auf Online-Verkaufsplattformen Bücher kaufen und mich vorab informieren
            möchte, wäre die Nutzung einer Plattform mit der hier gezeigten Darstellungsart von Rezensionen
            für mich ansprechend. </p>
          <Five />
        </v-col>

         <v-col>
          <p>Die Darstellungsweise der Rezension hat dazu beigetragen, dass ich die für mich relevanten
            Informationen ohne große Mühe auffinden konnte. </p>
          <Five />
        </v-col>

         <v-col>
          <p>Die Darstellungsweise der Rezension hat dazu beigetragen, dass es mir leicht gefallen ist, 
              die für mich relevanten Informationen in der Rezension zu finden.</p>
        <Five />
        </v-col>

  
</v-container>
</template>
<script>
import Five from "./Five"
  export default {
    data () {
      return {
        fragen2: '',
      }
    },
    components: {
    Five
  }
  }
</script>