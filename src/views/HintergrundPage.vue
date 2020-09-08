<template>
    <v-container>
              <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
      <v-progress-linear value="18"></v-progress-linear>
        <strong>18%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
        <h2>{{node.title}}</h2>
        <div><span v-html="node.html"></span></div>
        <p><strong>Hinweis: Alle Fragen müssen beantwortet werden!</strong></p>
        <v-form ref="form">
            <div v-for="question in node.questions" :key="question.question">
                <div v-if="question.question_type == 'select'">
                    <SelectQuestion @update="update" :questionId="question.id" :question="question.question" :answers="question.answeroptions" />
                </div>
                <div v-if="question.question_type == 'number'">
                    <NumberQuestion @update="update" :question="question.question" :label="question.label" />
                </div>
                <div v-if="question.question_type == 'text'">
                    <TextQuestion @update="update" :question="question.question" :label="question.label" />
                </div>
            </div>
        </v-form>
        <p><strong>Hinweis: Alle Fragen müssen beantwortet werden!</strong></p>
            <Stopwatch v-show="isValid" to="/simulation" needTimer="true" />
    </v-container>
</template>

<script>
import APIService from '@/services/api.service'
import SelectQuestion from '@/components/SelectQuestion'
import NumberQuestion from '@/components/NumberQuestion'
import TextQuestion from '@/components/TextQuestion'
import Stopwatch from '@/components/Stopwatch'
export default {
    components: {
        SelectQuestion,
        NumberQuestion,
        TextQuestion,
        Stopwatch
    },
    data() {
        return {
            isValid: false,
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
    },
    methods: {
        validate() {
            console.log(this.$refs.form.$children);
            this.$refs.form.validate();
        },
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
