<template>


  <div class="global-header">
    <div class="header-title">者也专栏</div>
    <div v-if="user.isLogin" class="dropdown">
      <dropdown :title="`你好 ${user.name}`"></dropdown>
    </div>
    <div v-else>没有登陆</div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

import Dropdown from '@/components/Dropdown.vue';


export interface UserProps {
  name: string,
  isLogin: boolean,
  id: number
}

export default defineComponent({
  name: 'Header',
  components: {Dropdown},
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }

});
</script>

<style lang="scss" scoped>

.global-header {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d6efd;
  height: 64px;

  .header-title {
    color: white;
    padding: 10px 10px 10px 20px;
    font-size: 20px;

  }
}
</style>