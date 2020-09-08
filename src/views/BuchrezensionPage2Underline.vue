<template>
<v-container>
          <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
          <v-progress-linear value="46"></v-progress-linear>
        <strong>46%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
    <h1>Buchrezension 2 zum Buch „Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
    <v-row>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under2">
                <div>
            <p>Showdown
               <br />
            </p>
                <div class="lila">
            {{text}}
                </div>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under2">
                <div class="grau">
            {{text1}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="3_under2">
                <div class="gelb">
                    {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under2">
                <div class="rot">
            {{text3}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="5_under2">
                <div class="grün">
            {{text4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="6_under2">
                <div class="blau">
        {{text5}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row >
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="7_under2">
                <div class="rot">
                    {{text6}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="legend" align="right">
        <v-row  align="center">
            <v-col cols="7">
            <b>Legende:</b>
            <div class="icon2"> <v-img src="../assets/Emotional.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Bezug.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Sprachziel.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Inhalt.png" height="35"/></div>
            </v-col>
        </v-row>  
        </div>
<div class="legend" align="right">
        <v-row  align="center">
            <v-col cols="7">
                <div class="icon2"></div>
            <div class="icon2"></div>
             
            <div class="icon2"> <v-img src="../assets/Hintergrund2.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Hintergrund.png" height="35" width="125"/></div>
            
            </v-col>
        </v-row>  
        </div>
       
    <Stopwatch to="/buchrezensionPage3Underline" needTimer="true" />
</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable';
import Stopwatch from '@/components/Stopwatch'
export default {
    data() {
        return {
            text: 'Die Autorin ist mir bekannt und ich habe schon viele ihrer Bücher gelesen. \
            Darunter die Reihen „Rock Kiss“ und „Age of Trinity“.',
            text1:'Das Cover gefällt mir hier sehr gut. Also legte ich los zu lesen…. ',
            text2:'Erzengel Raphael und seine Gildejägerin Elena hier nun schon zum 12ten mal \
            in einer tollen Story vereint. Gemeinsame Kämpfe – alles verändert sich. ',
            text3:'Ich mag alles an diesem Buch – die spürbare Romantik, \
            die Liebe zwischen den beiden und die Fantasy der Autorin begeistert mich immer wieder. ',
            text4:'Habe nicht alle Bände der Reihe gelesen und somit hatte ich am \
            Beginn kurz Schwierigkeiten wieder in die Story rein zu finden \
            was aber nach ein paar Seiten schon der Fall war. ',
            text5:'Nalini Singh hat mich auch hier wieder überzeugt und ihr Schreibstil ist flüssig. \
            Ab und an war es mir aber doch etwas zu anstrengend zu lesen und ich hab das Buch \
            kurz unterbrochen. Es ist nichts für mal zwischendurch. \
            Man muss dabei bleiben um in die Story wirklich abtauchen zu können.  ',
            text6:'Fazit: Spannender 12. Teil der Reihe. ',
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
    height: 10px;
    justify-content: center;
    margin: 5px;
    float: right;
}
.grau {
text-decoration: underline;
  -webkit-text-decoration-color: grey;
  text-decoration-color: grey

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
