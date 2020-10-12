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
        <!-- Erstellung einzelner Textabschnitte mit dazugehörigem Symbol -->
        <!-- User benutz Handy -->
   
    <mobile-menu v-if="$mq === 'mobile'">
        <div>
    <v-row class="rezension" align="center">

        <v-col cols="4">
            <div class="icon"> <div class="bild1"><v-img src="../assets/rez_details.png" height="100" width="100"/></div></div>

        </v-col>
        <v-col cols="7">
            <!-- Highlighting funktion mit id zur speicherung -->
            <Highlightable class="highlight1" @share="onShare" @highlight="onHighlight" id="1_Page1">
                <div>
            <p>Der Abschluss der Kaskade?
               <br />
            </p>
            {{text0}}<br>{{text0_1}}<br>{{text0_2}}<br>{{text0_3}}
            <br>{{text0_4}}<br>{{text0_5}}<br>{{text0_6}}<br>{{text0_7}}
            <br>{{text0_8}}
            <br/>
            {{text0_9}}
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
                    {{text1}}<br> {{text1_1}}<br> {{text1_2}}<br> {{text1_3}}<br> {{text1_4}}
                    <br> {{text1_5}}
                
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
            {{text2_0}}<br>{{text2_1}}<br>{{text2_2}}<br>{{text2_3}}<br>{{text2_4}}<br>{{text2_5}}{{text2_6}}
                </div>
                <br/>
                <div>
                  {{text2_7}}<br>{{text2_8}}<br>{{text2_9}}<br>{{text2_10}}<br>{{text2_11}}<br>{{text2_12}}<br>{{text2_13}}  
            <br>{{text2_14}}<br>{{text2_15}}<br>{{text2_16}}<br>{{text2_17}}<br>{{text2_18}}
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
    <v-img src="../assets/grafik_strichsenk_1.svg" />
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
       <!-- Einfügen einer Legende -->
       <b>Legende:</b>
       <div class="legend" align="right">
        <v-row  align="center">
            <v-col cols="12">
            
            <div class="icon2"> <v-img src="../assets/rez_emotion.png" height="80" width="80"/></div>
            <div class="icon2"> <v-img src="../assets/rez_bezug.png" height="80" width="80"/></div>
            <div class="icon2"> <v-img src="../assets/rez_sprachstil.png" height="80" width="80"/></div>
            <div class="icon2"> <v-img src="../assets/rez_details.png" height="80" width="80"/></div>
            
            </v-col>
        </v-row>
        </div>
        <div>
            <!-- Verlinkung und Timer wird aktiviert -->
    <Stopwatch to="/buchrezension2" needTimer="true" />
        </div>
