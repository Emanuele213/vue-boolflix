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
      });
      // Serie
      axios.get(this.apiSeries, {
        params: {
          api_key: this.key,
          query: this.searchString,
          language: this.lang,
        },
      }).then((axiosResponse) => {
        this.arrSeries = axiosResponse.data.results;
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
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
</style>
