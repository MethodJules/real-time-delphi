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
    <h1>Buchrezension 2 zum Buch "Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_hintergrund.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Showdown
               <br />
               Die Autorin ist mir bekannt und ich habe schon viele ihrer Bücher gelesen. Darunter die Reihen „Rock Kiss“ und „Age of Trinity“.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik1">
    <v-img src="../assets/grafik_1.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/>
            <div class="icon"/>
            <div class="icon"> <v-img src="../assets/rez_erscheinung.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Das Cover gefällt mir hier sehr gut. Also legte ich los zu lesen…. 
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
            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Erzengel Raphael und seine Gildejägerin Elena hier nun schon zum 12ten mal in einer tollen Story vereint. Gemeinsame Kämpfe – alles verändert sich. 
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
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon"/>
            <div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Ich mag alles an diesem Buch – die spürbare Romantik, die Liebe zwischen den beiden und die Fantasy der Autorin begeistert mich immer wieder. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik4">
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
            <p>Habe nicht alle Bände der Reihe gelesen und somit hatte ich am Beginn kurz Schwierigkeiten wieder in die Story rein zu finden was aber nach ein paar Seiten schon der Fall war. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik5">
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
            <p>Nalini Singh hat mich auch hier wieder überzeugt und ihr Schreibstil ist flüssig. Ab und an war es mir aber doch etwas zu anstrengend zu lesen und ich hab das Buch kurz unterbrochen. Es ist nichts für mal zwischendurch. Man muss dabei bleiben um in die Story wirklich abtauchen zu können.  
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="grafik6">
    <v-img src="../assets/grafik_1.svg" />
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
            <p>Fazit: Spannender 12. Teil der Reihe. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <br>
    <b>Legende:</b>
            <v-col cols="5">
            <div class="icon"> <v-img src="../assets/rez_hintergrund.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_erscheinung.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/></div>
            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>
        </v-col>
        <br>
        <br>
        <br>
        <br>
        <br>

    <v-btn to="/buchrezension3">Weiter</v-btn>
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
@media screen and (min-width: 768px) {
.grafik1 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -105px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -105px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -105px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -90px;
}
.grafik5 {
     position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -90px;
}
.grafik6 {
     position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -90px;
}
}
@media screen and (min-width: 992px) {
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
@media screen and (min-width: 1200px) {
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
    top: -85px;
}
.grafik5 {
   position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -85px
}
.grafik6 {
        position: relative;
    z-index: 5;
    width: 330px;
    height: 0px;
    left: -110px;
    top: -85px;
}
}
@media screen and (min-width: 1300px) {
.grafik1 {
    position: relative;
    z-index: 5;
    width: 250px;
    height: 0px;
    left: 155px;
    top: -120px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 250px;
    height: 0px;
    left: 155px;
    top: -120px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 250px;
    height: 0px;
    left: 155px;
    top: -120px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 250px;
    height: 0px;
    left: 155px;
    top: -125px;
}
.grafik5 {
    position: relative;
    z-index: 5;
    width: 250px;
    height: 0px;
    left: 155px;
    top: -125px;
}
.grafik6 {
    position: relative;
    z-index: 5;
    width: 250px;
    height: 0px;
    left: 155px;
    top: -125px;
}
}
</style>
