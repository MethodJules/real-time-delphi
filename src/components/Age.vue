<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <p>Bitte geben Sie kurz ihr Alter an</p>
                <v-text-field label="Alter" placeholder="Alter" v-model="age" filled/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            age: 0,
        }
    }
}
</script>