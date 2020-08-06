<template>
    <v-container>
  <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
        <strong>33%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
        <h1>Produktbeschreibung: Buch "Gilde der Jäger - Engelskrieg"</h1>
        <p>Unten sehen Sie die Produktinformationen des Händlers. Bitte lesen Sie diese aufmerksam durch.</p>
        <br /><b>Gilde der Jäger – Engelskrieg</b>
        <br />Von Nalini Singh
        <br>
        <br /><b>Inhaltsangabe zu "Gilde der Jäger - Engelskrieg"</b>
        <br />"Ich verschlinge die GILDE-DER-JÄGER-Bücher. Sie sind perfekt!"  - SYLVIA DAY
        <br>
        <br />Die Welt der Engel, Jäger und Vampire steht vor dem Abgrund. Eine neue Gefahr hat sich erhoben und bedroht alles, was ist. Gildejägerin Elena Deveraux, der erste Mensch, der zu einem Engel wurde, und ihr Gefährte, der Erzengel Raphael, Herrscher von New York, haben sich unwiderruflich verändert und niemand weiß, wie sich diese Entwicklung auswirken wird. Nie war es so gefährlich, unsterblich zu sein ...
        <br>
        <br />"Nalini Singhs GILDE-DER-JÄGER-Serie überwältigt mit Schönheit und Sinnlichkeit!" HEROES AND HEARTBREAKERS
        Band 12 der GILDE DER JÄGER von SPIEGEL-Bestseller-Autorin Nalini Singh

        <div v-for="question in node.questions" :key="question.question">
          <v-img :src="require(`@/assets/${node.img_src}`)"  width="250" height="360"/>
            <SelectQuestion :question="question.question" :answers="question.answeroptions" />
        </div>

        <v-btn to="/buchrezension">Weiter</v-btn>
    </v-container>
</template>

<script>
import APIService from '@/services/api.service'
import SelectQuestion from '@/components/SelectQuestion'

export default {
    components: {
        SelectQuestion
    },
    data() {
        return {
            buch_gelesen: 0,
            node: APIService.get(3)
        }
    },
    props: {
     buch_cover: String
    }
}
</script>