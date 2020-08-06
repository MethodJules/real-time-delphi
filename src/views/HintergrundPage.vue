<template>
    <v-container>
              <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
        <strong>22%</strong>
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
            <div v-if="question.question_type == 'number'">
                <NumberQuestion :question="question.question" :label="question.label" />
            </div>
            <div v-if="question.question_type == 'text'">
                <TextQuestion :question="question.question" :label="question.label" />
            </div>
        </div>

        <v-btn to="/buch">Weiter</v-btn>   
    </v-container>
</template>

<script>
import APIService from '@/services/api.service'
import SelectQuestion from '@/components/SelectQuestion'
import NumberQuestion from '@/components/NumberQuestion'
import TextQuestion from '@/components/TextQuestion'
export default {
    components: {
        SelectQuestion,
        NumberQuestion,
        TextQuestion
    },
    data() {
        return {
            geschlecht: 'w',
            alter: 0,
            abschluss: 0,
            sonstiger_abschluss: '',
            sonstiger_angestrebter_abschluss: '',
            angestrebter_abschluss: 0,
            studiengang: '',
            nutzung_endgeraete: 0,
            durchschnittliche_nutzung_endgeraete: 0,
            internetsurfen: 0,
            produkteinkauf: 0,
            produktrezensionen: 0,
            buechereinkauf: 0,
            buchrezensionen: 0,

            node: APIService.get(2)



        } 
    }
}
</script>