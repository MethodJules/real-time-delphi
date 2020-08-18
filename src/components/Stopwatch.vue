<template>
        <v-btn :to="to" @click="callTimer()">Weiter</v-btn>
</template>

<script>
    export default {
        props: ['to', 'needTimer'],
        data() {
            return {
                formattedTime: '00:00:00',
                currentTimer: 0,
            }

        },
        created() {
            if (this.$props.needTimer == "true") {
                this.tick();
            }

        },
        beforeDestroy() {
            window.clearInterval(this.ticker);

        },
        methods: {
            callTimer() {
                window.clearInterval(this.ticker);
                if (this.$props.needTimer == "true") {
                    this.$store.dispatch('stopwatch/addStopwatch', this.formattedTime);
                }
            },
            tick() {
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