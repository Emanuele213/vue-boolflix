<template>
  <div>
    <div>
      <div class="poster-container">
        <div class="img-poster">
          <img
            class="img-size"
            :src="poster"
            :alt="title"
          >
        </div>
        <div class="">
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
  max-width: 300px;

  .img-size {
  width: 300px;
  height: 400px;
}
}

</style>
