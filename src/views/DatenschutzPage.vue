<template>
    <v-container>
              <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
      <v-progress-linear value="9"></v-progress-linear>
        <strong>9%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
        <div id="datenschutz">
            <h2>{{node.title}}</h2>
            <div><span v-html="node.html"></span></div>
            <NumberQuestion v-for="question in node.questions" :question="question.question" :label="question.label" :key="question.label" />
            <v-btn to="/hintergrund">Weiter</v-btn>
        </div>
    </v-container>    
</template>
<script>
import { mapState } from 'vuex'
import TextQuestion from '@/components/TextQuestion'
import NumberQuestion from '@/components/NumberQuestion'
export default {
    components: {
        TextQuestion,
        NumberQuestion
    },
    computed: mapState({
        nodes: state => state.datenschutz.data
    }),
    created() {
        this.$store.dispatch('datenschutz/getDataFromDrupal')
    },
    
}
</script>
