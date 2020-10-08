<template>
<v-container>
          <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
      <v-progress-linear value="73"></v-progress-linear>
        <strong>73%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
    <h1>Buchrezension 5 zum Buch „Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
    <v-row class="rezension" align="center">
        <v-col cols="4">
          
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
           
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_Page5">
                <div>
            <p>Eigentlich schreibe ich bei Serien keine Rezension mehr, aber hier muss ich einfach. Die Geschichte wird immer spannender und bildgewaltiger. Die Handlung ist der Hammer!!! Ich war glücklich, um kurz darauf zu Tode betrügt zu sein, wie Elena - aus dem gleichen Grund.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <div class="grafik1">
        <v-img src="../assets/grafik_6.svg" />
    </div>
            <div class="grafik2">
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
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_Page5">
                <div>
            <p>Daran erkennt man, wie gut der Schreibstil ist, wenn man in die Geschichte eintauchen kann, als ob man persönlich dabei ist. Ich hoffe auf eine schnellere Veröffentlichung des nächsten Buches, wie bisher.
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
        </v-col>
        </v-row>
        </div>

    <Stopwatch to="/fragenpage" needTimer="true" />
</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable'
import Stopwatch from '@/components/Stopwatch'
export default {
    beforeRouteLeave(to, from, next) {
    if (to.path ==='/fragenpage' ){
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
    width: 91px;
    height: 0px;
    left: 51px;
    top: 54px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 212px;
    height: 0px;
    left: -16px;
    top: -77px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 52px;
    top: 37px;
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
    width: 124px;
    height: 0px;
    left: 62px;
    top: 21px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 103px;
    height: 0px;
    left: 68px;
    top: -53px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 78px;
    top: 4px;
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
    width: 139px;
    height: 0px;
    left: 93px;
    top: 14px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 80px;
    height: 0px;
    left: 120px;
    top: -40px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: -2px;
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
    width: 139px;
    height: 0px;
    left: 93px;
    top: 14px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 80px;
    height: 0px;
    left: 120px;
    top: -40px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: -2px;
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
    width: 139px;
    height: 0px;
    left: 143px;
    top: 14px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 80px;
    height: 0px;
    left: 170px;
    top: -29px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: -2px;
}
}
</style>