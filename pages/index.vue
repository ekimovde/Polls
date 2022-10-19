<template>
  <div :class="b()">
    asfasf
  </div>
</template>

<script lang="ts">
  import { Component, Vue, mixins } from 'nuxt-property-decorator';

  @Component({
    name: 'index-page'
  })
  export default class HomePage extends mixins(Vue) {
    //
  }
</script>

<style lang="scss" scoped>
  @import 'assets/scss/helper.scss';

  .index-page {
    @include fontInter14Regular;

    display: flex;
  }
</style>
