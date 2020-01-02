<template>
  <div>
    <h1>{{name}}</h1>
    {{count}}
    <div @click="addCount">点我 vuex count ++</div>
    <div @click="goBar">跳转到bar</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "foo"
    };
  },
  computed: {
    count() {
      return this.$store.getters.doneTodos;
    }
  },
  methods: {
    goBar: function() {
      this.$router.push({ name: "bar" });
    },
    addCount: function() {
      this.$store.commit("increment");
    }
  }
};
</script>

<style scoped>
div {
  font-size: 20px;
  color: red;
}
</style>

