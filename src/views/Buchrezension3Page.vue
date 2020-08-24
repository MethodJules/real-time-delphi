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
        <v-col cols="4">
            
            <div class="icon3"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            
            <div class="icon3"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_Page3">
                <div>
            <p>Wow Wow Wow
               <br />
               ... wie sehr ich diese Reihe liebe und auch bei Band 12 wurde ich nicht enttäuscht.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik1">
        <v-img src="../assets/grafik_5.svg" />
    </div>
    <div class="grafik2">
        <v-img src="../assets/grafik_6.svg" />
    </div>
    <div class="grafik3">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck1">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            
            <div class="icon3"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
            
            <div class="icon3"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
           
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_Page3">
                <div>
            <p>Nalini Singh schreibt so kompakt und fesselnd, dass ich das Buch kaum aus der Hand legen wollte. Ihr Schreibstil ist zwar flüssig, aber insgesamt ist die Story durchweg keine leichte Kost. Man kann diese Serie und vor allem diesen Band nicht einfach mal zwischendurch lesen, denn dafür ist der komplette rote Faden von Teil 1 an zu kompakt und zu vielfältig.
               Die Autorin schreibt auch so detailgetreu, dass ich mir alle Geschehnisse richtig gut vorstellen konnte.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik4">
        <v-img src="../assets/grafik_5.svg" />
    </div>
        <div class="grafik5">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck2">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            
            <div class="icon"> <v-img src="../assets/rez_verstand.png" height="100" width="100"/></div>
           
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight"  id="3_Page3">
                <div>
            <p>Zuerst denkt man, dass alles viel zu viel ist, zu viel was am Anfang auf einen einprasselt, aber zum Ende hin fügt sich wie immer alles zusammen und es wird verständlich.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik6">
        <v-img src="../assets/grafik_6.svg" />
    </div>
            <div class="grafik7">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck3">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            
            <div class="icon3"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
            
            <div class="icon3"> <v-img src="../assets/rez_verstand.png" height="100" width="100"/></div>
            
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_Page3">
                <div>
            <p>Ein paar kleine Episoden waren mir zu lang, aber Seiten weiter blättern war überhaupt nicht möglich, da einem sonst u.a. die spritzigen wortgewandten Dialoge entgangen wären.
               Leider ist nicht immer gleich zu erkennen aus welcher Sicht wir alle Geschehnisse erleben. Der Wechsel von Elena zu Raphael geschieht teilweise im nächsten Satz, nicht mal Kapitel- oder Absatzweise.
               Aber das ist meiner Meinung nach wirklich nur ein i-Tüpfelchen, was die Story leichter lesen lassen würde.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik8">
        <v-img src="../assets/grafik_5.svg" />
    </div>
        <div class="grafik9">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck4">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
           
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="5_Page3">
                <div>
            <p>Dieser Teil war wieder einmal atemberaubend, spannend, wortgewandt, vielfältig, fesselnd, überraschend und auch gruselig.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik10">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck5">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
        <v-row class="rezension" align="center">
        <v-col cols="4">
            
            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="6_Page3">
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
            <div class="icon2"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
        </v-col>
        </v-row>
        </div>

    <Stopwatch to="/buchrezension4" needTimer="true" />
