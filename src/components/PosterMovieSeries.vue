<template>
  <div class="poster-container">
    <div class="img-poster">
      <img
        v-if="poster"
        class="img-size"
        :src="poster"
        :alt="title"
      >
      <img
        v-else
        src="@/assets/img/not-found.png"
        :alt="title"
      >
    </div>
    <div class="poster-absolute">
      <h3>Nome: {{ title }}</h3>
      <h3>Nome originale: {{ originalTitle }}</h3>
      <h3>Lingua: <lang-flag :iso="lang" /></h3>
      <h3>
        Media voti:
        <span
          v-for="index in (newAverage)"
          :key="index"
        >
          <font-awesome-icon icon="fa-solid fa-star" />
        </span>
        <span
          v-for="star in (5 -(newAverage))"
          :key="(star + 3)"
        >
          <font-awesome-icon icon="fa-regular fa-star" />
        </span>
        {{ prova }}
      </h3>
      <div class="scroll-summary">
        <h4>{{ summary }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
  components: {
    LangFlag,
  },
  props: {
    poster: String,
    title: String,
    originalTitle: String,
    lang: String,
    average: Number,
    summary: String,
  },
  data() {
    return {
      // variabile di prova
      newAverage: Math.ceil(this.average / 2),
    };
  },
};
</script>

<style lang="scss" scoped>
.poster-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 300px;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  .img-poster {
    position: relative;
  }
  .img-size {
  width: 300px;
  height: 400px;
  border: 5px solid yellow;
  border-radius: 1rem;
  }
.poster-absolute{
  position: absolute;
  z-index: 2;
  display: none;
  border-radius: 1rem;
  background-color: black;
  height: 400px;
    h3 {
      color: purple;
      padding: .5rem 1rem;
      opacity: 1;
      width: 300px;
    }
  }
}
.scroll-summary {
  overflow-y: auto;
  h4 {
      color: purple;
      padding: .5rem 1rem;
      opacity: 1;
      width: 300px;
    }
}
.poster-container  .img-poster:hover {
  z-index: 2;
}
.poster-container:hover .poster-absolute {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
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
