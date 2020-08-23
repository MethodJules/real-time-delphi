<template>
<v-container>
          <div>

    <v-progress-linear
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
        <v-col cols="4">
            
            
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon"/>
           <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Wow Wow Wow
               <br />
               ... wie sehr ich diese Reihe liebe und auch bei Band 12 wurde ich nicht enttäuscht.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik5">
    <v-img src="../assets/grafik_4.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Nalini Singh schreibt so kompakt und fesselnd, dass ich das Buch kaum aus der Hand legen wollte. Ihr Schreibstil ist zwar flüssig, aber insgesamt ist die Story durchweg keine leichte Kost. Man kann diese Serie und vor allem diesen Band nicht einfach mal zwischendurch lesen, denn dafür ist der komplette rote Faden von Teil 1 an zu kompakt und zu vielfältig.
               Die Autorin schreibt auch so detailgetreu, dass ich mir alle Geschehnisse richtig gut vorstellen konnte.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik1">
    <v-img src="../assets/grafik_2.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            
            <div class="icon"/>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_verstand.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Zuerst denkt man, dass alles viel zu viel ist, zu viel was am Anfang auf einen einprasselt, aber zum Ende hin fügt sich wie immer alles zusammen und es wird verständlich. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik4">
    <v-img src="../assets/grafik_3.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_verstand.png" height="100" width="100"/></div>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Ein paar kleine Episoden waren mir zu lang, aber Seiten weiter blättern war überhaupt nicht möglich, da einem sonst u.a. die spritzigen wortgewandten Dialoge entgangen wären. 
               Leider ist nicht immer gleich zu erkennen aus welcher Sicht wir alle Geschehnisse erleben. Der Wechsel von Elena zu Raphael geschieht teilweise im nächsten Satz, nicht mal Kapitel- oder Absatzweise.
               Aber das ist meiner Meinung nach wirklich nur ein i-Tüpfelchen, was die Story leichter lesen lassen würde. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik2">
    <v-img src="../assets/grafik_2.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
           <div class="icon"/>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Dieser Teil war wieder einmal atemberaubend, spannend, wortgewandt, vielfältig, fesselnd, überraschend und auch gruselig. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik3">
    <v-img src="../assets/grafik_1.svg" />
    </div>
        <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Ich denke wirklich, dass diejenigen, die bisher die Reihe schon begonnen haben, unbedingt weiterlesen müssen und diejenigen, an denen diese Serie vorbei gegangen ist, sollten unbedingt mit dem Lesen von „Engelskuss“ anfangen. 
               Für mich eine Reihe, die von den so unterschiedlichen, aber auch absolut stimmigen Charakteren lebt.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>

        <br>
        <div class="legend" align="right">
        <v-row  align="center">
            <v-col cols="12">
            <b>Legende:</b>
            <div class="icon2"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_verstand.png" height="100" width="100"/></div>
        </v-col>
        </v-row>
        </div>

    <v-btn to="/buchrezension4">Weiter</v-btn>
</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable';
export default {
    data() {
        return {
            text: 'Der Tiger jagt das Zebra.',
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
.icon {
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
}
.icon2 {
    width: 100px;
    height: 100px;
    justify-content: center;
    margin: 5px;
    float: right;
}
.rezension {
    margin: 5px 0;
    background-color: rgb(247, 247, 247);
}
@media screen and (max-width: 576px) {

.grafik1 {
        position: relative;
    z-index: 5;
    width: 135px;
    height: 0px;
    left: 0px;
    top: -13px;
}
.grafik2 {
  position: relative;
    z-index: 5;
    width: 117px;
    height: 0px;
    left: 11px;
    top: -70px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 121px;
    height: 0px;
    left: 0px;
    top: -27px;
}
.grafik4 {
      position: relative;
    z-index: 5;
    width: 115px;
    height: 0px;
    left: 9px;
    top: -120px;
}
.grafik5 {
        position: relative;
    z-index: 5;
    width: 135px;
    height: 0px;
    left: 0px;
    top: -13px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -120px;
}
}
@media screen and (min-width: 576px) {
    .test{ 
    width: 1px;
    height: 1px;
    background-color: lightgrey;
    justify-content: center;
    margin: 10px;
    float: left;

    }
.grafik1 {
    position: relative;
    z-index: 5;
    width: 135px;
    height: 0px;
    left: 12px;
    top: -13px;
}
.grafik2 {
  position: relative;
    z-index: 5;
    width: 117px;
    height: 0px;
    left: 21px;
    top: -45px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 121px;
    height: 0px;
    left: 28px;
    top: -27px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 115px;
    height: 0px;
    left: 35px;
    top: -120px;
}
.grafik5 {
        position: relative;
    z-index: 5;
    width: 135px;
    height: 0px;
    left: 0px;
    top: -13px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -120px;
}
}
@media screen and (min-width: 768px) {
    .test {
    width: 50px;
    height: 50px;
    background-color: lightgrey;
    justify-content: center;
    margin: 10px;
    float: left;
    }
.grafik1 {
    position: relative;
    z-index: 5;
    width: 200px;
    height: 0px;
    left: 30px;
    top: -33px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 189px;
    height: 0px;
    left: 33px;
    top: -23px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 151px;
    height: 0px;
    left: 60px;
    top: -44px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 189px;
    height: 0px;
    left: 33px;
    top: -68px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 189px;
    height: 0px;
    left: 33px;
    top: -23px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 250px;
    height: 0px;
    left: 155px;
    top: 125px;
}
}
@media screen and (min-width: 992px) {
    .test {
    width: 50px;
    height: 50px;
    background-color: lightgrey;
    justify-content: center;
    margin: 10px;
    float: left;
    }
.grafik1 {
    position: relative;
    z-index: 5;
    width: 215px;
    height: 0px;
    left: 25px;
    top: -55px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 220px;
    height: 0px;
    left: 20px;
    top: -91px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 165px;
    height: 0px;
    left: 52px;
    top: -52px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 215px;
    height: 0px;
    left: 21px;
    top: -70px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 215px;
    height: 0px;
    left: 25px;
    top: -23px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 250px;
    height: 0px;
    left: 155px;
    top: 125px;
}
}
@media screen and (min-width: 1200px) {
    .test {
    width: 50px;
    height: 50px;
    background-color: lightgrey;
    justify-content: center;
    margin: 10px;
    float: left;
    }
.grafik1 {
    position: relative;
    z-index: 5;
    width: 215px;
    height: 0px;
    left: 20px;
    top: -46px;
}
.grafik2 {
  position: relative;
    z-index: 5;
    width: 203px;
    height: 0px;
    left: 35px;
    top: -43px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 129px;
    height: 0px;
    left: 69px;
    top: -31px;
}
.grafik4 {
   position: relative;
    z-index: 5;
    width: 222px;
    height: 0px;
    left: 24px;
    top: -94px;
}
.grafik5 {
   position: relative;
    z-index: 5;
    width: 204px;
    height: 0px;
    left: 32px;
    top: -51px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 215px;
    height: 0px;
    left: 155px;
    top: 125px;
}
}
</style>
