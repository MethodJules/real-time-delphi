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
    <v-row>
        <Highlightable @share="onShare" @highlight="onHighlight">
            <div>
                {{text}}
            </div>
        </Highlightable>
    </v-row>
</v-container>
</template>
<script>
import Highlightable from '@/components/Highlightable';

export default {
    data() {
        return {
            text: 'Der Tiger jagt das Zebra.',
            highlight: []
        }
    },
    components: {
        Highlightable
    },
    methods: {
        onHighlight(text) {
            this.highlight.push(text);
        },
        onShare(text) {
            console.log(text);
        },
        test() {
            if(this.highlight.length == 0) { //check if something is already highlighted
                return this.text;
            } else {
                var test = this.text;
                for (let high of this.highlight) {
                    alert(high.start);
                    var test1 = test.slice(0, high.start);
                    var test2 = test.slice(high.start, high.end)
                    var test3 = test.slice(high.end);

                    test2 = test2.replace(test2, '<span class="highlightText">' + test2 + '</span>')
                    test = test1 + test2 + test3;
                }
            }
            return test;
        }
    }
}
</script>
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