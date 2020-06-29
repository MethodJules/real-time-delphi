<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <p>Um die Zusammengehörigkeit der Seiten des Befragungsbogens 
                identifizieren zu können und zugleich Ihre Anonymität zu schützen, ist zunächst
                eine ID herzuleiten. Die ID setzt sich aus den Antworten a) bis d) zusammen.</p>
                
                <v-radio-group v-model="row">
             
              <v-text-field label="Eigener Geburtsmonat (Zahl)" placholder="Monat" v-model="monat" />
              <v-text-field label="3. Buchstabe des Familiennachnamens" placholder="Nachname" v-model="name" />
              <v-text-field label="Beliebige Ganze Zahl(0-9)" placholder="Zahl" v-model="zahl" />
              <v-text-field label="2. Buchstabe des eigenen Vornamens" placholder="Vorname" v-model="vorname" />
              
              
          </v-radio-group>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            ID: ` `,
        }
    }
}
</script>