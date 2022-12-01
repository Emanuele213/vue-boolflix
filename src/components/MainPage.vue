<template>
  <main>
    <MoviePage :arr-movies="arrMovies" />
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
main {
  background-image: url('@/assets/img/sfondo.jpg');
  height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>
