<template>
<v-container>
    <h1>Buchrezension 1 zum Buch "Worüber wir schweigen"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den Sprachstil und/oder die Erzählperspektive thematisieren.</p>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <p>Kurzmeinung: Spannend, faszinierend und mit einer herlichen düsteren Simmung. Und dann dieses Ende: Diese Frau weiß wie man Thriller schreibt!</p>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <p>Kurzmeinung: Spannend, faszinierend und mit einer herlichen düsteren Simmung. Und dann dieses Ende: Diese Frau weiß wie man Thriller schreibt!</p>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <p>Kurzmeinung: Spannend, faszinierend und mit einer herlichen düsteren Simmung. Und dann dieses Ende: Diese Frau weiß wie man Thriller schreibt!</p>
        </v-col>
    </v-row>
</v-container>
</template>

<style scoped>
.icon {
    width: 50px;
    height: 50px;
    background-color: burlywood;
    justify-content: center;
    margin: 5px;
    float: left;
}

.rezension {
    border: 1px solid black;
    margin: 5px 0;
}


</style>