</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable';
import Stopwatch from '@/components/Stopwatch'
export default {
    data() {
        return {
            text: 'Der Tiger jagt das Zebra.',
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
    width: 330px;
    height: 0px;
    left: -110px;
    top: -120px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -120px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -120px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -120px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -120px;
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
.icon {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
    top: 0px;
    left: 35px;
}
.icon3 {
    position: relative;
    width: 70px;
    height: 70px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
    top: 0px;
    left: 5px;
    
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 95px;
    height: 0px;
    left: 51px;
    top: -14px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 95px;
    height: 0px;
    left: 51px;
    top: 112px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 170px;
    height: 0px;
    left: 7px;
    top: 4px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 95px;
    height: 0px;
    left: 51px;
    top: -96px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 199px;
    height: 0px;
    left: -8px;
    top: -79px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 95px;
    height: 0px;
    left: 51px;
    top: 125px;
}
.grafik7 {
    position: relative;
    z-index: 5;
    width: 273px;
    height: 0px;
    left: -46px;
    top: -40px;
}
.grafik8 {
    position: relative;
    z-index: 5;
    width: 95px;
    height: 0px;
    left: 51px;
    top: -108px;
}
.grafik9 {
    position: relative;
    z-index: 5;
    width: 195px;
    height: 0px;
    left: -5px;
    top: -90px;
}
.grafik10 {
    position: relative;
    z-index: 5;
    width: 195px;
    height: 0px;
    left: -6px;
    top: -29px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 53px;
    top: 95px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 53px;
    top: 30px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 53px;
    top: 108px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 53px;
    top: 16px;
}
.dreieck5 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 53px;
    top: 77px;
}
}
@media screen and (min-width: 768px) {
.icon {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
    top: 0px;
    left: 60px;
}
.icon3 {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
    top: 0px;
    left: 5px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 127px;
    height: 0px;
    left: 58px;
    top: -28px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 127px;
    height: 0px;
    left: 58px;
    top: 68px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 107px;
    height: 0px;
    left: 66px;
    top: -4px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 127px;
    height: 0px;
    left: 58px;
    top: -87px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 46px;
    top: -62px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 127px;
    height: 0px;
    left: 58px;
    top: 68px;
}
.grafik7 {
    position: relative;
    z-index: 5;
    width: 147px;
    height: 0px;
    left: 44px;
    top: -28px;
}
.grafik8 {
    position: relative;
    z-index: 5;
    width: 127px;
    height: 0px;
    left: 58px;
    top: -87px;
}
.grafik9 {
    position: relative;
    z-index: 5;
    width: 145px;
    height: 0px;
    left: 45px;
    top: -62px;
}
.grafik10 {
    position: relative;
    z-index: 5;
    width: 146px;
    height: 0px;
    left: 45px;
    top: -27px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 78px;
    top: 51px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 78px;
    top: 16px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 78px;
    top: 51px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 78px;
    top: 16px;
}
.dreieck5 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 78px;
    top: 52px;
}
}
@media screen and (min-width: 992px) {
.icon {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
    top: 0px;
    left: 100px;
}
.icon3 {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 15px;
    float: left;
    top: 0px;
    left: 25px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: -36px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: 40px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 74px;
    height: 0px;
    left: 123px;
    top: -9px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: -63px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 95px;
    height: 0px;
    left: 113px;
    top: -35px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: 53px;
}
.grafik7 {
    position: relative;
    z-index: 5;
    width: 118px;
    height: 0px;
    left: 100px;
    top: -28px;
}
.grafik8 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: -75px;
}
.grafik9 {
    position: relative;
    z-index: 5;
    width: 118px;
    height: 0px;
    left: 100px;
    top: -47px;
}
.grafik10 {
    position: relative;
    z-index: 5;
    width: 126px;
    height: 0px;
    left: 96px;
    top: -27px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 23px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 16px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 36px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 16px;
}
.dreieck5 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 40px;
}
}
@media screen and (min-width: 1200px) {
.icon {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
    top: 0px;
    left: 100px;
}
.icon3 {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 15px;
    float: left;
    top: 0px;
    left: 25px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: -36px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: 40px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 74px;
    height: 0px;
    left: 123px;
    top: -9px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: -63px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 95px;
    height: 0px;
    left: 113px;
    top: -35px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: 53px;
}
.grafik7 {
    position: relative;
    z-index: 5;
    width: 118px;
    height: 0px;
    left: 100px;
    top: -28px;
}
.grafik8 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 93px;
    top: -75px;
}
.grafik9 {
    position: relative;
    z-index: 5;
    width: 118px;
    height: 0px;
    left: 100px;
    top: -47px;
}
.grafik10 {
    position: relative;
    z-index: 5;
    width: 126px;
    height: 0px;
    left: 96px;
    top: -27px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 23px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 16px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 36px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 16px;
}
.dreieck5 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 40px;
}
}
@media screen and (min-width: 1300px) {
.icon {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
    top: 0px;
    left: 150px;
}
.icon3 {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 15px;
    float: left;
    top: 0px;
    left: 75px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: -36px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: 29px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 74px;
    height: 0px;
    left: 173px;
    top: -9px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: -51px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 165px;
    top: -25px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: 29px;
}
.grafik7 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 165px;
    top: -25px;
}
.grafik8 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: -51px;
}
.grafik9 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 165px;
    top: -25px;
}
.grafik10 {
    position: relative;
    z-index: 5;
    width: 101px;
    height: 0px;
    left: 159px;
    top: -27px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 13px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 16px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 13px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 16px;
}
.dreieck5 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 28px;
}
}
@media screen and (min-width: 1920px) {
.icon {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
    top: 0px;
    left: 150px;
}
.icon3 {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 15px;
    float: left;
    top: 0px;
    left: 75px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: -36px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: 15px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 35px;
    height: 0px;
    left: 194px;
    top: -9px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: -38px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 75px;
    height: 0px;
    left: 173px;
    top: -12px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: 18px;
}
.grafik7 {
    position: relative;
    z-index: 5;
    width: 75px;
    height: 0px;
    left: 173px;
    top: -27px;
}
.grafik8 {
    position: relative;
    z-index: 5;
    width: 143px;
    height: 0px;
    left: 143px;
    top: -40px;
}
.grafik9 {
    position: relative;
    z-index: 5;
    width: 80px;
    height: 0px;
    left: 170px;
    top: -14px;
}
.grafik10 {
    position: relative;
    z-index: 5;
    width: 101px;
    height: 0px;
    left: 159px;
    top: -27px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: -1px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 16px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 2px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 16px;
}
.dreieck5 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 17px;
}
}
</style>
