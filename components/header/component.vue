<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <nav
    :class="b({ view })"
    :data-test="tid()"
  >
    <brand-block />
    <navigation-block :class="b('block')" />
    <account-block :class="b('block')" />

    <ui-button
      :view="uiButtonView.simple"
      :size="uiButtonSize.byContent"
      :theme="theme"
      :class="b('ui-button')"
      @click="toggleVisible"
    >
      <i
        class='bx bx-menu'
        :class="b('icon')"
      />
    </ui-button>

    <transition name="mobile-navigation">
      <mobile-navigation v-show="isVisible" />
    </transition>
  </nav>
</template>
