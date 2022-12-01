<template>
  <header class="bg-header">
    <div class="header-container">
      <h1>
        BOOLFLIZ
      </h1>
      <div>
        <form
          action=""
          @submit.prevent="$emit('search', searchString)"
        >
          <label for="search-bar">
            <input
              id="search-bar"
              v-model="searchString"
              type="text"
              name="search-bar"
              placeholder="Cerca un film/serie TV"
            >
          </label>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      searchString: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-header {
  background-color: black;
  height: 100px;
  .header-container {
  max-width: 1220px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: red;
    font-size: 3.5rem;
  }

  input {
    border: 1px solid white;
    border-radius: 1rem;
    font-size: 1.5rem;
    text-align: center;;
  }
}
}
@media screen and (max-width: 605px) {
  .bg-header {
    display: flex;
    .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  }
}
</style>
