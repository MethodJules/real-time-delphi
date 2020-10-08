<template>
    <v-container>
              <div>

    <v-progress-linear
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
      <v-progress-linear value="91"></v-progress-linear>
        <strong>91%</strong>
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
                    <SelectQuestion @update="update" :question="question.question" :answers="question.answeroptions" />
                </div>
            </div>
        </v-form>
<p><strong>Hinweis: Alle Fragen müssen beantwortet werden!</strong></p>
        <v-btn v-show="isValid" to="/endpage" @click="sendData">Weiter</v-btn>
    </v-container>
</template>

<script>
import APIService from '@/services/api.service'
import SelectQuestion from '@/components/SelectQuestion'
export default {
    beforeRouteLeave(to, from, next) {
    if (to.path ==='/endpage' ){
      return next()
    }
      else if (confirm('Um das Experiment nicht zu verfälschen, bleiben Sie bitte auf der Seite.')) {
        return next(false)
      }
      else{
        return next(false)
      }
    },
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
            node: APIService.get(5),
            isValid: false
        }
    },
    methods: {
        sendData() {
            console.log('Sende Daten...')
            this.$store.dispatch('senddata/sendData')
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
