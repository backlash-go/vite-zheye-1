<template>
  <Header :user="currentUser"></Header>
  <tiger></tiger>
  <a-button type="primary">
    Primary
  </a-button>

  <a-textarea  placeholder="Basic usage" :rows="4" />

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from '@/components/Header.vue';
import Tiger from '@/components/Tiger.vue';

import {UserProps} from '@/components/Header.vue'


export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Tiger
  },
  setup() {
    const currentUser: UserProps = {
      name: "viking",
      id: 100,
      isLogin: true
    };
    return {
      currentUser
    };
  }
});
</script>

<style lang="scss" scoped>

</style>