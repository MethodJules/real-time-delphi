<template>
    <v-container>
        <v-col>
            <p>{{question}}</p>
            <v-text-field :label="label" v-model="answer" />
        </v-col>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            answer: ''
        }
    },
    props: {
        question: String,
        label: String
    }
}
</script>