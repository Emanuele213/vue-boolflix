<template>
  <div class="poster-container">
    <div class="img-poster">
      <img
        :src="poster"
        :alt="titleMovie"
      >
    </div>
    <div>
      <h3>Nome film: {{ titleMovie }}</h3>
      <h3>Nome originale film: {{ originalTitle }}</h3>
      <h3>Lingua: {{ lang }}</h3>
      <h3>Media voti: {{ average }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    poster: String,
    titleMovie: String,
    originalTitle: String,
    lang: String,
    average: Number,
  },
};
</script>

<style lang="scss" scoped>

</style>
