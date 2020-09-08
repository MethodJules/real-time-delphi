<template>
    <v-container>
  <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
      <v-progress-linear value="27"></v-progress-linear>
        <strong>27%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
        <h1>Buchbeschreibung zu „Gilde der Jäger - Engelskrieg"</h1>
        <p>Unten sehen Sie die Buchinformation eines Händlers. Bitte lesen Sie diese aufmerksam durch.</p>

        <v-row class="rezension" align="center">
        <v-col cols="3">


            <v-img :src="require(`@/assets/${node.img_src}`)"  width="248" height="360"/>


        </v-col>
        <v-col cols="8">

        <div>
            <p><br /><b>Gilde der Jäger – Engelskrieg</b>
            <br />Von Nalini Singh
            <br>
            <br /><b>Inhaltsangabe zu "Gilde der Jäger - Engelskrieg"</b>
            <br />"Ich verschlinge die GILDE-DER-JÄGER-Bücher. Sie sind perfekt!"  - SYLVIA DAY
            <br>
            <br />Die Welt der Engel, Jäger und Vampire steht vor dem Abgrund. Eine neue Gefahr hat sich erhoben und bedroht alles, was ist. Gildejägerin Elena Deveraux, der erste Mensch, der zu einem Engel wurde, und ihr Gefährte, der Erzengel Raphael, Herrscher von New York, haben sich unwiderruflich verändert und niemand weiß, wie sich diese Entwicklung auswirken wird. Nie war es so gefährlich, unsterblich zu sein ...
            <br>
            <br />"Nalini Singhs GILDE-DER-JÄGER-Serie überwältigt mit Schönheit und Sinnlichkeit!" HEROES AND HEARTBREAKERS
            Band 12 der GILDE DER JÄGER von SPIEGEL-Bestseller-Autorin Nalini Singh</p>
        </div>
        </v-col>
        </v-row>
        <v-form ref="form">
          <div v-for="question in node.questions" :key="question.question">
            <!-- <v-img :src="require(`@/assets/${node.img_src}`)"  width="250" height="360"/> -->
              <SelectQuestion @update="update" :question="question.question" :answers="question.answeroptions" />
          </div>
        </v-form>
<p><strong>Hinweis: Die Frage muss beantwortet werden!</strong></p>
        <div v-show="isValid">
          <div v-if="Math.random() < 0.3">
            <Stopwatch to="/buchrezensionPageUnderline" needTimer="true" />
          </div>
          <div v-else-if="Math.random() > 0.7">
            <Stopwatch to="/buchrezension" needTimer="true"/>
          </div>
            <div v-else> <Stopwatch to="/buchrezensionPageRaw" needTimer="true" />
          </div>
        </div>

    </v-container>
</template>

<script>
import APIService from '@/services/api.service'
import SelectQuestion from '@/components/SelectQuestion'
import Stopwatch from '@/components/Stopwatch'

export default {
    components: {
        SelectQuestion,
        Stopwatch
    },
    data() {
        return {
            isValid: false,
            buch_gelesen: 0,
            node: APIService.get(3)
        }
    },
    props: {
     buch_cover: String
    },
    methods: {
      update() {
            console.log('Validation: ' + this.isValid);
            this.isValid = true;
            var childs = this.$refs.form.$children;
            for (let child of childs) {
                if (child.selection === "" || child.answer === "") {
                    this.isValid = false;
                }
            }
            //this.validate();
        }
    }
}
</script>
