<template>
    <v-container>
        <h1>Produktbeschreibung: Buch "Worüber wir schweigen"</h1>
        <p>Unten sehen Sie die Produktinformationen des Händlers. Bitte lesen Sie diese aufmerksam durch.</p>
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="3"/>
        <p>Haben Sie das oben aufgeführte Buch gelesen?</p>
        <v-radio-group v-model="buch_gelesen">
            <v-radio label="ja" />
            <v-radio label="nein" />
        </v-radio-group>
        <v-btn>Zurück</v-btn><v-btn to="/buchrezension">Weiter</v-btn>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            buch_gelesen: 0,
        }
    }
}
</script>