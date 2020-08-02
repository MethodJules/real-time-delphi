<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <v-img src="../assets/buch_cover.png" />
                <p>Haben Sie das aufgeführte Buch schon gelesen?</p>
                <v-radio-group v-model="rezensionBuch">
                    <v-radio label="Ja" value="j"></v-radio>
                    <v-radio label="nein" value="n"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
      return {
        rezensionBuch: null,
      }
    },
}
</script>