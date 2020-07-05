<template>
<v-container>
    
        <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, konnte ich die meisten Ablenkungen ausblenden.</p>
        <Five />
         
        </v-col>
          <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, war ich in das, was ich tat vertieft. </p>
         <Five />
        </v-col>

         <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, war ich in die Aufgabe vertieft, 
              die ich gerade ausführte.</p>
         <Five />
        </v-col>

         <v-col>
          <p>Als ich die Buchrezensionen betrachtet habe, ließ ich mich sehr leicht durch andere Dinge ablenken. </p>
          <Five />
        </v-col>

        <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, 
              wurde meine Aufmerksamkeit nicht leicht gestört. </p>
         <Five />
        </v-col>

         <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, wurde ich von den Personen im Raum gestört.  </p>
          <Five />
        </v-col>

         <v-col>
          <p>Während ich die Buchrezensionen betrachtet habe, konnte ich mich aufgrund von Störungen im
            Raum nicht auf die Aufgabe konzentrieren. </p>
          <Five />
        </v-col>

  
</v-container>
</template>
<script>
import Five from "./Five"
  export default {
    data () {
      return {
        fragen: null,
      }
    },
    components: {
    Five
  }
  }
</script>