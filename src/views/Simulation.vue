<template>
    <v-container>
  <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
          
      <v-progress-linear value="23"></v-progress-linear>
        <strong>23%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
        <h1>Teil 2: Simulation Einkauf auf einer Online-Verkaufsplattform</h1>
        <p>Bitte versetzen Sie sich in die folgende Situation:</p>

        <v-row class="rezension" align="center">
        <v-col cols="8">
            
        <div>
        Sie möchten ein bestimmtes Buch online erwerben und besuchen dazu eine Online-Verkaufsplattform. Sie wollen sich vor dem Kauf über das Buch informieren und prüfen, ob
        es Ihnen wirklich gefallen könnte. Hierfür lesen Sie einige Buchrezensionen von Kunden, die
das Buch bereits gelesen haben.<br /><br />
Sie interessiert hauptsächlich, wie andere Kunden den <strong>Sprachstil</strong> und die
<strong>Erzählperspektive im Buch </strong> Der Sprachstil ist die Art und Weise, etwas mit
Worten oder in geschriebener Form zu äußern. Unter Erzählperspektive versteht man die
Sicht, aus der ein Buch erzählt wird.<br /><br />
Daher suchen Sie gezielt nach diesen Informationen in den Rezensionen, um schnell und
gezielt eine Kaufentscheidung treffen zu können. Sie haben <strong> Zeit für das Lesen der
Rezensionen</strong> und wollen <strong>schnellstmöglich</strong> diese <strong>Informationen finden</strong>.<br /><br />
Im Folgenden sehen Sie die Produktbeschreibung eines Buches und eine Auswahl an
Buchrezensionen:<br /><br />
1. Lesen Sie zunächst die Produktbeschreibung zum Buch aufmerksam durch.<br /><br />
2. Markieren Sie schnellstmöglich in den Buchrezensionen die relevanten Textstellen,
also die Textstellen, in denen der <strong>Sprachstil und/oder die Erzählperspektive</strong>
angesprochen werden, <strong>markieren</strong> Sie die <strong>Textstellen</strong> mit der Maus und wählen Sie <strong>„Highlight"</strong> aus.<br/>(Bei falscher Markierung, markieren Sie die Textstelle und wählen Sie <strong>„Highlight"</strong> nochmals aus.) 
                </div>
        </v-col>
    </v-row>
        
 
        
        
         <Stopwatch to="/buch" needTimer="true" />
          
        
        

    </v-container>
</template>

<script>

import APIService from '@/services/api.service'
import Stopwatch from '@/components/Stopwatch'

export default {
  beforeRouteLeave(to, from, next) {
    if (to.path ==='/buch' ){
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
    data() {
        
        return {
            buch_gelesen: 0,
            node: APIService.get(3)
        }
    },
    props: {
     buch_cover: String
    }
}
</script>
