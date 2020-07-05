<template>
<v-container>
    
        <v-col>
          <v-radio-group v-model="five">
              <v-radio label="Stimme überhaupt nicht zu" name='radio' value="1"></v-radio>
              <v-radio label="Stimme teilweise nicht zu" name="radio" value="2"></v-radio>
              <v-radio label="Neutral" name="radio" value="3"></v-radio>
              <v-radio label="Stimme teilweise zu" name="radio" value="4"></v-radio>
              <v-radio label="Stimme voll zu" name="radio" value="5"></v-radio>
          </v-radio-group>
        </v-col>

</v-container>
</template>
<script>
  export default {
    data () {
      return {
        five: null,
      }
    },
  }
</script>