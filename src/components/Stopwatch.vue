<template>
<!-- Stopuhr  -->
        <v-btn :to="to" @click="callTimer()">Weiter</v-btn>
</template>

<script>
    export default {
        props: ['to', 'needTimer'],
        data() //Format der Zeiteinstellung
        {
            return {
                formattedTime: '00:00:00',
                currentTimer: 0,
            }

        },
        created() //Erstellt einen Timer
        {
            if (this.$props.needTimer == "true") {
                this.tick();
            }

        },
        beforeDestroy() //Löscht den Timer
        {
            window.clearInterval(this.ticker);

        },
        methods: {
            callTimer() //Speichert die Zeit im Store
            {
                window.clearInterval(this.ticker);
                if (this.$props.needTimer == "true") {
                    this.$store.dispatch('stopwatch/addStopwatch', this.formattedTime);
                }
            },
            tick() 
            {
                this.ticker = setInterval(() => {
                    this.currentTimer++;
                    this.formattedTime = this.formatTime(this.currentTimer);
                }, 1000)
            },
            formatTime(seconds) {
                let measuredTime = new Date(null);
                measuredTime.setSeconds(seconds);
                let MHSTime = measuredTime.toISOString().substr(11, 8);
                return MHSTime;
            }
        }

    }
</script>