<template>
    <v-container>
           
            <v-col>
          <p>Wielange nutzen Sie schon ein Internetfähiges Endgerät(wie Tablet,Smartphone,Laptop,Desktop-PC?</p>
          <v-radio-group v-model="row">
              <v-radio label="0 Jahre" value="jahre0"></v-radio>
              <v-radio label="< 1 Jahr" value="jahre1"></v-radio>
              <v-radio label="1-2 Jahre" value="jahre2"></v-radio>
              <v-radio label="3-4 Jahre" value="jahre3"></v-radio>
              <v-radio label="5-6 Jahre" value="jahre5"></v-radio>
              <v-radio label="> 8 Jahre" value="jahr8"></v-radio> 
          </v-radio-group>
           </v-col>
               <v-col>
          <p>Sind Sie vertraut mit dem Surfen im Internet?</p>
          <v-radio-group >
              <v-radio label="Ja" value="ja"></v-radio>
              <v-radio label="Nein" value="nein"></v-radio>
          </v-radio-group>
           </v-col>
               <v-col>
          <p>Wie oft kaufen Sie typeischerweise Produkte au Online-Verkaufsplattfprmen</p>
          <v-radio-group >
              <v-radio label="Mindestens 1x im Monat" value="monat1"></v-radio>
              <v-radio label="Mindestens 1x in 2 Monaten" value="monat2"></v-radio>
              <v-radio label="Mindestens 1x in 3 Monaten" value="monat3"></v-radio>
              <v-radio label="Mindestens 1x in 4 Monaten" value="monat4"></v-radio>
              <v-radio label="Mindestens 1x in 5 Monaten" value="monat5"></v-radio>
              <v-radio label="Mindestens 1x in 6 Monaten" value="monat6"></v-radio> 
                <v-radio label="Höchstens alle halbe Jahre, eher seltener" value="monat7"></v-radio>
                <v-radio label="Nie" value="monat8"></v-radio>
          </v-radio-group>
           </v-col>
                <v-col>
          <p>Lesen Sie Kundenproduktrezension auf Online-Verkaufsplattformen, wenn Sie planen, 
                ein Produkt zu kaufen? (Kundenproduktrezensionen sind von Kunden verfasste Texte, 
                in denen Kunden ihre Meinung über Produkte teilen.)</p>
          <v-radio-group>
              <v-radio label="Ja" value="ja"></v-radio>
              <v-radio label="Nein" value="nein"></v-radio>
          </v-radio-group>
           </v-col>
                 <v-col>
          <p>Wie oft kaufen Sie typeischerweise Produkte au Online-Verkaufsplattfprmen</p>
          <v-radio-group >
              <v-radio label="Mindestens 1x im Monat" value="monat1"></v-radio>
              <v-radio label="Mindestens 1x in 2 Monaten" value="monat2"></v-radio>
              <v-radio label="Mindestens 1x in 3 Monaten" value="monat3"></v-radio>
              <v-radio label="Mindestens 1x in 4 Monaten" value="monat4"></v-radio>
              <v-radio label="Mindestens 1x in 5 Monaten" value="monat5"></v-radio>
              <v-radio label="Mindestens 1x in 6 Monaten" value="monat6"></v-radio> 
                <v-radio label="Höchstens alle halbe Jahre, eher seltener" value="monat7"></v-radio>
                <v-radio label="Nie" value="monat8"></v-radio>
          </v-radio-group>
           </v-col>

        
       
          <p>Lesen Sie Buchrezension von anderen Kunden auf Online-Verkaufsplattformen, 
                  wenn Sie planen, ein Buch zu kaufen? (Buchrezensionen
                sind von Kunden verfasste Texte, in denen Kunden ihre 
                Meinung über Bücher teilen.)</p>
          <v-radio-group >
              <v-radio label="Ja" value="ja"></v-radio>
              <v-radio label="Nein" value="nein"></v-radio>
          </v-radio-group>
           
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            question: '',
        }
    }
}
</script>