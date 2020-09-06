<template>
<v-container>

          <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
        <v-progress-linear value="37"></v-progress-linear>
        <strong>37%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>

    <h1>Buchrezension 1 zum Buch „Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
        <div>
    <v-row class="rezension" align="center">

        <v-col cols="4">
            <div class="icon"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable class="highlight1" @share="onShare" @highlight="onHighlight" id="1_Page1">
                <div>
            <p>Der Abschluss der Kaskade?
               <br />
            </p>
            {{text}}
            <br/>
            {{text0_1}}
                </div>
            </Highlightable>
        </v-col>

    </v-row>
    </div>
    <div class="grafik1">
        <v-img src="../assets/grafik_strichsenk.svg" />
    </div>
    <div class="dreieck1">
        <v-img src="../assets/grafik_dreieck.svg" />
    </div>
    <v-row class="rezension" align="center">
        <v-col cols="4">

            <div class="icon"> <v-img src="../assets/rez_bezug.png" height="100" width="100"/> </div>

        </v-col>
        <v-col cols="7">
            <Highlightable class="highlight2" @share="onShare" @highlight="onHighlight" id="2_Page1">
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
            <Highlightable @share="onShare" @highlight="onHighlight" id="3_Page1">
                  <div>
            {{text2_1}}
                </div>
                <br/>
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

            <div class="icon"> <v-img src="../assets/rez_sprachstil.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_Page1">
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

            <div class="icon"> <v-img src="../assets/rez_emotion.png" height="100" width="100"/></div>

        </v-col>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="5_Page1">
                {{text4_1}}
                <div>
            {{text4}}
                </div>
                <br />
                   <div>
            {{text4_2}}
            <br/>
            {{text4_3}}
            <br/>
            {{text4_4}}
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
            <div class="icon2"> <v-img src="../assets/rez_details.png" height="100" width="100"/></div>
            
            </v-col>
        </v-row>
        </div>
        <div>
    <Stopwatch to="/buchrezension2" needTimer="true" />
        </div>

