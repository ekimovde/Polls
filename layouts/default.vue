<template>
  <div :class="b({ ['no-scroll']: isMovileNavigationVisible })">
    <header-block v-if="isHeaderVisible" />

    <main :class="b('body')">
      <nuxt />
    </main>

    <footer-block v-if="isFooterVisible" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { HeaderBlock } from '~/components/header';
  import { FooterBlock } from '~/components/footer';

  @Component({
    name: 'default-layout',
    middleware: ['auth', 'header', 'footer'],
    components: {
      HeaderBlock,
      FooterBlock
    }
  })
  export default class DefaultLayout extends Vue {
    readonly headerRepo = this.$projectServices.headerRepo;
    readonly footerRepo = this.$projectServices.footerRepo;

    get isHeaderVisible(): boolean {
      return this.headerRepo.isVisible;
    }

    get isMovileNavigationVisible(): boolean {
      return this.headerRepo.isMovileNavigationVisible;
    }

    get isFooterVisible(): boolean {
      return this.footerRepo.isVisible;
    }
  }
</script>

<style lang="scss">
@import "assets/scss/helper";
@import "assets/scss/loader";

.default-layout {
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  &--no-scroll {
    overflow: hidden;
  }

  &__body {
    width: 100%;
    background-color: $white;
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
  box-sizing: border-box;
}
</style>
