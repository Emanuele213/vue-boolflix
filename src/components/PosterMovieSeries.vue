<template>
  <div class="poster-container">
    <div class="img-poster">
      <img
        class="img-size"
        :src="poster"
        :alt="title"
      >
    </div>
    <div class="poster-absolute">
      <h3>Nome: {{ title }}</h3>
      <h3>Nome originale: {{ originalTitle }}</h3>
      <h3>Lingua: {{ lang }}</h3>
      <h3>
        Media voti:
        <span
          v-for="index in newAverage"
          :key="index"
        >
          <font-awesome-icon icon="fa-solid fa-star" />
        </span>
        {{ prova }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    poster: String,
    title: String,
    originalTitle: String,
    lang: String,
    average: Number,
  },
  data() {
    return {
      // variabile di prova
      prova: (this.average / 2),
      newAverage: Math.floor(this.average / 2),
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
  .img-poster {
    position: relative;
  }
  .img-size {
  width: 300px;
  height: 400px;
  border: 5px solid yellow;
  }
.poster-absolute{
  position: absolute;
  z-index: 4;
  display: none;
  margin-top: 1rem;
    h3 {
      background-color: black;
      color: purple;
      padding: .5rem 1rem;
      opacity: 1;
      width: 280px;
      overflow: auto;
    }
  }
}
.poster-container  .img-poster:hover {
  z-index: 2;
}
.poster-container:hover .poster-absolute {
  display: flex;
  flex-direction: column;
}
</style>
