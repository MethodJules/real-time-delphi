<template>
<v-container>
          <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
          <v-progress-linear value="55"></v-progress-linear>
        <strong>55%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
    <h1>Buchrezension 3 zum Buch "Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
    <v-row class="rezension" align="center">
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
                <div class="rotgrün">
                    {{text}}
                </div>
                <div class="rotgrün">
                    {{text01}}
                </div>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
                <div class="grünblau">
                    {{text1}}
                </div>
                <div class="grünblau">
                    {{text11}}
                </div>
                <div class="grünblau">
                    {{text12}}
                </div>
                <div class="grünblau">
                    {{text13}}
                </div>
                <div class="grünblau">
                    {{text14}}
                </div>
                </div>
                
            </Highlightable>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div class="rosa">
                    {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
                <div class="rotblau">
                    {{text3}}
                </div>
                <div class="rotblau">
                    {{text31}}
                </div>
                <div class="rotblau">
                    {{text32}}
                </div>
                <div class="rotblau">
                    {{text33}}
                </div>
                <div class="rotblau">
                    {{text34}}
                </div>
                 <div class="rotblau">
                    {{text35}}
                </div>
                 <div class="rotblau">
                    {{text36}}
                </div>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div class="rot">
                    {{text4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row class="rezension" align="center">
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div class="grün">
                    {{text5}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
      <v-row>
       Legende:<div><span class="red">Emotionale Konsequenzen </span></div>
    <div><span class="green">Bezug zu anderen Büchern</span></div>
    <div><span class="blue">Sprachstil und Erzählperspektive</span></div>
    <div><span class="pink lighten-1">Verständlichkeit</span></div>
    </v-row>
    <v-btn to="/buchrezensionPage4Underline">Weiter</v-btn>
</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable';
export default {
    data() {
        return {
            text: 'Wow Wow Wow ...',
            text01:'wie sehr ich diese Reihe liebe und auch bei Band 12 wurde ich nicht enttäuscht.',
            text1: 'Nalini Singh schreibt so kompakt und fesselnd, dass ich das Buch kaum aus der Hand legen wollte.',
            text11:'Ihr Schreibstil ist zwar flüssig, aber insgesamt ist die Story durchweg keine leichte Kost.',
            text12:'Man kann diese Serie und vor allem diesen Band nicht einfach mal zwischendurch lesen,',
            text13:'denn dafür ist der komplette rote Faden von Teil 1 an zu kompakt und zu vielfältig.',
            text14:'Die Autorin schreibt auch so detailgetreu, dass ich mir alle Geschehnisse richtig gut vorstellen konnte.',
            text2: 'Zuerst denkt man, dass alles viel zu viel ist, zu viel was am Anfang auf einen einprasselt, \
            aber zum Ende hin fügt sich wie immer alles zusammen und es wird verständlich.',
            text3: 'Ein paar kleine Episoden waren mir zu lang,',
            text31:'aber Seiten weiter blättern war überhaupt nicht möglich,',
            text32:'da einem sonst u.a. die spritzigen wortgewandten Dialoge entgangen wären.',
            text33:'Leider ist nicht immer gleich zu erkennen aus welcher Sicht wir alle Geschehnisse erleben.',
            text34:'Der Wechsel von Elena zu Raphael geschieht teilweise im nächsten Satz,',
            text35:'nicht mal Kapitel- oder Absatzweise. Aber das ist meiner Meinung nach wirklich nur ein i-Tüpfelchen,',
            text36:'was die Story leichter lesen lassen würde. ',
            text4: 'Dieser Teil war wieder einmal atemberaubend, spannend, \
            wortgewandt, vielfältig, fesselnd, überraschend und auch gruselig. ',
            text5: 'Ich denke wirklich, dass diejenigen, \
            die bisher die Reihe schon begonnen haben, unbedingt weiterlesen müssen und diejenigen, \
            an denen diese Serie vorbei gegangen ist, sollten unbedingt mit dem Lesen von „Engelskuss“ \
            anfangen. Für mich eine Reihe, die von den so unterschiedlichen, \
            aber auch absolut stimmigen Charakteren lebt.',
            highlight: []
        }
    },
    components: {
        Highlightable
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
.rotblau {
    text-decoration: underline;
  -webkit-text-decoration-color: red;
  text-decoration-color: red;
  border-bottom: 0.5px solid blue;
  

}
.grünblau {
    text-decoration: underline;
  -webkit-text-decoration-color: green;
  text-decoration-color: green;
  border-bottom: 0.5px solid blue;
  

}
.rotgrün {
    text-decoration: underline;
  -webkit-text-decoration-color: red;
  text-decoration-color: red;
  border-bottom: 0.5px solid green;
  

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
.rosa {
    text-decoration: underline;
  -webkit-text-decoration-color: rgb(197, 126, 138);
  text-decoration-color: rgb(197, 126, 138)

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