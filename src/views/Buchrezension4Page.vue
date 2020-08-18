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
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon"/>
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
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
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
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
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
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
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
    <b>Legende:</b>
            <v-col cols="4">
            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
        </v-col>
        <br>
        <br>
        <br>
        <br>
        <br>

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
    background-color: lightgrey;
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
