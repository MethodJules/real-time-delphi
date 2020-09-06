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
    <h1>Buchrezension 4 zum Buch „Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
    <mobile-menu v-if="$mq === 'mobile'">
    <v-row >
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under4">
                <div class="gelb">
                    {{text11_Handy}}
                    <div class="topGrün">
                    {{text12_Handy}}<br>{{text13_Handy}}<br>{{text14_Handy}}<br>
                        {{text15_Handy}}<br>{{text16_Handy}}<br>{{text17_Handy}}<br>{{text18_Handy}}<br>
                        {{text19_Handy}}<br>{{text110_Handy}}<br>{{text111_Handy}}<br>{{text112_Handy}}<br>
                        {{text113_Handy}}<br>{{text114_Handy}}<br>{{text115_Handy}}<br>{{text116_Handy}}<br>
                        {{text117_Handy}}<br>{{text118_Handy}}<br>{{text119_Handy}}<br>{{text120_Handy}}<br>          
                </div></div>
            </Highlightable>
            <div class="topGrün">
            {{blank_Handy}}
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under4">
                <div class="rot">
            {{text1}}
                </div>
            </Highlightable>
            
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="3_under4">
                <div class="blau">
            {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under4">
                <div class="gelb">
            {{text3}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row>
    Legende:<div><span class="red">Emotionale Konsequenzen </span></div>
    <div><span class="green">Bezug zu anderen Büchern</span></div>
    <div><span class="yellow">Inhaltliche Details</span></div>
   <div><span class="blue">Sprachstil und Erzählperspektive</span></div>
    </v-row>
    <Stopwatch to="/buchrezensionPage5Underline" needTimer="true" />
    </mobile-menu>

    <tablet-menu v-if="$mq === 'tablet'">
    <v-row >
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under4">
                <div class="gelb">
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
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under4">
                <div class="rot">
            {{text1}}
                </div>
            </Highlightable>
            
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="3_under4">
                <div class="blau">
            {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under4">
                <div class="gelb">
            {{text3}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row>
    Legende:<div><span class="red">Emotionale Konsequenzen </span></div>
    <div><span class="green">Bezug zu anderen Büchern</span></div>
    <div><span class="yellow">Inhaltliche Details</span></div>
   <div><span class="blue">Sprachstil und Erzählperspektive</span></div>
    </v-row>
    <Stopwatch to="/buchrezensionPage5Underline" needTimer="true" />
    </tablet-menu>

<Laptop-menu v-if="$mq === 'laptop'">
    <v-row >
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under4">
                <div class="gelb">
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
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under4">
                <div class="rot">
            {{text1}}
                </div>
            </Highlightable>
            
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="3_under4">
                <div class="blau">
            {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under4">
                <div class="gelb">
            {{text3}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div align="right">
        <v-row  align="center">
            <v-col cols="7">
            <b>Legende:</b>
            <div class="icon2"> <v-img src="../assets/Emotional.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Bezug.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Sprachziel.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Verständlichkeit.png" height="35"/></div>
            </v-col>
        </v-row>  
        </div>
    
    <Stopwatch to="/buchrezensionPage5Underline" needTimer="true" />
    </laptop-menu>


<Desktop-menu v-if="$mq === 'desktop'">
    <v-row >
        <v-col cols ="10">
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under4">
                <div class="gelb">
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
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under4">
                <div class="rot">
            {{text1}}
                </div>
            </Highlightable>
            
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="3_under4">
                <div class="blau">
            {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under4">
                <div class="gelb">
            {{text3}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
     <div align="right">
        <v-row  align="center">
            <v-col cols="8">
            <b>Legende:</b>
            <div class="icon2"> <v-img src="../assets/Emotional.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Bezug.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Sprachziel.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Inhalt.png" height="35"/></div>
            </v-col>
        </v-row>  
        </div>
     
    <Stopwatch to="/buchrezensionPage5Underline" needTimer="true" />
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
            text11_Handy:'Dieses Buch endet    ',
            text12_Handy:'mehr oder weniger    ',
            text13_Handy:'mit einem großen       ',
            text14_Handy:'Knall, vielen                  ',
            text15_Handy:'Veränderungen und   ',
            text16_Handy:'Verlusten, aber auch  ',
            text17_Handy:'Neuanfängen. Die       ',
            text18_Handy:'Reihe könnte mit        ',
            text19_Handy:'diesem Buch,              ',
            text110_Handy:'durchaus auch enden,',
            text111_Handy:'was ich nicht hoffe,     ',
            text112_Handy:'aber es können auch   ',
            text113_Handy:'durchaus auch           ',
            text114_Handy:'wieder neue Stränge   ',
            text115_Handy:'gesponnen werden.    ',
            text116_Handy:'Es bleibt also              ',
            text117_Handy:'interessant                 ',
            text118_Handy:'abzuwarten, ob und    ',
            text119_Handy:'wenn wie es                 ',
            text120_Handy:' weitergeht.                  ',
            
            text11_Tablet:'Dieses Buch endet mehr oder weniger mit einem großen   ,',
            text12_Tablet:'Knall vielen Veränderungen und Verlusten, aber auch          ',
            text13_Tablet:'Neuanfängen. Die Reihe könnte mit diesem Buch, durchaus ',
            text14_Tablet:'auch enden, was ich nicht hoffe, aber es können auch          ',
            text15_Tablet:'durchaus auch wieder neue Stränge gesponnen werden. Es ',
            text16_Tablet:'bleibt also interessant abzuwarten, ob und wenn wie es       ',
            text17_Tablet:'weitergeht.                                                                                      ',

            text11_Laptop:'Dieses Buch endet mehr oder weniger mit einem großen Knall vielen Veränderungen und Verlusten, aber auch,',
            text12_Laptop:'Neuanfängen. Die Reihe könnte mit diesem Buch, durchaus auch enden, was ich nicht hoffe, aber es können auch durchaus',
            text13_Laptop:' auch wieder neue Stränge gesponnen werden. Es bleibt also interessant abzuwarten, ob und wenn wie es weitergeht.         ',                                                                                      
            text14_Laptop:'',

            text11_Desktop:'Dieses Buch endet mehr oder weniger mit einem großen Knall vielen Veränderungen und Verlusten, aber auch Neuanfängen. Die Reihe könnte mit diesem Buch,',
            text12_Desktop:'durchaus auch enden, was ich nicht hoffe, aber es können auch durchaus auch wieder neue Stränge gesponnen werden. Es bleibt also interessant abzuwarten,',
            text13_Desktop:'ob und wenn wie es weitergeht.                                                                                                                                                                                                                                    ',                                                                                      
            

            text: 'Dieses Buch endet mehr oder weniger mit einem großen Knall, vielen Veränderungen und Verlusten, aber auch Neuanfängen. Die Reihe könnte mit diesem Buch, durchaus auch enden, was ich nicht hoffe, aber es können auch durchaus auch wieder neue Stränge gesponnen werden. \
            Es bleibt also interessant abzuwarten, ob und wenn wie es weitergeht.',
            text1: 'Generell fand ich das Buch wieder sehr gut und spannend.',
            text2: 'Was mich nur genervt hat, waren die doch ständigen Wiederholungen, \
            wie z.B. mein Erzengel und durch dein Stück Herz bleib ich menschlich. \
            Das kam gefühlt in jedem Kapitel mind. 3x vor und es nervte auf Dauer. \
            Man liest das Buch ja und dann weiß man Bescheid, \
            da muss ich ja nicht bei jedem Satz erinnert werden, so vergesslich bin ich dann doch nicht. ',
            text3: 'Und was mich noch störte, ist diese schnelle Genesung und Stärke bei Elena, gerade noch kann sie nicht alleine stehen und dann sieht sie sich im größten Kampf aller Zeiten mittendrin als starke Kämpferin, der Sprung war mir zu groß, das hätte man bestimmt anders lösen können. Sonst aber wie gewohnt ein gutes Buch, eine tolle Geschichte, die halt diesmal einige Schwächen hatte.',
           blank_Handy: '                                     ',
           blank_Tablet: '                                                                                                        ',
            blank_Laptop: '                                                                                                                                                                                                                         ',
            blank_Desktop:'                                                                                                                                                                                                                                                                                           ',
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
  text-decoration-color: green

}
.blau {
    text-decoration: underline;
  -webkit-text-decoration-color: blue;
  text-decoration-color: blue

}
.gelb {
    text-decoration: underline;
  -webkit-text-decoration-color: yellow;
  text-decoration-color: yellow;
  white-space: break-spaces;

}
.lila {
    text-decoration: underline;
  -webkit-text-decoration-color: purple;
  text-decoration-color: purple

}
.icon {
    width: 50px;
    height: 50px;
    background-color: burlywood;
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
