<template>
  <v-app >
    //Stepper eins 
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Begrüßung/Einleitung</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Datenschutz</v-stepper-step>        
        <v-divider></v-divider>       
        
      </v-stepper-header>                              
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card >
            
            Vielen Dank,
            <br />Für Ihre Teilnahme an der Umfrage
            Der vorliegende Befragungsbogen bezieht sich auf den Besuch von OnlineVerkaufsplattformen, auf denen man sich über Produkte (wie z.B. Bücher)
            informieren und diese käuflich erwerben kann.
            Der Befragungsbogen umfasst drei Bereiche:
            <br />1. Pre-Fragebogen
            <br />2. Simulation Einkauf auf einer Online-Verkaufsplattform
            <br />3. Post-Fragebogen
            <br />Bitte lesen Sie alle Anweisungen und Aussagen aufmerksam durch. Nehmen
            Sie sich ausreichend Zeit, um die Aufgaben überlegt zu bearbeiten. Wenn Ihnen
            einmal die Entscheidung schwerfällt, überlegen Sie, welche Lösung noch am
            ehesten zutrifft.
          </v-card>

         <v-btn color="primary" @click="e1 = 2">Weiter</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card >
            Uns interessiert Ihre ehrliche, persönliche Meinung. Die Befragung findet
            anonym statt, es werden keine persönlichen Angaben verarbeitet.
            <br />Einzelne
            Fragebögen können nicht auf einzelne Personen zurückgeführt werden.
          <ID />
          </v-card>

          <v-btn color="primary" @click="e1 = 3">Weiter</v-btn>
          
        </v-stepper-content>
                  
        </v-stepper-items>
    </v-stepper> 
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>

    //Stepper 2
      <v-app id="inspire">
      <v-stepper v-model="e1">
       <v-stepper-header>
       <v-stepper-step :complete="e1 > 3"  step="A1">:Hintergrund zur Person</v-stepper-step>
        <v-divider></v-divider>
         <v-stepper-step :complete="e1 > 4"  step="A2">Hintergrund zur Person Teil 2</v-stepper-step>
          <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 5" step="A3">Simulation Einkauf auf einer Online-Verkaufsplattform</v-stepper-step>
            <v-divider></v-divider>
             </v-stepper-header>

          <v-stepper-items>
          <v-stepper-content step="3">
          <v-card>
          <v-col>
          <p>Bitte beantworten Sie die Fragen zum Hintergrund der Person</p>
          <Gender />
          <Graduation />
          <Question />
        </v-col></v-card>

          <v-btn color="primary" @click="e1 = 4">Weiter</v-btn>
        </v-stepper-content>

         <v-stepper-content step="4">
          <v-card>
          <v-col>
          <p>Bitte beantworten Sie die Fragen zum Hintergrund der Person</p>
          <Question2 />
        </v-col></v-card>

          <v-btn color="primary" @click="e1 = 5">Weiter</v-btn>
        </v-stepper-content>

        <v-stepper-content step="5">
          <v-card>
            <v-col>
      Sie möchten ein bestimmtes Buch online erwerben und besuchen dazu eine Online-Verkaufsplattform. 
      Sie wollen sich vor dem Kauf über das
      Buch informieren und prüfen, ob es Ihnen wirklich gefallen könnte. Hierfür lesen Sie einige 
      Buchrezensionen von Kunden, die das Buch bereits gelesen haben.
      Sie interessiert hauptsächlich, wie andere Kunden den Sprachstil und die 
      Erzählperspektive im Buch bewerten. Der Sprachstil ist die Art und Weise, 
      etwas mit Worten oder in geschriebener Form zu äußern. Unter Erzählperspektive versteht 
      man die Sicht, aus der ein Buch erzählt wird.
      Daher suchen Sie gezielt nach diesen Informationen in den Rezensionen, um schnell und gezielt eine 
      Kaufentscheidung treffen zu können. Sie
      haben wenig Zeit für das Lesen der Rezensionen und wollen schnellstmöglich diese Informationen finden.
      Im Folgenden sehen Sie die Produktbeschreibung eines Buches und eine Auswahl an Buchrezensionen:
      <br />1. Lesen Sie zunächst die Produktbeschreibung zum Buch aufmerksam durch.
      <br />2. Markieren Sie schnellstmöglich in den Buchrezensionen die relevanten Textstellen, also die Textstellen, 
      in denen der Sprachstil und/oder die
      Erzählperspektive angesprochen werden, mit einem Textmarker oder unterstreichen Sie die Textstellen. 
      Falls Sie aus Versehen falsche
      Textstellen markieren, streichen Sie diese einfach durch.
          </v-col></v-card>

        <v-btn color="primary" @click="e1 = 6">Weiter</v-btn>
          </v-stepper-content>

           </v-stepper-items>
          </v-stepper>

            <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
                               
  //Stepper 3
  
    <v-app id="inspire">
     <v-stepper v-model="e1">
        <v-stepper-header>                     
           <v-stepper-step :complete="e1 > 6" step="B1">Simulation Einkauf auf einer Online-Verkaufsplattform</v-stepper-step>
               <v-divider></v-divider>
                <v-stepper-step :complete="e1 >7" step="B2">Buch1</v-stepper-step>
                 <v-divider></v-divider>
                 <v-stepper-step :complete="e1 >8" step="B2">Buch2</v-stepper-step>
                  <v-divider></v-divider>
                   <v-stepper-step :complete="e1 >9" step="B3">Buch3</v-stepper-step>
                   <v-divider></v-divider>
                   <v-stepper-step :complete="e1 >10" step="B4">Buch4</v-stepper-step>
                   </v-stepper-header>

                    <v-stepper-items>
                    <v-stepper-content step="6">
                    <v-card>
                    <Rezension />
                     </v-card>
                     <v-btn color="primary" @click="e1 = 7">Weiter</v-btn>
                      </v-stepper-content>
                   </v-stepper-items>
                    
                 <v-stepper-content step="7">
          <v-card>
          <Buch image_src="buch1.png" />
            </v-card>
            <v-btn color="primary" @click="e1 = 8">Weiter</v-btn>
        </v-stepper-content>

          <v-stepper-content step="8">
          <v-card>
            <Buch image_src="buch2.png" />
            </v-card>
            <v-btn color="primary" @click="e1 = 9">Weiter</v-btn>
        </v-stepper-content>

          <v-stepper-content step="9">
          <v-card>
          <Buch image_src="buch3.png" />
            </v-card>
            <v-btn color="primary" @click="e1 = 10">Weiter</v-btn>
        </v-stepper-content>

          <v-stepper-content step="10">
          <v-card>
            <Buch image_src="buch4.png" />
            </v-card>
            <v-btn color="primary" @click="e1 = 11">Weiter</v-btn>
        </v-stepper-content>
     </v-stepper>
      //Stepper 4
  
    <v-app id="inspire">
     <v-stepper v-model="e1">
        <v-stepper-header>                     
           <v-stepper-step :complete="e1 > 11" step="C1">Teil3</v-stepper-step>
               <v-divider></v-divider>
                <v-stepper-step :complete="e1 >12" step="C2">Teil3_2</v-stepper-step>
                 <v-divider></v-divider>
                   </v-stepper-header>

                    <v-stepper-items>
             <v-stepper-content step="11">
          <v-card>
          <FragenTeil3 />
            </v-card>
            <v-btn color="primary" @click="e1 = 12">Weiter</v-btn>
            </v-stepper-content>
            
            <v-stepper-content step="12">
          <v-card>
          <FragenTeil32 />
          </v-card>
          <v-btn color="primary" @click="e1 = 13">Weiter</v-btn>
        </v-stepper-content>
         </v-stepper-items>
      </v-stepper>
                                </v-app>
  </v-app>
      </v-app>
      
  </v-app>
 
  
                              
</template>

<script>
import Buch from './Buch'
import ID from './ID'
import Gender from './Gender'
import Graduation from './Graduation'
import Question from './Question'
import Rezension from './Rezension'
import FragenTeil3 from './FragenTeil3'
import FragenTeil32 from './FragenTeil32'
import Question2 from './Question2'

export default {
  data() {
    
    return {
      e1: 1
    };
  },
  components: {
    Buch,
    Rezension,
    ID,
    Gender,
    Graduation,  
    Question,
    Question2,
    FragenTeil3,
    FragenTeil32
  },
  props: {
    source: String
  }
};
</script>