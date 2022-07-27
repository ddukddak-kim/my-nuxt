<template>
  <v-card>
    <v-card-title>hi-test :)</v-card-title>
    <v-card-text>
      <v-textarea v-model="text"/>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="test">
        test
      </v-btn>
      <v-btn @click="hello">
        hello
      </v-btn>
      <v-btn @click="moment">
        moment
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "test.vue",
  data() {
    return {
      text: 'before test'
    }
  },
  methods: {
    async test() {
      this.text = 'gogo test';
      const res = await this.$axios.get('/api');
      this.text = res.data;
    },
    async hello() {
      this.text = 'hello test';
      const res = await this.$axios.get('/api/hello');
      this.text = res.data;
    },
    moment() {
      this.text = this.$moment().toLocaleString();
    }
  }
}
</script>

<style scoped>

</style>
