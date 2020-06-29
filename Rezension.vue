<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <v-img src="../assets/image_2020_06_08T15_25_22_813Z.png" />
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