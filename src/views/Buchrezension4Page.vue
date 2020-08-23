<template>
<v-container>
          <div>

    <v-progress-linear
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
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Dieses Buch endet mehr oder weniger mit einem großen Knall, vielen Veränderungen und Verlusten, aber auch Neuanfängen. Die Reihe könnte mit diesem Buch, durchaus auch enden, was ich nicht hoffe, aber es können auch durchaus auch wieder neue Stränge gesponnen werden. Es bleibt also interessant abzuwarten, ob und wenn wie es weitergeht.
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
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Generell fand ich das Buch wieder sehr gut und spannend. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik2">
    <v-img src="../assets/grafik_1.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Was mich nur genervt hat, waren die doch ständigen Wiederholungen, wie z.B. mein Erzengel und durch dein Stück Herz bleib ich menschlich. Das kam gefühlt in jedem Kapitel mind. 3x vor und es nervte auf Dauer. Man liest das Buch ja und dann weiß man Bescheid, da muss ich ja nicht bei jedem Satz erinnert werden, so vergesslich bin ich dann doch nicht. 
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
            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
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
            <div class="icon2"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon2"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
        </v-col>
        </v-row>
        </div>

    <v-btn to="/buchrezension5">Weiter</v-btn>
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
    width: 139px;
    height: 0px;
    left: 6px;
    top: -96px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -90px;
    top: -177px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -90px;
    top: -177px;
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
    width: 139px;
    height: 0px;
    left: 6px;
    top: -96px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -90px;
    top: -180px;
}
.grafik3 {
   position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -90px;
    top: -180px;
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
    top: -63px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 189px;
    height: 0px;
    left: 33px;
    top: -93px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 189px;
    height: 0px;
    left: 33px;
    top: -93px;
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
    left: 15px;
    top: -77px;
}
.grafik2 {
  position: relative;
    z-index: 5;
    width: 203px;
    height: 0px;
    left: 27px;
    top: -106px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 203px;
    height: 0px;
    left: 27px;
    top: -106px;
}
}
@media screen and (min-width: 1300px) {
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
    left: 17px;
    top: -31px;
}
.grafik2 {
  position: relative;
    z-index: 5;
    width: 203px;
    height: 0px;
    left: 34px;
    top: -106px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 203px;
    height: 0px;
    left: 34px;
    top: -106px;
}
}
</style>
