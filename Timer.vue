<template>
	<v-container fluid>
    <v-layout>
      <v-flex xs12 pa-3>
        <v-card>
          <v-card-title >
            {{ timer }}
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-tile
                class="success"
                @click="$emit('start')"
                :disabled="state == 'running'"
              >
                <span class="white--text font-weight-bold text-uppercase">Start</span>
              </v-list-tile>

              <v-list-tile
                class="warning"
                @click="$emit('pause')"
                :disabled="state == 'stopped' || state == 'paused'"
              >
                <span class="white--text font-weight-bold text-uppercase">Pause</span>
              </v-list-tile>
              <v-list-tile
                class="error"
                @click="$emit('stop')"
                :disabled="state == 'stopped'"
              >
                <span class="white--text font-weight-bold text-uppercase">Stop</span>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Timer',
  props: ['timer', 'state']
}
</script>