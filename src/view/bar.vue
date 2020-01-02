<template>
  <div>
    <h1>{{name}}</h1>

    <div @click="goFoo">跳转到foo</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "bar"
    };
  },
  methods: {
    goFoo: function() {
      this.$router.push("/");
    }
  }
};
</script>
