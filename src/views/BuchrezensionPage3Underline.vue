<template>
<v-container>
          <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
          <v-progress-linear value="55"></v-progress-linear>
        <strong>55%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
    <h1>Buchrezension 3 zum Buch „Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
   
   
   <!-- User benutz Handy -->
   
    <mobile-menu v-if="$mq === 'mobile'">
    <v-row >
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under3">
            <div class="rot">
                    {{text0_Handy}}
                    <div class="topGrün">
                    {{text01}}<br>
                    {{text02}}<br>
                    {{text03}}<br>
                    {{text04}}<br>
                    {{text05}}<br>
                    {{text06}}<br>
                    </div>
                </div>  
            </Highlightable>
            <div class="topGrün">
            {{blank_Handy}}
            </div>
        </v-col>
    </v-row>
    <v-row >
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under3">
                <div class="blau">
                    {{text11_Handy}}
                    <div class="topGrün">
                        {{text12_Handy}}<br>{{text13_Handy}}<br>{{text14_Handy}}<br>
                        {{text15_Handy}}<br>{{text16_Handy}}<br>{{text17_Handy}}<br>{{text18_Handy}}<br>
                        {{text19_Handy}}<br>{{text110_Handy}}<br>{{text111_Handy}}<br>{{text112_Handy}}<br>
                        {{text113_Handy}}<br>{{text114_Handy}}<br>{{text115_Handy}}<br>{{text116_Handy}}<br>
                        {{text117_Handy}}<br>{{text118_Handy}}<br>{{text119_Handy}}<br>{{text120_Handy}}<br>
                        {{text121_Handy}}<br>{{text122_Handy}}<br>{{text123_Handy}}<br>{{text124_Handy}}<br>
                        {{text125_Handy}}<br>{{text126_Handy}}<br>{{text127_Handy}}<br>{{text128_Handy}}<br>
                        {{text129_Handy}}<br>{{text130_Handy}}<br>{{text131_Handy}}<br>{{text132_Handy}}<br>
                        {{text133_Handy}}<br>{{text134_Handy}}<br>{{text135_Handy}}<br>{{text136_Handy}}<br>
                    </div>
                </div>
            </Highlightable>
            <div class="topGrün">
            {{blank_Handy}}
            </div>
        </v-col>
    </v-row>
    <v-row >
        <v-col cols="5">
            <Highlightable @share="onShare" @highlight="onHighlight"  id="3_under3">
                <div class="rosa">
                    {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row >
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under3">
           
                <div class="blau">
                    {{text31_Handy}}
                <div class="topPink">
                        {{text32_Handy}}<br>{{text33_Handy}}<br>{{text34_Handy}}<br>
                        {{text35_Handy}}<br>{{text36_Handy}}<br>{{text37_Handy}}<br>{{text38_Handy}}<br>
                        {{text39_Handy}}<br>{{text310_Handy}}<br>{{text311_Handy}}<br>{{text312_Handy}}<br>
                        {{text313_Handy}}<br>{{text314_Handy}}<br>{{text315_Handy}}<br>{{text316_Handy}}<br>
                        {{text317_Handy}}<br>{{text318_Handy}}<br>{{text319_Handy}}<br>{{text320_Handy}}<br>
                        {{text321_Handy}}<br>{{text322_Handy}}<br>{{text323_Handy}}<br>{{text324_Handy}}<br>
                        {{text325_Handy}}<br>{{text326_Handy}}<br>{{text327_Handy}}<br>{{text328_Handy}}<br>
                        {{text329_Handy}}<br>{{text330_Handy}}<br>{{text331_Handy}}<br>{{text332_Handy}}<br>
                        {{text333_Handy}}<br>{{text334_Handy}}<br>{{text335_Handy}}<br>{{text336_Handy}}<br>
                </div>
                </div>
            </Highlightable>
            <div class="topPink">
                    {{blank_Handy}}
                </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="5">
            <Highlightable @share="onShare" @highlight="onHighlight" id="5_under3">
                <div class="rot">
                    {{text4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row >
        <v-col cols="5">
            <Highlightable @share="onShare" @highlight="onHighlight" id="6_under3">
                <div class="grün">
                    {{text5}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
      <v-row>
       Legende:<div><span class="red">Emotionale Konsequenzen </span></div>
    <div><span class="green">Bezug zu anderen Büchern</span></div>
    <div><span class="blue">Sprachstil und Erzählperspektive</span></div>
    <div><span class="pink lighten-1">Verständlichkeit</span></div>
    </v-row>
    <Stopwatch to="/buchrezensionPage4Underline" needTimer="true" />
    </mobile-menu>


<!-- User benutzt Tablet -->
   <tablet-menu v-if="$mq === 'tablet'">
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under3">
                <div class="rot">
                    {{text0_Tablet}}
                    <div class="topGrün">
                    {{text_Tablet}}
                    </div>
                </div>  
            </Highlightable>
            <div class="topGrün">
            {{blank_Tablet}}
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under3">
                <div class="blau">
                    {{text11_Tablet}}
                    <div class="topGrün">
                        {{text12_Tablet}}<br>{{text13_Tablet}}<br>{{text14_Tablet}}<br>
                        {{text15_Tablet}}<br>{{text16_Tablet}}<br>{{text17_Tablet}}<br>{{text18_Tablet}}<br>
                        {{text19_Tablet}}<br>
                    </div>
                </div>
            </Highlightable>
            <div class="topGrün">
            {{blank_Tablet}}
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight"  id="3_under3">
                <div class="rosa">
                    {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row >
        <v-col >
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under3">
           
                <div class="blau">
                    {{text31_Tablet}}
                <div class="topPink">
                    {{text32_Tablet}}<br>{{text33_Tablet}}<br>{{text34_Tablet}}<br>
                        {{text35_Tablet}}<br>{{text36_Tablet}}<br>{{text37_Tablet}}<br>{{text38_Tablet}}<br>
                        {{text39_Tablet}}<br>{{text310_Tablet}}<br>{{text311_Tablet}}<br>{{text312_Tablet}}<br>
                </div>
                </div>
            </Highlightable>
            <div class="topPink">
                    {{blank_Tablet}}
                </div>
        </v-col>
    </v-row>
    <v-row >
        <v-col >
            <Highlightable @share="onShare" @highlight="onHighlight" id="5_under3">
                <div class="rot">
                    {{text4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row>
        <v-col cols="10">
            <Highlightable @share="onShare" @highlight="onHighlight" id="6_under3">
                <div class="grün">
                    {{text5}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
      <v-row>
          
       Legende:<div><span class="red">Emotionale Konsequenzen </span></div>
    <div><span class="green">Bezug zu anderen Büchern</span></div>
    <div><span class="blue">Sprachstil und Erzählperspektive</span></div>
    <div><span class="pink lighten-1">Verständlichkeit</span></div>
    </v-row>
    <Stopwatch to="/buchrezensionPage4Underline" needTimer="true" />
    </tablet-menu>



<!-- User benutzt Laptop -->
   <laptop-menu v-if="$mq === 'laptop'">
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under3">
                <div class="rot">
                    {{text0_Laptop}}
                    <div class="topGrün">
                    {{text01_Laptop}}
                    </div>
                </div>  
            </Highlightable>
            <div class="topGrün">
            {{blank_Laptop}}
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under3">
                <div class="blau">
                    {{text11_Laptop}}
                    <div class="topGrün">
                        {{text12_Laptop}}<br>{{text13_Laptop}}<br>{{text14_Laptop}}<br>
                    </div>
                </div>
            </Highlightable>
            <div class="topGrün">
            {{blank_Laptop2}}
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Highlightable @share="onShare" @highlight="onHighlight"  id="3_under3">
                <div class="rosa">
                    {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row >
        <v-col >
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under3">
           
                <div class="blau">
                    {{text31_Laptop}}
                <div class="topPink">
                    {{text32_Laptop}}<br>{{text33_Laptop}}<br>{{text34_Laptop}}<br>
                </div>
                </div>
            </Highlightable>
            <div class="topPink">
                    {{blank_Laptop2}}
                </div>
        </v-col>
    </v-row>
    <v-row >
        <v-col >
            <Highlightable @share="onShare" @highlight="onHighlight" id="5_under3">
                <div class="rot">
                    {{text4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row>
        <v-col cols="7">
            <Highlightable @share="onShare" @highlight="onHighlight" id="6_under3">
                <div class="grün">
                    {{text5}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <div class="legend" align="right">
        <v-row  align="center">
            <v-col cols="7">
            <b>Legende:</b>
            <div class="icon2"> <v-img src="../assets/Emotional.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Bezug.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Sprachziel.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Inhalt.png" height="35"/></div>
            </v-col>
        </v-row>  
        </div>
      <v-row>
          
       Legende:<div><span class="red">Emotionale Konsequenzen </span></div>
    <div><span class="green">Bezug zu anderen Büchern</span></div>
    <div><span class="blue">Sprachstil und Erzählperspektive</span></div>
    <div><span class="pink lighten-1">Verständlichkeit</span></div>
    </v-row>
    <Stopwatch to="/buchrezensionPage4Underline" needTimer="true" />
    </laptop-menu>

   <!-- User nutzt Desktop -->
   <desktop-menu v-if="$mq === 'desktop'">
    <v-row>
        <v-col cols = "9">
            

            <Highlightable @share="onShare" @highlight="onHighlight" id="1_under3">
                <div class="rot">
                    {{text01_Laptop}}
                   
                </div>  
            </Highlightable>
            <div class="topGrün">
            {{blank_Laptop0}}
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols = "9">
            <Highlightable @share="onShare" @highlight="onHighlight" id="2_under3">
                <div class="blau">
                    {{text11_Laptop}}
                    <div class="topGrün">
                        {{text12_Laptop}}<br>{{text13_Laptop}}<br>{{text14_Laptop}}<br>
                    </div>
                </div>
            </Highlightable>
            <div class="topGrün">
            {{blank_Laptop2}}
            </div>

            
            
        </v-col>
    </v-row>
    <v-row>
        <v-col cols = "8">
            <Highlightable @share="onShare" @highlight="onHighlight"  id="3_under3">
                <div class="rosa">
                    {{text2}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row >
        <v-col cols = "10">
            <Highlightable @share="onShare" @highlight="onHighlight" id="4_under3">
           
                <div class="blau">
                    {{text31_Laptop}}
                <div class="topPink">
                    {{text32_Laptop}}<br>{{text33_Laptop}}<br>{{text34_Laptop}}<br>
                </div>
                </div>
            </Highlightable>
            <div class="topPink">
                    {{blank_Laptop2}}
                </div>
        </v-col>
    </v-row>
    <v-row >
        <v-col cols = "9">
            <Highlightable @share="onShare" @highlight="onHighlight" id="5_under3">
                <div class="rot">
                    {{text4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight" id="6_under3">
                <div class="grün">
                    {{text5}}
                    <br/>
                    {{text5_1}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>

    <div align="right">
        <v-row  align="center">
            <v-col cols="9">
            <b>Legende:</b>
            <div class="icon2"> <v-img src="../assets/Emotional.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Bezug.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Sprachziel.png" height="35" width="125"/></div>
            <div class="icon2"> <v-img src="../assets/Verständlichkeit.png" height="35"/></div>
            </v-col>
        </v-row>  
        </div>
    <Stopwatch to="/buchrezensionPage4Underline" needTimer="true" />
    </desktop-menu>

</v-container>

</template>
<script>
import Vue from 'vue'
import VueMq from 'vue-mq'
import Highlightable from '@/components/Highlightable';
import Stopwatch from '@/components/Stopwatch'
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
    beforeRouteLeave(to, from, next) {
    if (to.path ==='/buchrezensionPage4Underline' ){
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
            text0_Handy:'Wow Wow Wow',
            text01:'wie sehr ich        ',
            text02:'diese Reihe          ',
            text03:'liebe und auch    ',
            text04:'bei Band 12         ',
            text05:'wurde ich nicht   ',
            text06:'enttäuscht.',
            
            text0_Tablet:'Wow Wow Wow ... wie sehr ich diese Reihe liebe',
            text_Tablet:'und auch bei Band 12  wurde ich nicht enttäuscht.',
            text0LaptopAbs:'Wow Wow Wow ... ', 
            text01_LaptopAbs:'wie sehr ich diese Reihe liebe und auch bei Band 12  wurde ich nicht enttäuscht.',
            
            text0_Laptop: '                                                                                                              ',
            text01_Laptop:' Wow Wow Wow ...   wie sehr ich diese Reihe liebe und auch bei Band 12  wurde ich nicht enttäuscht.',
            
            
            text11_Handy:'Nalini Singh      ',
            text12_Handy:'schreibt so        ',
            text13_Handy:'kompakt und       ',
            text14_Handy:'fesselnd, dass     ',
            text15_Handy:'ich das Buch        ',
            text16_Handy:'kaum aus der     ',
            text17_Handy:'Hand legen          ',
            text18_Handy:'wollte. Ihr             ',
            text19_Handy:'Schreibstil ist      ',
            text110_Handy:'zwar flüssig,        ',
            text111_Handy:'aber insgesamt  ',
            text112_Handy:'ist die Story         ',
            text113_Handy:'durchweg keine  ',
            text114_Handy:'leichte Kost.        ',
            text115_Handy:'Man kann diese  ',
            text116_Handy:'Serie und vor        ',
            text117_Handy:'allem diesen       ',
            text118_Handy:'Band nicht           ',
            text119_Handy:'einfach mal          ',
            text120_Handy:'zwischendurch ',
            text121_Handy:'lesen, denn         ',
            text122_Handy:'dafür ist der        ',
            text123_Handy:'komplette rote    ',
            text124_Handy:'Faden von Teil 1 ',
            text125_Handy:'an zu kompakt    ',
            text126_Handy:'und zu vielfältig. ',
            text127_Handy:'Die Autorin          ',
            text128_Handy:'schreibt auch so ',
            text129_Handy:'detailgetreu,        ',
            text130_Handy:'dass ich mir       ',
            text131_Handy:'alle                       ',
            text132_Handy:'Geschehnisse ',
            text133_Handy:'richtig gut            ',
            text134_Handy:'Nalini Singh      ',
            text135_Handy:'vorstellen             ',
            text136_Handy:'konnte.                ',

            text11_Tablet:'Nalini Singh schreibt so kompakt und fesselnd, dass    ',
            text12_Tablet:'ich das Buch kaum aus der Hand legen wollte. Ihr          ',
            text13_Tablet:'Schreibstil ist zwar flüssig, aber insgesamt ist die Story',
            text14_Tablet:'durchweg keine leichte Kost. Man kann diese Serie und',
            text15_Tablet:'vor allem diesen Band nicht einfach mal zwischendurch',
            text16_Tablet:'lesen denn dafür ist der komplette rote Faden von, Teil 1',
            text17_Tablet:'an zu kompakt und zu vielfältig. Die Autorin schreibt       ',
            text18_Tablet:'auch so detailgetreu, dass ich mir alle Geschehnisse      ',
            text19_Tablet:'richtig gut vorstellen konnte.                                                 ',


            text11_Laptop:'Nalini Singh schreibt so kompakt und fesselnd, dass ich das Buch kaum aus der Hand legen wollte. Ihr Schreibstil ist zwar',
            text12_Laptop:'flüssig, aber insgesamt ist die Story durchweg keine leichte Kost. Man kann diese Serie und vor allem diesen vor allem ',
            text13_Laptop:'diesen Band nicht einfach mal zwischendurch lesen denn dafür ist der komplette rote Faden von, Teil 1 an zu kompakt',
            text14_Laptop:'und zu vielfältig. Die Autorin schreibt auch so detailgetreu, dass ich mir alle Geschehnisse richtig gut vorstellen konnte.',

            text1: 'Nalini Singh schreibt so kompakt und fesselnd, dass ich das Buch kaum aus der Hand legen wollte. \
            Ihr Schreibstil ist zwar flüssig, aber insgesamt ist die Story durchweg keine leichte Kost. \
            Man kann diese Serie und vor allem diesen Band nicht einfach mal zwischendurch lesen, \
            denn dafür ist der komplette rote Faden von Teil 1 an zu kompakt und zu vielfältig. \
            Die Autorin schreibt auch so detailgetreu, dass ich mir alle Geschehnisse richtig gut vorstellen konnte.',
            
                              
            text2: 'Zuerst denkt man, dass alles viel zu viel ist, zu viel was am Anfang auf einen einprasselt, aber zum Ende hin fügt sich wie immer alles zusammen und es wird verständlich.',
            
            
            text31_Handy:'Ein paar kleine ',
            text32_Handy:'Episoden waren ',
            text33_Handy:'mir zu lang, aber ',
            text34_Handy:'Seiten weiter       ',
            text35_Handy:'blättern war        ',
            text36_Handy:'überhaupt nicht ',
            text37_Handy:'möglich, da          ',
            text38_Handy:'einem sonst u.a. ',
            text39_Handy:'die spritzigen      ',
            text310_Handy:'wortgewandten ',
            text311_Handy:'Dialoge                ',
            text312_Handy:'entgangen           ',
            text313_Handy:'wären. Leider ist ',
            text314_Handy:'nicht immer         ',
            text315_Handy:'gleich zu              ',
            text316_Handy:'erkennen aus      ',
            text317_Handy:'welcher Sicht      ',
            text318_Handy:'wir alle                 ',
            text319_Handy:'Geschehnisse      ',
            text320_Handy:'erleben. Der        ',
            text321_Handy:'Wechsel von        ',
            text322_Handy:'Elena zu               ',
            text323_Handy:'Raphael                ',
            text324_Handy:'geschieht            ',
            text325_Handy:'teilweise im        ',
            text326_Handy:'nächsten Satz,   ',
            text327_Handy:'nicht mal             ',
            text328_Handy:'Kapitel- oder      ',
            text329_Handy:'Absatzweise.      ',
            text330_Handy:'Aber das ist         ',
            text331_Handy:'meiner Meinung',
            text332_Handy:'nur ein i-               ',
            text333_Handy:'Tüpfelchen, was ',
            text334_Handy:'die Story               ',
            text335_Handy:'leichter lesen       ',
            text336_Handy:'lassen würde.     ',


            text31_Tablet:'Ein paar kleine Episoden waren mir zu lang,   ',
            text32_Tablet:'aber Seiten weiter blättern war überhaupt       ',
            text33_Tablet:'nicht möglich, da einem sonst u.a. die              ',
            text34_Tablet:'spritzigen wortgewandten Dialoge entgangen',
            text35_Tablet:'wären. Leider ist nicht immer gleich  zu            ',
            text36_Tablet:' erkennen aus welcher Sicht wir alle                   ',
            text37_Tablet:'Geschehnisse erleben. Der Wechsel von Elena ',
            text38_Tablet:'zu Raphael geschieht teilweise im nächsten     ',
            text39_Tablet:'Satz, nicht mal Kapitel- oder Absatzweise.       ',
            text310_Tablet:'Aber das ist meiner Meinung nach                     ',
            text311_Tablet:'wirklich nur ein i-Tüpfelchen, was die Story       ',
            text312_Tablet:'leichter lesen lassen würde                                   ',


            text31_Laptop:'Ein paar kleine Episoden waren mir zu lang, aber Seiten weiter blättern war überhaupt nicht möglich, da einem sonst u.a.',
            text32_Laptop:'die spritzigen wortgewandten Dialoge entgangen wären. Leider ist nicht immer gleich zu erkennen aus welcher Sicht wir',
            text33_Laptop:'alle Geschehnisse erleben. Der Wechsel von Elena zu Raphael geschieht teilweise im nächsten Satz, nicht mal Kapitel-oder',
            text34_Laptop:'Absatzweise. Aber das ist meiner Meinung nach wirklich nur ein i-Tüpfelchen, was die Story leichter lesen lassen würde.',


           text3:'Ein paar kleine Episoden waren mir zu lang, aber Seiten weiter blättern war überhaupt nicht möglich, da einem sonst u.a. die spritzigen wortgewandten Dialoge entgangen wären. Leider ist nicht immer gleich zu erkennen aus welcher Sicht wir alle Geschehnisse erleben. Der Wechsel von Elena zu Raphael geschieht teilweise im nächsten Satz, nicht mal Kapitel- oder Absatzweise. Aber das ist meiner Meinung nach wirklich nur ein i-Tüpfelchen, was die Story leichter lesen lassen würde. ',
            
            
            text4:'Dieser Teil war wieder einmal atemberaubend, spannend, wortgewandt, vielfältig, fesselnd, überraschend und auch gruselig.',
            text5: 'Ich denke wirklich, dass diejenigen, die bisher die Reihe schon begonnen haben, unbedingt weiterlesen müssen und diejenigen, an denen diese Serie vorbei gegangen ist, sollten unbedingt mit dem Lesen von „Engelskuss“ anfangen.',
            text5_1:'Für mich eine Reihe, die von den so unterschiedlichen, aber auch absolut stimmigen Charakteren lebt.',
            blank_Handy: '                            ',
            blank_Tablet:'                                                                                         ',
            blank_Laptop:'                                                                                                                                              ',
            blank_Laptop0:'                                                                                                                                                                                    ',
            blank_Laptop2:'                                                                                                                                                                                                                  ',
            
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
.topGrünrot{
  text-decoration: overline;
  text-decoration-color: green;   
  white-space: break-spaces; 
  text-decoration: underline;
   text-decoration-color: red;
}
.rot {
    text-decoration: underline;
  -webkit-text-decoration-color: red;
  text-decoration-color: red;
  white-space: break-spaces
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
  text-decoration-color: yellow

}
.rosa {
    text-decoration: underline;
  -webkit-text-decoration-color: rgb(197, 126, 138);
  text-decoration-color: rgb(197, 126, 138)
  
}
.topPink{
  text-decoration: overline;
  text-decoration-color: rgb(197, 126, 138);   
  white-space: break-spaces; 
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
    /* border: 1px solid black; */
    margin: 5px 0;
    background-color: lightgrey;
}
@media screen and (max-width: 576px) {
.topGrün {
    text-decoration: overline;
  text-decoration-color: green;   
  white-space: break-spaces;
}
.rot {
    text-decoration: underline;
  -webkit-text-decoration-color: red;
  text-decoration-color: red;
  white-space: break-spaces;

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
  text-decoration-color: yellow;
  white-space: break-spaces;

}
.rosa {
    text-decoration: underline;
  -webkit-text-decoration-color: rgb(197, 126, 138);
  text-decoration-color: rgb(197, 126, 138)

}


}
</style>