</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable';
import Stopwatch from '@/components/Stopwatch'
export default {
    data() {

        return {
            text:' Der Welt steht mit der Kaskade ein Krieg bevor. Aber wie geht es jetzt bei Elena und Raphael weiter? Beim letzten Kampf wurde Elena tödlich verletzt und wie es scheint, tritt Kassandras Vorhersage ein. Aber wer Elena kennt, der weiß, dass nichts so kommt wie vorhergesagt. Denn Elena glaubt an die Wandelbarkeit des Schicksals.',
            text0_1:'Die Charaktere sind glaube ich bereits allen bekannt.',
            text1: 'Wer die Reihe jetzt anfangen möchte, dem rate ich von Anfang an zu lesen, denn die Handlungen bauen auf einander auf und führen zum unweigerlich folgenden Knall. Denn der Krieg mit Lijuan lässt sich nicht mehr vermeiden. ',
            text2_1:'Die Liebe der Beiden ist noch stärker geworden und auch wenn Elena ihre Flügel vermisst, \
            stürzt sie sich doch von einem Abenteuer in das nächste. \
            Aber erstmal muss sie stärker werden, denn der Prozess zur Unsterblichkeit ist abgeschlossen.',
            text2:'Aber die Entwicklung rund um Lijuan ist noch nicht fertig erzählt und auch erwachen immer mehr Uralte. \
            Darunter auch jemand, den Illium gut kennt und eigentlich nicht sehen will. \
            Aber die Kaskade hat noch für viele eine Überraschung auf Lager. \
            Hier kommt eine rasante Entwicklung nach der anderen und man kann sich vorstellen, \
            dass die Engel, Vampire und Menschen nicht zum Luft holen kommt. ',
            text3:'Der Schreibstil ist wie immer spannend, emotional, bildgewaltig und mitreißend. Nalini Singh schafft es den Leser mit Handlungen zu überraschen, die man sich so nicht vorgestellt hat. Der Erzählstil ist in der dritten Person. Wird aber immer mal wieder aus einer anderen Sicht erzählt.  ',
            text4_1:'Meine Meinung:',
            text4:'Wow, das war ein Abschluss! \
            Ich habe mir im Vorfeld schon das englische Buch zu Gemüte geführt, \
            da ich es nicht erwarten konnte wie es mit den Beiden weitergeht und was soll ich sagen? \
            Meine Vermutungen haben sich zum Teil bestätigt. Zum anderen waren sie aber auch traurig. \
            Die Handlung hat die Autorin aber schlüssig aufgebaut und erzählt. \
            Es war ein wahres Funkenmeer an Emotionen, man fieberte mit den Engeln mit und was passiert \
            denn jetzt auch mit dem allseits beliebten Kolibri?',
            text4_2:'Die Charaktere sind mir in der ganzen Zeit ans Herz gewachsen und als ich entdeckte, \
            dass es einen weiteren Band mit anderen Protagonisten (bereits bekannte) gibt, \
            war ich aus dem Häuschen, denn hier freue ich mich schon darauf.',
            text4_3:'Aber genauso hoffe ich auch auf eine Geschichte mit und rund Illium, \
            denn auch er hat einen Abschluss verdient. Es gibt auch andere Charaktere, \
            deren Handlungsstränge noch offen scheinen. Hier lässt sich vermuten, \
            dass die Autorin noch weitere Pläne für die weitere Entwicklung hat.',
             text4_4:'Ich bin eine begeisterte Leserin dieser Serie seit Stunde 1 und hoffe, \
            dass uns Nalini Singh mit weiteren Geschichten rund um ihre Gilde der Jäger begeistert! \
            Vielen Dank für die wunderbare Unterhaltung!',
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
    },
    props: {
     rez_details: String,
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
    .legend{
        height: 120px;
    }
    .sprachstil{
    position: relative;
    z-index: 5;
    width: 98px;
    height: 0px;
    left: -20px;
    top: -20px;
    }
    .emotion{
   position: relative;
    z-index: 5;
    width: 98px;
    height: 0px;
    left: 73px;
    top: -20px;
    }
    .rez_Bezug{
    position: relative;
    z-index: 5;
    width: 98px;
    height: 0px;
    left: 165px;
    top: -20px;
    }
    .details{
    position: relative;
    z-index: 5;
    width: 98px;
    height: 0px;
    left: 250px;
    top: -20px;
    }
    .icon2 {
    width: 100px;
    height: 100px;
    justify-content: center;
    margin: 5px;
    float: right;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 500px;
    height: 0px;
    left: -201px;
    top: -188px;
}
.grafik2 {
   position: relative;
    z-index: 5;
    width: 650px;
    height: 0px;
    left: -278px;
    top: -97px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 700px;
    height: 0px;
    left: -303px;
    top: -274px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 1100px;
    height: 0px;
    left: -512px;
    top: -120px;
}
.dreieck1 {
   position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 20px;
    top: 79px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 103px;
    height: 0px;
    left: 15px;
    top: 258px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 23px;
    top: 105px;

}
.dreieck4 {
   position: relative;
    z-index: 5;
    width: 300px;
    height: 0px;
    left: -80px;
    top: 480px;
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
.grafik1 {
    position: relative;
    z-index: 5;
    width: 293px;
    height: 0px;
    left: -58px;
    top: -114px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 367px;
    height: 0px;
    left: -98px;
    top: -59px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 393px;
    height: 0px;
    left: -111px;
    top: -155px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 699px;
    height: 0px;
    left: -273px;
    top: -74px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 52px;
    top: 45px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 52px;
    top: 140px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 52px;
    top: 56px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 52px;
    top: 308px;
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
    width: 212px;
    height: 0px;
    left: 22px;
    top: -89px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 261px;
    height: 0px;
    left: -5px;
    top: -34px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 279px;
    height: 0px;
    left: -14px;
    top: -118px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 450px;
    height: 0px;
    left: -117px;
    top: -48px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 90px;
    top: 21px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 89px;
    top: 105px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 89px;
    top: 32px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 90px;
    top: 212px;
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
    left: 90px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 186px;
    height: 0px;
    left: 57px;
    top: -78px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 300px;
    height: 0px;
    left: 41px;
    top: -29px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 221px;
    height: 0px;
    left: 37px;
    top: -94px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 500;
    height: 0px;
    left: -53px;
    top: -36px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 111px;
    top: 16px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 81px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 20px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 177px;
}
}
@media screen and (min-width: 1200px) {
    .legend{
        height: 120px;
    }
    .sprachstil{
    position: relative;
    z-index: 5;
    width: 98px;
    height: 0px;
    left: -20px;
    top: -120px;
    }
    .emotion{
   position: relative;
    z-index: 5;
    width: 98px;
    height: 0px;
    left: 73px;
    top: -120px;
    }
    .rez_Bezug{
    position: relative;
    z-index: 5;
    width: 98px;
    height: 0px;
    left: 165px;
    top: -120px;
    }
    .details{
    position: relative;
    z-index: 5;
    width: 98px;
    height: 0px;
    left: 250px;
    top: -120px;
    }
.icon {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
    top: 0px;
    left: 90px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 186px;
    height: 0px;
    left: 57px;
    top: -78px;
}
.grafik2 {
        position: relative;
    z-index: 5;
    width: 270px;
    height: 0px;
    left: 11px;
    top: -29px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 221px;
    height: 0px;
    left: 37px;
    top: -94px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 389px;
    height: 0px;
    left: -53px;
    top: -36px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 111px;
    top: 16px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 81px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 20px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 177px;
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
.details {
    position: relative;
    z-index: 5;
    width: 100px;
    height: 100px;
    top: -120px;
    left: 135px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 145px;
    height: 0px;
    left: 136px;
    top: -54px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 171px;
    height: 0px;
    left: 123px;
    top: -28px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 167px;
    height: 0px;
    left: 126px;
    top: -68px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 288px;
    height: 0px;
    left: 63px;
    top: -29px;
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
    left: 169px;
    top: 57px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 170px;
    top: 16px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 171px;
    top: 128px;
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
.details {
    position: relative;
    z-index: 5;
    width: 100px;
    height: 100px;
    top: -120px;
    left: 135px;
}
.grafik1 {
    position: relative;
    z-index: 5;
    width: 132px;
    height: 0px;
    left: 143px;
    top: -41px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 170px;
    height: 0px;
    left: 122px;
    top: -28px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 170px;
    height: 0px;
    left: 122px;
    top: -59px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 285px;
    height: 0px;
    left: 65px;
    top: -29px;
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
    left: 169px;
    top: 47px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 167px;
    top: 20px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 171px;
    top: 119px;
}
}
</style>

