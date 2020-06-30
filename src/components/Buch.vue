<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>


                <v-img :src="require(`@/assets/${image_src}`)" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
      return {
        Buch1: null,
      }
    },
    props: {
     image_src: String
    }

}
</script>