<template>
    <v-container>
              <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
        <strong>11%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
        <div id="datenschutz">
            <h2>{{node.title}}</h2>
            <div><span v-html="node.html"></span></div>
            <NumberQuestion v-for="question in node.questions" :question="question.question" :label="question.label" :key="question.label" />
            <v-btn to="/begruessung">Zurück</v-btn>
            <v-btn to="/hintergrund">Weiter</v-btn>
        </div>
    </v-container>    
</template>
<script>
import APIService from '@/services/api.service'
import NumberQuestion from '@/components/NumberQuestion'
//import Question from '@/components/Question';
export default {
    components: {
        //Question
        NumberQuestion
    },
    data() {
        return {
            node: APIService.get(1),
        }
    }
}
</script>