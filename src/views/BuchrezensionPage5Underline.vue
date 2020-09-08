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
    <h1>Buchrezension 5 zum Buch „Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
    <mobile-menu v-if="$mq === 'mobile'">
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under5">
                <div class="rot">
                    {{text}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under5">
                <div class="blau">
                    {{text11_Handy}}
                    <div class="topGrün">
                        {{text12_Handy}}<br>{{text13_Handy}}<br>{{text14_Handy}}<br>
                        {{text15_Handy}}<br>{{text16_Handy}}<br>{{text17_Handy}}<br>{{text18_Handy}}<br>
                        {{text19_Handy}}<br>{{text110_Handy}}<br>{{text111_Handy}}<br>       
                </div></div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row>
    Legende:<div><span class="red">Emotionale Konsequenzen </span></div>
    <div><span class="green">Bezug zu anderen Büchern</span></div>
    <div><span class="blue">Sprachstil und Erzählperspektive</span></div>
    </v-row>

    <Stopwatch to="/fragenpage" needTimer="true" />
    </mobile-menu>


    <tablet-menu v-if="$mq === 'tablet'">
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under5">
                <div class="rot">
                    {{text}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under5">
                <div class="blau">
                    {{text11_Tablet}}
                    <div class="topGrün">
                        {{text12_Tablet}}<br>{{text13_Tablet}}<br>{{text14_Tablet}}<br>
                        {{text15_Tablet}}<br>{{text16_Tablet}}<br>{{text17_Tablet}}<br>      
                </div></div>
            </Highlightable>
            <div class="topGrün">
            {{blank_Tablet}}
            </div>
        </v-col>
    </v-row>
        <v-row>
    Legende:<div><span class="red">Emotionale Konsequenzen </span></div>
    <div><span class="green">Bezug zu anderen Büchern</span></div>
    <div><span class="blue">Sprachstil und Erzählperspektive</span></div>
    </v-row>

    <Stopwatch to="/fragenpage" needTimer="true" />
    </tablet-menu>


    <laptop-menu v-if="$mq === 'laptop'">
    <v-row>
        <v-col cols = "8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under5">
                <div class="rot">
                    {{text}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols = "8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under5">
                <div class="blau">
                    {{text11_Laptop}}
                    <div class="topGrün">
                        {{text12_Laptop}}<br>{{text13_Laptop}}<br>  
                </div></div>
            </Highlightable>
            <div class="topGrün">
            {{blank_Laptop}}
            </div>
        </v-col>
    </v-row>
        <v-row>
    Legende:<div><span class="red">Emotionale Konsequenzen </span></div>
    <div><span class="green">Bezug zu anderen Büchern</span></div>
    <div><span class="blue">Sprachstil und Erzählperspektive</span></div>
    </v-row>

    <Stopwatch to="/fragenpage" needTimer="true" />
    </laptop-menu>


    <desktop-menu v-if="$mq === 'desktop'">
    <v-row>
        <v-col cols = "8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under5">
                <div class="rot">
                    {{text}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="9">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under5">
                <div class="blau">
                    {{text11_Laptop}}
                    <div class="topGrün">
                        {{text12_Laptop}}<br>{{text13_Laptop}}<br>{{text14_Laptop}}<br>
                </div></div>
            </Highlightable>
            <div class="topGrün">
            {{blank_Laptop}}
            </div>
        </v-col>
    </v-row>
     <div align="right">
        <v-row  align="center">
            <v-col cols="8">
            <b>Legende:</b>
            <div class="icon2"> <v-img src="../assets/Emotional.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Bezug.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Sprachziel.png" height="35" width="125"/></div>
            
            </v-col>
        </v-row>  
        </div>
    <Stopwatch to="/fragenpage" needTimer="true" />
    </desktop-menu>
</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable';
import Stopwatch from '@/components/Stopwatch'
import Vue from 'vue'
import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    phone: 0,
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})
export default {
    data() {
        return {
            text11_Handy:'Daran erkennt man,     ',
            text12_Handy:'wie gut der Schreibstil ',
            text13_Handy:'ist, wenn man in die      ',
            text14_Handy:'Geschichte                     ',
            text15_Handy: 'eintauchen kann, als    ',
            text16_Handy:'ob man persönlich       ',
            text17_Handy:'dabei ist. Ich hoffe auf',
            text18_Handy:'eine schnellere             ',
            text19_Handy:'Veröffentlichung des ',
            text110_Handy:'nächsten Buches,        ',
            text111_Handy:'wie bisher.                     ',

            text11_Tablet:'Daran erkennt man, wie gut der Schreibstil ist, wenn man in',
            text12_Tablet:'die Geschichte eintauchen kann, als ob man persönlich ',
            text13_Tablet:'dabei ist. Ich hoffe auf eine schnellere Veröffentlichung',
            text14_Tablet:'des nächsten Buches, wie bisher durchaus auch wieder',
            text15_Tablet:'neue Stränge gesponnen werden. Es bleibt also interessant',
            text16_Tablet:'abzuwarten, ob und wenn wie es weitergeht.',


            text11_Laptop:'Daran erkennt man, wie gut der Schreibstil ist, wenn man in die Geschichte eintauchen,',
            text12_Laptop:'kann als ob man persönlich dabei ist. Ich hoffe auf eine schnellere Veröffentlichung ',
            text13_Laptop:'des nächsten Buches, wie bisher durchaus auch wieder neue Stränge gesponnen .',
            text14_Laptop:'werden. Es bleibt also interessant abzuwarten, ob und wenn wie es weitergeht.',

             text11_Desktop:'Daran erkennt man, wie gut der Schreibstil ist, wenn man in die Geschichte eintauchen kann, als ob man persönlich dabei ist.',
            text12_Desktop:'Ich hoffe auf eine schnellere Veröffentlichung des nächsten Buches, wie bisher durchaus auch wieder neue Stränge gesponnen werden.  .',
            text13_Desktop:'Es bleibt also interessant abzuwarten, ob und wenn wie es weitergeht.                                                                                                                                 ',
          

            text: 'Eigentlich schreibe ich bei Serien keine Rezension mehr, \
            aber hier muss ich einfach. Die Geschichte wird immer spannender und bildgewaltiger. \
            Die Handlung ist der Hammer!!! Ich war glücklich, um kurz darauf zu Tode betrügt zu sein, \
            wie Elena - aus dem gleichen Grund. ',
            text1: 'Daran erkennt man, wie gut der Schreibstil ist, wenn man in die Geschichte eintauchen kann, \
            als ob man persönlich dabei ist. \
            Ich hoffe auf eine schnellere Veröffentlichung des nächsten Buches, wie bisher.',
             blank_Handy:'',
             blank_Tablet:'',
             blank_Laptop:'                                                                                                                                          ',
            blank_Desktop:'                         ',
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
.icon2 {
    width: 125px;
    height: 100px;
    justify-content: center;
    margin: 5px;
    float: right;
}
.topGrün{
  text-decoration: overline;
  text-decoration-color: green;   
  white-space: break-spaces; 
}

.rot {
    text-decoration: underline;
  -webkit-text-decoration-color: red;
  text-decoration-color: red

}
.grün {
    text-decoration: underline;
  -webkit-text-decoration-color: green;
  text-decoration-color: green;
  white-space: break-spaces; 

}
.blau {
    text-decoration: underline;
  -webkit-text-decoration-color: blue;
  text-decoration-color: blue;
  white-space: break-spaces; 

}
.gelb {
    text-decoration: underline;
  -webkit-text-decoration-color: yellow;
  text-decoration-color: yellow

}
.lila {
    text-decoration: underline;
  -webkit-text-decoration-color: purple;
  text-decoration-color: purple

}
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
