<template>
  <div>

    <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br>

  </div>
</template>

<script>
  export default {
    data: () => ({
      skill: 20,
    }),
  }
</script>