</mobile-menu>

    <!-- User benutzt Tablet -->
   <tablet-menu v-if="$mq === 'tablet'">
        <div>
    <v-row class="rezension" align="center">

        <v-col cols="4">
            <div class="icon"> <div class="bild1"><v-img src="../assets/rez_details.png" height="100" width="100"/></div></div>

        </v-col>
        <v-col cols="7">
            <!-- Highlighting funktion mit id zur speicherung -->
            <Highlightable class="highlight1" @share="onShare" @highlight="onHighlight" id="1_Page1">
                <div>
            <p>Der Abschluss der Kaskade?
               <br />
            </p>
            {{text0}}<br>{{text0_1}}<br>{{text0_2}}<br>{{text0_3}}
            <br>{{text0_4}}<br>{{text0_5}}<br>{{text0_6}}<br>{{text0_7}}
            <br>{{text0_8}}<br>{{text0_9}}<br>{{text0_10}}
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
                    {{text1}}<br>{{text1_1}}<br>{{text1_2}}<br>{{text1_3}}<br>{{text1_4}}<br>{{text1_5}}
                
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
               
               {{text2_0}}<br>{{text2_1}}<br>{{text2_2}}<br>{{text2_3}}<br>{{text2_4}}<br>{{text2_5}}<br>{{text2_6}}
                </div>
                <br/>
                <div>
       
            {{text2_7}}<br>{{text2_8}}<br>{{text2_9}}<br>{{text2_10}}<br>{{text2_11}}<br>{{text2_12}}<br>{{text2_13}}<br> 
            {{text2_14}}<br>{{text2_15}}<br>{{text2_16}}<br>{{text2_17}}
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
            {{text3_1}}<br>{{text3_2}}<br>{{text3_2}}<br>{{text3_3}}<br>{{text3_4}}<br>{{text3_5}}<br>{{text3_6}}
               <br>{{text3_7}}<br>{{text3_8}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>
           <div class="grafik4">
    <v-img src="../assets/grafik_strichsenk_1.svg" />
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
                {{text4_desktop1}}
                <div>
                {{text4_1}}<br>{{text4_2}}<br>{{text4_3}}<br>{{text4_4}}<br>{{text4_5}}<br>{{text4_6}}
               <br>{{text4_7}}<br>{{text4_8}}<br>{{text4_9}}<br>{{text4_10}}<br>{{text4_11}}<br>{{text4_12}}
                 <br>{{text4_13}}<br>{{text4_13}}<br>
              

                {{text4_21}}<br>{{text4_22}}<br>{{text4_23}}<br>{{text4_24}}<br>{{text4_25}}<br>
                {{text4_26}}<br>{{text4_27}}<br>
     
                {{text4_31}}<br>{{text4_32}}<br>{{text4_33}}<br>{{text4_34}}<br>{{text4_35}}<br>{{text4_36}}<br>{{text4_37}}<br>
                {{text4_38}}<br>
            
          
                {{text4_41}}<br>{{text4_42}}<br>{{text4_43}}<br>{{text4_44}}<br>{{text4_45}}<br>{{text4_46}}<br>
            
                </div>
            </Highlightable>
        </v-col>
    </v-row>

    <br>
       <!-- Einfügen einer Legende -->
       <b>Legende:</b>
       <div class="legend" align="right">
        <v-row  align="center">
            <v-col cols="12">
            
            <div class="icon2"> <v-img src="../assets/rez_emotion.png" height="80" width="80"/></div>
            <div class="icon2"> <v-img src="../assets/rez_bezug.png" height="80" width="80"/></div>
            <div class="icon2"> <v-img src="../assets/rez_sprachstil.png" height="80" width="80"/></div>
            <div class="icon2"> <v-img src="../assets/rez_details.png" height="80" width="80"/></div>
            
            </v-col>
        </v-row>
        </div>
        <div>
            <!-- Verlinkung und Timer wird aktiviert -->
    <Stopwatch to="/buchrezension2" needTimer="true" />
        </div>
</tablet-menu>

  <!-- User nutzt Desktop -->
   <desktop-menu v-if="$mq === 'desktop'">
        <div>
    <v-row class="rezension" align="center">

        <v-col cols="4">
            <div class="icon"> <div class="bild1"><v-img src="../assets/rez_details.png" height="100" width="100"/></div></div>

        </v-col>
        <v-col cols="7">
            <!-- Highlighting funktion mit id zur speicherung -->
            <Highlightable class="highlight1" @share="onShare" @highlight="onHighlight" id="1_Page1">
                <div>
            <p>Der Abschluss der Kaskade?
               <br />
            </p>
            {{text0_desktop}}
            <br/>
            {{text0_9}}
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
                    
                    {{text1_desktop}}
                
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
            {{text2_desktop}}
                </div>
                <br/>
                {{text2_desktop2}}
                <div>
           
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
    <v-img src="../assets/grafik_strichsenk_1.svg" />
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
                {{text4_desktop1}}
                <div>
            {{text4_desktop}}
                </div>
                <br />
                   <div>
            {{text4_desktop2}}
            <br/>
            {{text4_desktop3}}
            <br/>
            {{text4_desktop4}}
                </div>
            </Highlightable>
        </v-col>
    </v-row>

    <br>
       <!-- Einfügen einer Legende -->
       
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
            <!-- Verlinkung und Timer wird aktiviert -->
    <Stopwatch to="/buchrezension2" needTimer="true" />
        </div>
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
    mobile: 567,
    tablet: 992,
    desktop: Infinity,
  }
})
export default //PopUp falls der User zurück geht
{
    beforeRouteLeave(to, from, next) {
    if (to.path ==='/buchrezension2' ){
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
            text0_desktop:'Der Welt steht mit der Kaskade ein Krieg bevor. Aber wie geht es jetzt bei Elena und Raphael weiter? Beim letzten Kampf wurde Elena tödlich verletzt und wie es scheint, tritt Kassandras Vorhersage ein. Aber wer Elena kennt, der weiß, dass \
            nichts so kommt wie vorhergesagt. Denn Elena glaubt an die Wandelbarkeit des Schicksals.',


            text0:' Der Welt steht mit der Kaskade ein Krieg',
            text0_1:'bevor. Aber wie geht es jetzt bei Elena',
            text0_2:'und Raphael weiter? Beim letzten Kampf',
            text0_3:'wurde Elena tödlich verletzt und wie es',
            text0_4:'scheint, tritt Kassandras Vorhersage ein.',
            text0_5:'Aber wer Elena kennt, der weiß, dass',
            text0_6:'nichts so kommt wie vorhergesagt. Denn',
            text0_7:'Elena glaubt an die Wandelbarkeit des ',
            text0_8:'Schicksals.',
            text0_9:'Die Charaktere sind glaube ich bereits',
            text0_10:' allen bekannt.',
           
           text1_desktop:'Wer die Reihe jetzt anfangen möchte, dem rate ich von Anfang an zu lesen denn die Handlungen bauen auf einander \
            auf und führen zum unweigerlich folgenden Knall. Denn der Krieg mit Lijuan lässt sich nicht mehr vermeiden.',

           text1: 'Wer die Reihe jetzt anfangen möchte,',
            text1_1:' dem rate ich von Anfang an zu lesen, ',
            text1_2:'denn die Handlungen bauen auf einander ',
            text1_3:'auf und führen zum unweigerlich ',
            text1_4:'folgenden Knall. Denn der Krieg mit Lijuan ',
            text1_5:'lässt sich nicht mehr vermeiden.',
          
            text2_desktop:'Die Liebe der Beiden ist noch stärker geworden und auch wenn Elena ihre Flügel vermisst, \
            stürzt sie sich doch von einem Abenteuer in das nächste. \
            Aber erstmal muss sie stärker werden, denn der Prozess zur Unsterblichkeit ist abgeschlossen.',

            
            text2_0:'Die Liebe der Beiden ist noch stärker ',
            text2_1:'geworden und auch wenn Elena ihre',
            text2_2:'Flügel vermisst, stürzt sie sich doch von',
            text2_3:'einem Abenteuer in das nächste. Aber',
            text2_4:'erstmal muss sie stärker werden, denn ',
            text2_5:'der Prozess zur Unsterblichkeit ist ',
            text2_6:'abgeschlossen.',

            text2_desktop2:'Aber die Entwicklung rund um Lijuan ist noch nicht fertig erzählt und auch erwachen immer mehr Uralte. \
            Darunter auch jemand, den Illium gut kennt und eigentlich nicht sehen will. \
            Aber die Kaskade hat noch für viele eine Überraschung auf Lager. \
            Hier kommt eine rasante Entwicklung nach der anderen und man kann sich vorstellen, \
            dass die Engel, Vampire und Menschen nicht zum Luft holen kommt. ',

           text2_7:'Aber die Entwicklung rund um Lijuan ist',
           text2_8:'noch nicht fertig erzählt und auch',
           text2_9:'erwachen immer mehr Uralte. Darunter',
           text2_10:'auch jemand, den Illium gut kennt und',
           text2_11:'eigentlich nicht sehen will. Aber die',
           text2_12:'Kaskade hat noch für viele eine ',
           text2_13:'Überraschung auf Lager. Hier kommt ',
           text2_14:'eine rasante Entwicklung nach der anderen',
           text2_15:'und man kann sich vorstellen, dass die',
           text2_16:'Engel, Vampire und Menschen nicht zum',
           text2_17:'Luft holen kommt.',
           

           text3:'Der Schreibstil ist wie immer spannend, emotional, bildgewaltig und mitreißend. Nalini Singh schafft es den Leser mit Handlungen zu überraschen, die man sich so nicht vorgestellt hat. Der Erzählstil ist in der dritten Person. Wird aber immer mal wieder aus einer anderen Sicht erzählt.',
            text3_1:'Der Schreibstil ist wie immer spannend,',
            text3_2:' emotional, bildgewaltig und mitreißend.',
            text3_3:'Nalini Singh schafft es den Leser mit',
            text3_4:'Handlungen zu überraschen, die man sich',
            text3_5:'so nicht vorgestellt hat. Der Erzählstil ist ',
            text3_6:'in der dritten Person. Wird aber immer ',
            text3_7:'mal wieder aus einer anderen Sicht',
            text3_8:'erzählt.',

            text4_desktop1:'Meine Meinung:',
            
            text4_desktop:'Wow, das war ein Abschluss! \
            Ich habe mir im Vorfeld schon das englische Buch zu Gemüte geführt, \
            da ich es nicht erwarten konnte wie es mit den Beiden weitergeht und was soll ich sagen? \
            Meine Vermutungen haben sich zum Teil bestätigt. Zum anderen waren sie aber auch traurig. \
            Die Handlung hat die Autorin aber schlüssig aufgebaut und erzählt. \
            Es war ein wahres Funkenmeer an Emotionen, man fieberte mit den Engeln mit und was passiert \
            denn jetzt auch mit dem allseits beliebten Kolibri?',

            text4_1:'Wow, das war ein Abschluss! Ich habe mir',
            text4_2:'Ich habe mir im Vorfeld schon das ',
            text4_3:'englische Buch zu',
            text4_4:'Gemüte geführt, da ich es nicht erwarten',
            text4_5:'konnte wie es mit den Beiden weitergeht',
            text4_6:'und was soll ich sagen? Meine',
            text4_7:'Vermutungen haben sich zum Teil',
            text4_8:'bestätigt. Zum anderen waren sie aber ',
            text4_9:'auch traurig. Die Handlung hat die Autorin ',
            text4_10:'aber schlüssig aufgebaut und erzählt. Es',
            text4_11:'war ein wahres Funkenmeer an ',
            text4_12:'Emotionen, man fieberte mit den Engeln',
            text4_13:'mit und was passiert denn jetzt auch mit',
            text4_14:'dem allseits beliebten Kolibri?',
            


            text4_desktop2:'Die Charaktere sind mir in der ganzen Zeit ans Herz gewachsen und als ich entdeckte, \
            dass es einen weiteren Band mit anderen Protagonisten (bereits bekannte) gibt, \
            war ich aus dem Häuschen, denn hier freue ich mich schon darauf.',

            text4_21:'Die Charaktere sind mir in der ganzen Zeit',
            text4_22:'ans Herz gewachsen und als ich',
            text4_23:'entdeckte, dass es einen weiteren Band',
            text4_24:'mit anderen Protagonisten (bereits ',
            text4_25:'bekannte) gibt, war ich aus dem',
            text4_26:'Häuschen, denn hier freue ich mich schon',
            text4_27:'darauf.',



            text4_desktop3:'Aber genauso hoffe ich auch auf eine Geschichte mit und rund Illium, \
            denn auch er hat einen Abschluss verdient. Es gibt auch andere Charaktere, \
            deren Handlungsstränge noch offen scheinen. Hier lässt sich vermuten, \
            dass die Autorin noch weitere Pläne für die weitere Entwicklung hat.',

            text4_31:'Aber genauso hoffe ich auch auf eine',
            text4_32:'Geschichte mit und rund Illium, denn auch',
            text4_33:'er hat einen Abschluss verdient. Es gibt',
            text4_34:'auch andere Charaktere, deren ',
            text4_35:'Handlungsstränge noch offen scheinen.',
            text4_36:'Hier lässt sich vermuten, dass die Autorin',
            text4_37:'noch weitere Pläne für die weitere ',
            text4_38:'Entwicklung hat.',


             text4_desktop4:'Ich bin eine begeisterte Leserin dieser Serie seit Stunde 1 und hoffe, \
            dass uns Nalini Singh mit weiteren Geschichten rund um ihre Gilde der Jäger begeistert! \
            Vielen Dank für die wunderbare Unterhaltung!',

            text4_41:'Ich bin eine begeisterte Leserin dieser',
            text4_42:'Serie seit Stunde 1 und hoffe, dass uns',
            text4_43:'Nalini Singh mit weiteren Geschichten',
            text4_44:'rund um ihre Gilde der Jäger begeistert!',
            text4_45:'Vielen Dank für die wunderbare',
            text4_46:'Unterhaltung!',


            highlight: []
        }
    },
    components: {
        Highlightable,
        Stopwatch
    },
    methods: 
    //highlighting funktionen
    {
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
<!-- Media:Skalierung für verschiedene Endgeräte,
Css eigenschaften -->
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
    .icon {
    width: 100px;
    height: 100px;
    background-color: rgb(247, 247, 247);
    justify-content: center;
    margin: 5px;
    float: left;
}
    .icon2 {
    width: 80px;
    height: 80px;
    justify-content: center;
    margin: 5px;
    float: right;
}
  .bild1 {
    position: relative;
    z-index: 5;
    width: 450px;
    height: 0px;
    left: 0px;
    top: -26px;
}
.grafik1 {
  position: relative;
    z-index: 5;
    width: 374px;
    height: 0px;
    left: -134px;
    top: -163px;
}
.grafik2 {
       position: relative;
    z-index: 5;
    width: 458px;
    height: 0px;
    left: -179px;
    top: -59px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 500px;
    height: 0px;
    left: -199px;
    top: -214px;
}
.grafik4 {
   position: relative;
    z-index: 5;
    width: 907px;
    height: 0px;
    left: -414px;
    top: -87px;
}
.dreieck1 {
   position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 20px;
    top: 42px;
}
.dreieck2 {
       position: relative;
    z-index: 5;
    width: 116px;
    height: 0px;
    left: 6px;
    top: 191px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 115px;
    height: 0px;
    left: 8px;
    top: 59px;

}
.dreieck4 {
   position: relative;
    z-index: 5;
    width: 130px;
    height: 0px;
    left: 0px;
    top: 396px;
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
    width: 374px;
    height: 0px;
    left: -100px;
    top: -163px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 476px;
    height: 0px;
    left: -155px;
    top: -59px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 533px;
    height: 0px;
    left: -186px;
    top: -217px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 902px;
    height: 0px;
    left: -380px;
    top: -86px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 95px;
    height: 0px;
    left: 50px;
    top: 40px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 52px;
    top: 200px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 52px;
    top: 69px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 52px;
    top: 404px;
}
 .bild1 {
    position: relative;
    z-index: 5;
    width: 450px;
    height: 0px;
    left: 0px;
    top: -26px;
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
    width: 245px;
    height: 0px;
    left: 24px;
    top: -112px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 261px;
    height: 0px;
    left: 16px;
    top: -34px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 277px;
    height: 0px;
    left: 7px;
    top: -118px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 524px;
    height: 0px;
    left: -123px;
    top: -48px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 20px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 105px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 32px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 237px;
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
    width: 200px;
    height: 0px;
    left: 107px;
    top: -89px;
}
.grafik2 {
        position: relative;
    z-index: 5;
    width: 270px;
    height: 0px;
    left: 11px;
    top: -34px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 276px;
    height: 0px;
    left: 7px;
    top: -118px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 521px;
    height: 0px;
    left: -122px;
    top: -47px;
}
.dreieck1 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 111px;
    top: 21px;
}
.dreieck2 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 105px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 32px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 109px;
    top: 236px;
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
 .icon2 {
    width: 100px;
    height: 100px;
    justify-content: center;
    margin: 5px;
    float: right;
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
    width: 200px;
    height: 0px;
    left: 107px;
    top: -89px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 202px;
    height: 0px;
    left: 106px;
    top: -28px;
}
.grafik3 {
    position: relative;
    z-index: 5;
    width: 213px;
    height: 0px;
    left: 102px;
    top: -93px;
}
.grafik4 {
    position: relative;
    z-index: 5;
    width: 413px;
    height: 0px;
    left: -3px;
    top: -34px;
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
    top: 81px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 170px;
    top: 21px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 171px;
    top: 189px;
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
    top: -53px;
}
.grafik2 {
    position: relative;
    z-index: 5;
    width: 170px;
    height: 0px;
    left: 122px;
    top: -30px;
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
    width: 290px;
    height: 0px;
    left: 62px;
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
    left: 167px;
    top: 46px;
}
.dreieck3 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 168px;
    top: 17px;
}
.dreieck4 {
    position: relative;
    z-index: 5;
    width: 89px;
    height: 0px;
    left: 171px;
    top: 129px;
}
}
</style>

