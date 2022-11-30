<template>
  <main>
    <MoviePage :arr-movie="arrMovies" />
    <SeriesPage :arr-series="arrSeries" />
  </main>
</template>

<script>
import SeriesPage from '@/components/SeriesPage.vue';
import MoviePage from '@/components/MoviePage.vue';

export default {
  components: {
    SeriesPage,
    MoviePage,
  },
  props: {
    arrMovies: Array,
    arrSeries: Array,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
