<template>
<!-- Für genaue Dokumentation siehe BuchrezensionPage.vue -->
<v-container>

          <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
        <v-progress-linear value="37"></v-progress-linear>
        <strong>37%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>

    <h1>Buchrezension 1 zum Buch „Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
        <div>
    <v-row>


        <v-col cols="8">
            

                    <div>
            <p>Der Abschluss der Kaskade?
               <br />
               
            </p>
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under1">
            <div class="gelb">
            {{text}}
            <br/>
            {{text0_1}}
                </div>
                </Highlightable>
                    </div>
            
        </v-col>

    </v-row>
    </div>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under1">
                <div class="grün">
                    {{text1}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="3_under1">
                <div class="gelb">
                    {{text2_1}}
                </div>

                
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under1">
                <div class="gelb">
                    {{text2}}
                </div>
                
            </Highlightable>
        </v-col>
    </v-row>
    <v-row >
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="5_under1">
                <div class="blau">
                    {{text3}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
               
            <Highlightable @share="onShare" @highlight="onHighlight" id="6_under1">
                 {{text4_1}}
                <div class="rot">
                    {{text4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
               
            <Highlightable @share="onShare" @highlight="onHighlight" id="7_under1">
               
                <div class="rot">
                    {{text4_2}}
                    <br/>
                    {{text4_3}}
                    <br/>
                    {{text4_4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    
        <div class="legend" align="right">
        <v-row  align="center">
            <v-col cols="8">
            <b>Legende:</b>
            <div class="icon2"> <v-img src="../assets/Inhalt.png" height="35"/></div>
            <div class="icon2"> <v-img src="../assets/Sprachziel.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Bezug.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Emotional.png" height="35" width="125"/></div>
            
            </v-col>
        </v-row>  
        </div>
           
    <Stopwatch to="/buchrezensionPage2Underline" needTimer="true" />


</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable';
import Stopwatch from '@/components/Stopwatch'
export default {
    beforeRouteLeave(to, from, next) {
    if (to.path ==='/buchrezensionPage2Underline' ){
      return next()
    }
      else if (confirm('Um das Experiment nicht zu verfälschen, bleiben Sie bitte auf der Seite.')) {
        return next(false)
      }
      else{
        return next(false)
      }
    },
    data() {

        return {
            text:' Der Welt steht mit der Kaskade ein Krieg bevor. \
            Aber wie geht es jetzt bei Elena und Raphael weiter? \
            Beim letzten Kampf wurde Elena tödlich verletzt und wie es scheint, \
            tritt Kassandras Vorhersage ein. Aber wer Elena kennt, \
            der weiß, dass nichts so kommt wie vorhergesagt. \
            Denn Elena glaubt an die Wandelbarkeit des Schicksals.',
            text0_1:'Die Charaktere sind glaube ich bereits allen bekannt.',
            text1: 'Wer die Reihe jetzt anfangen möchte, dem rate ich von Anfang an zu lesen, \
            denn die Handlungen bauen auf einander auf und führen zum unweigerlich folgenden Knall. \
            Denn der Krieg mit Lijuan lässt sich nicht mehr vermeiden. ',
            text2_1:'Die Liebe der Beiden ist noch stärker geworden und auch wenn Elena ihre Flügel vermisst, \
            stürzt sie sich doch von einem Abenteuer in das nächste. \
            Aber erstmal muss sie stärker werden, denn der Prozess zur Unsterblichkeit ist abgeschlossen.',
            text2:'Aber die Entwicklung rund um Lijuan ist noch nicht fertig erzählt und auch erwachen immer mehr Uralte. \
            Darunter auch jemand, den Illium gut kennt und eigentlich nicht sehen will. \
            Aber die Kaskade hat noch für viele eine Überraschung auf Lager. \
            Hier kommt eine rasante Entwicklung nach der anderen und man kann sich vorstellen, \
            dass die Engel, Vampire und Menschen nicht zum Luft holen kommt. ',
            text3:'Der Schreibstil ist wie immer spannend, emotional, bildgewaltig und mitreißend. \
            Nalini Singh schafft es den Leser mit Handlungen zu überraschen, \
            die man sich so nicht vorgestellt hat. Der Erzählstil ist in der dritten Person. \
            Wird aber immer mal wieder aus einer anderen Sicht erzählt.  ',
            text4_1:'Meine Meinung:',
            text4:'Wow, das war ein Abschluss! \
            Ich habe mir im Vorfeld schon das englische Buch zu Gemüte geführt, \
            da ich es nicht erwarten konnte wie es mit den Beiden weitergeht und was soll ich sagen? \
            Meine Vermutungen haben sich zum Teil bestätigt. Zum anderen waren sie aber auch traurig. \
            Die Handlung hat die Autorin aber schlüssig aufgebaut und erzählt. \
            Es war ein wahres Funkenmeer an Emotionen, man fieberte mit den Engeln mit und was passiert \
            denn jetzt auch mit dem allseits beliebten Kolibri?',
            text4_2:'Die Charaktere sind mir in der ganzen Zeit ans Herz gewachsen und als ich entdeckte, \
            dass es einen weiteren Band mit anderen Protagonisten (bereits bekannte) gibt, \
            war ich aus dem Häuschen, denn hier freue ich mich schon darauf.',
            text4_3:'Aber genauso hoffe ich auch auf eine Geschichte mit und rund Illium, \
            denn auch er hat einen Abschluss verdient. Es gibt auch andere Charaktere, \
            deren Handlungsstränge noch offen scheinen. Hier lässt sich vermuten, \
            dass die Autorin noch weitere Pläne für die weitere Entwicklung hat.',
            text4_4:'Ich bin eine begeisterte Leserin dieser Serie seit Stunde 1 und hoffe, \
            dass uns Nalini Singh mit weiteren Geschichten rund um ihre Gilde der Jäger begeistert! \
            Vielen Dank für die wunderbare Unterhaltung!',
            text5:'',
            highlight: []
        }
    },
    components: {
        Highlightable,
        Stopwatch
    },
    methods: {
        onHighlight(text) {
            this.highlight.push(text);
        },
        onShare(text) {
            console.log(text);
        },
        test() {
            if(this.highlight.length == 0) { //check if something is already highlighted
                return this.text;
            } else {
                var test = this.text;
                for (let high of this.highlight) {
                    alert(high.start);
                    var test1 = test.slice(0, high.start);
                    var test2 = test.slice(high.start, high.end)
                    var test3 = test.slice(high.end);

                    test2 = test2.replace(test2, '<span class="highlightText">' + test2 + '</span>')
                    test = test1 + test2 + test3;
                }
            }
            return test;
        }
    }
}
</script>
<style scoped>
.icon2 {
    width: 125px;
    height: 100px;
    justify-content: center;
    margin: 5px;
    float: right;
}
.rot {
    text-decoration: underline;
  -webkit-text-decoration-color: red;
  text-decoration-color: red

}
.grün {
    text-decoration: underline;
  -webkit-text-decoration-color: green;
  text-decoration-color: green

}
.blau {
    text-decoration: underline;
  -webkit-text-decoration-color: blue;
  text-decoration-color: blue

}
.gelb {
    text-decoration: underline;
  -webkit-text-decoration-color: yellow;
  text-decoration-color: yellow

}
.lila {
    text-decoration: underline;
  -webkit-text-decoration-color: purple;
  text-decoration-color: purple

}
.icon {
    width: 50px;
    height: 50px;
    background-color: burlywood;
    justify-content: center;
    margin: 5px;
    float: left;
}

.rezension {
    border: 1px solid black;
    margin: 5px 0;
    background-color: lightgrey;
}



</style>
