<template>
  <div
    v-if="arrMovies"
    class="up-container"
  >
    <h1>MOVIE</h1>
    <div class="main-container">
      <PosterMovieSeries
        v-for="movie in arrMovies"
        :key="movie.id"
        :poster="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
        :title="movie.title"
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
.up-container {
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 3rem;
    margin: 1rem 0;
    color: yellow;
    text-shadow: 1rem 0rem 3rem;
  }
  .main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
}
}

</style>
