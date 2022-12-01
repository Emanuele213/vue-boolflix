<template>
  <div>
    <HeaderPage @search="search" />
    <MainPage
      :arr-movies="arrMovies"
      :arr-series="arrSeries"
    />
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';

export default {
  components: {
    HeaderPage,
    MainPage,
  },
  data() {
    return {
      apiMovies: 'https://api.themoviedb.org/3/search/movie',
      apiSeries: 'https://api.themoviedb.org/3/search/tv',
      key: '2c25a7f490bcfd7dcb51fef6e8c047d0',
      arrMovies: null,
      arrSeries: null,
      searchString: '',
      lang: 'it-IT',
    };
  },
  methods: {
    search(info) {
      this.searchString = info;
      console.log(`dati ${info}`);
      // Film
      axios.get(this.apiMovies, {
        params: {
          api_key: this.key,
          query: this.searchString,
          language: this.lang,
        },
      }).then((axiosResponse) => {
        this.arrMovies = axiosResponse.data.results;
        console.log(this.arrMovies);
      });
      // Serie
      axios.get(this.apiSeries, {
        params: {
          api_key: this.key,
          query: this.searchString,
          language: this.lang,
        },
      }).then((axiosResponse) => {
        console.log(axiosResponse);
        this.arrSeries = axiosResponse.data.results;
        console.log(this.arrSeries);
      });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
</style>
