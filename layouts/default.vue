<template>
  <div :class="b()">
    <header-block />

    <main :class="b('body')">
      <nuxt />
    </main>

    <footer :class="b('footer')">
      <footer-block />
    </footer>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { HeaderBlock } from '~/components/header';
  import { FooterBlock } from '~/components/footer';

  @Component({
    name: 'default-layout',
    middleware: ['auth'],
    components: {
      HeaderBlock,
      FooterBlock
    }
  })
  export default class DefaultLayout extends Vue {
    readonly userRepo = this.$projectServices.userRepo;

    isLoading = false;
  }
</script>

<style lang="scss">
@import "assets/scss/helper";
@import "assets/scss/loader";

.default-layout {
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  &__body {
    width: 100%;
    background-color: #f9f9f9;
  }

  &__footer {
    width: 100%;
    background-color: $white;
    border-top: solid 1px #F4F4F4;
    padding: 50px 0px 60px 0px;
  }
}

body {
  display: block;
  padding: 0;
  background-color: $white;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  -webkit-tap-highlight-color: transparent;
}
</style>
