<template>
  <div>
    <h1>MOVIE</h1>
    <div>
      <PosterMovieSeries
        v-for="movie in arrMovies"
        :key="movie.id"
        :poster="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
        :title-movie="movie.title"
        :original-title="movie.original_title"
        :lang="movie.original_language"
        :average="movie.vote_average"
      />
    </div>
  </div>
</template>

<script>
import PosterMovieSeries from '@/components/PosterMovieSeries.vue';

export default {
  components: {
    PosterMovieSeries,
  },
  props: {
    arrMovies: Array,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
