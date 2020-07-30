<template>
    <v-container>
        <h1>Produktbeschreibung: Buch {{node.buch}}</h1>
        <p>Unten sehen Sie die Produktinformationen des Händlers. Bitte lesen Sie diese aufmerksam durch.</p>
        <v-img :src="node.img_src" aspect-ratio="3"/>
        <div v-for="question in node.questions" :key="question.question">
            <SelectQuestion :question="question.question" :answers="question.answeroptions" />
        </div>

        <v-btn>Zurück</v-btn><v-btn to="/buchrezension">Weiter</v-btn>
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
    }
}
</script>