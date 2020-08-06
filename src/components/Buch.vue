<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>


                <v-img :src="require(`@/assets/${buch_cover}`)" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
      return {
        buch_cover: null,
      }
    },
    props: {
     buch_cover: String
    }

}
</script>