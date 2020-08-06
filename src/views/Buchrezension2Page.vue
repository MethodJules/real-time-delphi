<template>
<v-container>
          <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="">
        <strong>55%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
    <h1>Buchrezension 2 zum Buch "Gilde der Jäger - Engelskrieg"</h1>
    <p>Bitte markieren Sie schnellstmöglich die Textstellen im Rezensionstext, welchen den <b>Sprachstil und/oder die Erzählperspektive</b> thematisieren.</p>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Showdown
               <br />
               Die Autorin ist mir bekannt und ich habe schon viele ihrer Bücher gelesen. Darunter die Reihen „Rock Kiss“ und „Age of Trinity“.
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Das Cover gefällt mir hier sehr gut. Also legte ich los zu lesen…. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Erzengel Raphael und seine Gildejägerin Elena hier nun schon zum 12ten mal in einer tollen Story vereint. Gemeinsame Kämpfe – alles verändert sich. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Ich mag alles an diesem Buch – die spürbare Romantik, die Liebe zwischen den beiden und die Fantasy der Autorin begeistert mich immer wieder. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Habe nicht alle Bände der Reihe gelesen und somit hatte ich am Beginn kurz Schwierigkeiten wieder in die Story rein zu finden was aber nach ein paar Seiten schon der Fall war. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Nalini Singh hat mich auch hier wieder überzeugt und ihr Schreibstil ist flüssig. Ab und an war es mir aber doch etwas zu anstrengend zu lesen und ich hab das Buch kurz unterbrochen. Es ist nichts für mal zwischendurch. Man muss dabei bleiben um in die Story wirklich abtauchen zu können.  
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
        <v-row class="rezension" align="center">
        <v-col cols="4">
            <div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/><div class="icon"/>
        </v-col>
        <v-col cols="8">
            <Highlightable @share="onShare" @highlight="onHighlight">
                <div>
            <p>Fazit: Spannender 12. Teil der Reihe. 
            </p>
                </div>
            </Highlightable>
        </v-col>
    </v-row>
    <v-btn to="/buchrezension3">Weiter</v-btn>
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