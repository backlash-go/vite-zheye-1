<template>
  <div class="dropdown">{{title}}</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    }
  }

});
</script>

<style lang="scss" scoped>
.dropdown {
  height: 40px;
  display: flex;
  align-items: center;
  color: white;
  border: 1px solid white;
  margin-right: 20px;
  border-radius: 10px;
  padding: 6px;
}
</style>