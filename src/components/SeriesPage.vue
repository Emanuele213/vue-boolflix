<template>
  <div class="up-container">
    <h1>Serie</h1>
    <div class="main-container">
      <PosterMovieSeries
        v-for="series in arrSeries"
        :key="series.id"
        :poster="`https://image.tmdb.org/t/p/w300${series.poster_path}`"
        :title="series.name"
        :original-title="series.original_name"
        :lang="series.original_language"
        :average="series.vote_average"
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
    arrSeries: Array,
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
  .main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
}
}
</style>
