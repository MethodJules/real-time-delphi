<template>
<v-container>
          <div>

    <v-progress-linear
      v-model="skill"
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
    <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_hintergrund.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_Page2">
                <div>
            <p>Showdown</p>
               <br />
             {{text}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik1">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck1">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_erscheinung.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_Page2">
                <div>
            {{text1}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik2">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck2">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="3_Page2">
                <div>
            {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik3">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck3">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_Page2">
                <div>
            {{text3}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik4">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck4">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="5_Page2">
                <div>
            {{text4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik5">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck5">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
        <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="6_Page2">
                <div>
            {{text5}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik6">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck6">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
        <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="7_Page2">
             <div>
            {{text6}}
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
            <div class="icon2"> <v-img src="../assets/rez_hintergrund.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_erscheinung.png" height="100" width="100"/></div>
        </v-col>
        </v-row>
        </div>

    <Stopwatch to="/buchrezension3" needTimer="true" />
</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable'
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
    left: 40px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 116px;
    height: 0px;
    left: 41px;
    top: -39px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 116px;
    height: 0px;
    left: 41px;
    top: -28px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 126px;
    height: 0px;
    left: 36px;
    top: -40px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 126px;
    height: 0px;
    left: 36px;
    top: -40px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 192px;
    height: 0px;
    left: 1px;
    top: -41px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 171px;
    height: 0px;
    left: 13px;
    top: -76px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 58px;
    top: 21px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 58px;
    top: 28px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 58px;
    top: 28px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 58px;
    top: 28px;
}
.dreieck5 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 58px;
    top: 64px;
}
.dreieck6 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 58px;
    top: 16px;
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
    left: 70px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 86px;
    top: -27px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 85px;
    top: -27px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 85px;
    top: -27px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 85px;
    top: -27px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 126px;
    height: 0px;
    left: 66px;
    top: -28px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 126px;
    height: 0px;
    left: 66px;
    top: -52px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 88px;
    top: 21px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 88px;
    top: 16px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 88px;
    top: 16px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 88px;
    top: 16px;
}
.dreieck5 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 88px;
    top: 40px;
}
.dreieck6 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 88px;
    top: 16px;
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
.grafik1 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 116px;
    top: -27px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 115px;
    top: -27px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 115px;
    top: -27px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 115px;
    top: -27px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 103px;
    height: 0px;
    left: 108px;
    top: -27px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 103px;
    height: 0px;
    left: 109px;
    top: -40px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 21px;
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
    top: 16px;
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
    top: 29px;
}
.dreieck6 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 16px;
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
.grafik1 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 116px;
    top: -27px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 115px;
    top: -27px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 115px;
    top: -27px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 115px;
    top: -27px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 103px;
    height: 0px;
    left: 108px;
    top: -27px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 103px;
    height: 0px;
    left: 109px;
    top: -40px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 21px;
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
    top: 16px;
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
    top: 29px;
}
.dreieck6 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 16px;
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
.grafik1 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 166px;
    top: -27px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 165px;
    top: -27px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 165px;
    top: -27px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 165px;
    top: -27px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 165px;
    top: -27px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 90px;
    height: 0px;
    left: 165px;
    top: -27px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 21px;
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
    top: 16px;
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
    top: 16px;
}
.dreieck6 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 16px;
}
}
</style>

