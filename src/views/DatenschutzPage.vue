<template>
    <v-container>
        <div id="datenschutz">
            <p><span v-html="node.html"></span></p>
            <NumberQuestion :question="node.question" :label="node.label" />
            <NumberQuestion :question="node2.question" :label="node2.label" />
            <NumberQuestion :question="node3.question" :label="node3.label" />
            <NumberQuestion :question="node4.question" :label="node4.label" />
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
            node2: APIService.get(2),
            node3: APIService.get(3),
            node4: APIService.get(4)
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