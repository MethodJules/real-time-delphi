<template>
    <v-container>
              <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
      <v-progress-linear value="82"></v-progress-linear>
        <strong>82%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
        <h2>{{node.title}}</h2>
        <div><span v-html="node.html"></span></div>
        <div v-for="question in node.questions" :key="question.question">
            <div v-if="question.question_type == 'select'">
                <SelectQuestion :question="question.question" :answers="question.answeroptions" />
            </div>
        </div>

        <v-btn to="/fragen2page">Weiter</v-btn>   
    </v-container>
</template>

<script>
import APIService from '@/services/api.service'
import SelectQuestion from '@/components/SelectQuestion'
export default {
    components: {
        SelectQuestion,
    },
    data() {
        return {
            teil3_1: 0 ,
            teil3_2: 0,
            teil3_3: 0,
            teil3_4: 0,
            teil3_5: 0,
            teil3_6: 0,
            teil3_7: 0,


  

            node: APIService.get(4)



        } 
    }
}
</script>
