<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <p>Welchen höchsten beruflichen Ausbildungs- oder (Fach-)Hochschulabschluss haben Sie?</p>
                <v-radio-group v-model="graduation">
                    <v-radio label="Bachelor Universität" value="bachelor-uni"></v-radio>
                    <v-radio label="Bachelor Fachhochschule" value="bachelor-fh"></v-radio>
                    <v-radio label="Master Universität" value="master-uni"></v-radio>
                    <v-radio label="Master Fachhochschule" value="master-fh"></v-radio>
                </v-radio-group>
                <v-text-field label="Sonstiges" placholder="Sonstiges" v-model="graduation" />
                <v-text-field label="Welchen Studiengang studieren Sie" placholder="Studiengang" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            graduation: '',
        }
    }
}
</script>