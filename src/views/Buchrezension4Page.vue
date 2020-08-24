<template>
<v-container>
          <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
      <v-progress-linear value="64"></v-progress-linear>
        <strong>64%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
    <h1>Buchrezension 4 zum Buch "Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            
            <div class="icon3"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            
            <div class="icon3"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_Page4">
                <div>
            <p>Dieses Buch endet mehr oder weniger mit einem großen Knall, vielen Veränderungen und Verlusten, aber auch Neuanfängen. Die Reihe könnte mit diesem Buch, durchaus auch enden, was ich nicht hoffe, aber es können auch durchaus auch wieder neue Stränge gesponnen werden. Es bleibt also interessant abzuwarten, ob und wenn wie es weitergeht.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
            <div class="grafik1">
        <v-img src="../assets/grafik_5.svg" />
    </div>
        <div class="grafik2">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck1">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_Page4">
                <div>
            <p>Generell fand ich das Buch wieder sehr gut und spannend.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
            <div class="grafik3">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck2">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="3_Page4">
                <div>
            <p>Was mich nur genervt hat, waren die doch ständigen Wiederholungen, wie z.B. mein Erzengel und durch dein Stück Herz bleib ich menschlich. Das kam gefühlt in jedem Kapitel mind. 3x vor und es nervte auf Dauer. Man liest das Buch ja und dann weiß man Bescheid, da muss ich ja nicht bei jedem Satz erinnert werden, so vergesslich bin ich dann doch nicht.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
            <div class="grafik4">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck3">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_Page4">
                <div>
            <p>Und was mich noch störte, ist diese schnelle Genesung und Stärke bei Elena, gerade noch kann sie nicht alleine stehen und dann sieht sie sich im größten Kampf aller Zeiten mittendrin als starke Kämpferin, der Sprung war mir zu groß, das hätte man bestimmt anders lösen können. Sonst aber wie gewohnt ein gutes Buch, eine tolle Geschichte, die halt diesmal einige Schwächen hatte.
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

    <Stopwatch to="/buchrezension5" needTimer="true" />
</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable'
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
    width: 91px;
    height: 0px;
    left: 52px;
    top: -72px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 128px;
    height: 0px;
    left: 30px;
    top: -55px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 198px;
    height: 0px;
    left: -7px;
    top: -28px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -77px;
    top: -90px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 53px;
    top: 16px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 53px;
    top: 77px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 53px;
    top: 89px;
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
    width: 123px;
    height: 0px;
    left: 62px;
    top: -63px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 103px;
    height: 0px;
    left: 68px;
    top: -39px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 153px;
    height: 0px;
    left: 41px;
    top: -28px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 215px;
    height: 0px;
    left: 9px;
    top: -65px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 78px;
    top: 16px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 78px;
    top: 53px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 78px;
    top: 53px;
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
    width: 142px;
    height: 0px;
    left: 93px;
    top: -52px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 80px;
    height: 0px;
    left: 120px;
    top: -25px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 130px;
    height: 0px;
    left: 94px;
    top: -28px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 173px;
    height: 0px;
    left: 71px;
    top: -53px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 16px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 41px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 41px;
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
    width: 142px;
    height: 0px;
    left: 93px;
    top: -52px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 80px;
    height: 0px;
    left: 120px;
    top: -25px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 130px;
    height: 0px;
    left: 94px;
    top: -28px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 173px;
    height: 0px;
    left: 71px;
    top: -53px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 16px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 41px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 118px;
    top: 41px;
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
    top: -39px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 80px;
    height: 0px;
    left: 170px;
    top: -11px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 101px;
    height: 0px;
    left: 159px;
    top: -27px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 126px;
    height: 0px;
    left: 146px;
    top: -40px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 16px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 28px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 28px;
}
}
</style>
