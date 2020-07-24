<template>
    <v-container>
        <div id="datenschutz">
            <p>{{datenschutzText[1].text}}</p>
            <SelectQuestion :questionId="1" :question="datenschutzText[0].question" :answers="datenschutzText[0].answers" />
            <SelectQuestion :question="datenschutzText[1].question" :answers="datenschutzText[1].answers" />
            <v-btn to="/begruessung">Zurück</v-btn>
            <v-btn to="/hintergrund">Weiter</v-btn>
        </div>
    </v-container>    
</template>
<script>
import store_x from '@/store_x.js';
//import Question from '@/components/Question';
import SelectQuestion from '@/components/SelectQuestion'
export default {
    components: {
        //Question
        SelectQuestion
    },
    data() {
        return {
            datenschutzText: store_x.survey,
            nutzung: null,
        }
    },
    methods: {
        printValue() {
            console.log(this.nutzung);
        }
    },
}
</script>

<style scoped>
#datentschutz {
    margin: 0 auto;
    background: red;
}
</style>