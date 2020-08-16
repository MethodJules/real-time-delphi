<template>
<v-container>
          <div>

    <v-progress-linear
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
    <h1>Buchrezension 5 zum Buch "Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
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
            <p>Eigentlich schreibe ich bei Serien keine Rezension mehr, aber hier muss ich einfach. Die Geschichte wird immer spannender und bildgewaltiger. Die Handlung ist der Hammer!!! Ich war glücklich, um kurz darauf zu Tode betrügt zu sein, wie Elena - aus dem gleichen Grund. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik1">
    <v-img src="../assets/grafik_3.svg" />
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
            <p>Daran erkennt man, wie gut der Schreibstil ist, wenn man in die Geschichte eintauchen kann, als ob man persönlich dabei ist. Ich hoffe auf eine schnellere Veröffentlichung des nächsten Buches, wie bisher.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <br>
    <b>Legende:</b>
            <v-col cols="4">
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
        </v-col>
        <br>
        <br>
        <br>
        <br>
        <br>

    <v-btn to="/fragenpage">Weiter</v-btn>
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
.grafik1 {
    position: absolute;
    width: 290px;
    height: 110px;
    left: 210px;
    top: 335px;
}


</style>
