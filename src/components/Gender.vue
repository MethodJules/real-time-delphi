<template>
<v-container>
    <v-row align="center" justify="center">
        <v-col>
          <p>Bitte geben Sie ihr Geschlecht an</p>
          <v-radio-group v-model="row">
              <v-radio label="Weiblich" value="w"></v-radio>
              <v-radio label="Männlich" value="m"></v-radio>
              <v-radio label="Divers" value="d"></v-radio>
          </v-radio-group>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
  export default {
    data () {
      return {
        row: null,
      }
    },
  }
</script>