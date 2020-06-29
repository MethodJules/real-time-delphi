<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <p>Während ich die Buchrezension betrachtet habe, konnte ich die meisten Ablenkungen ausblenden.</p>
                <v-radio-group v-model="these1" row>
                    <v-radio label="stimme überhaupt nicht zu" value="radio-1"></v-radio>
                    <v-radio label="..." value="radio-2"></v-radio>
                    <v-radio label="..." value="radio-3"></v-radio>
                    <v-radio label="..." value="radio-4"></v-radio>
                    <v-radio label="stimme voll zu" value="radio-5"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        these1: null,
      }
    },
  }
</script>