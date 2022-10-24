<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <nav
    :class="b({ view })"
    :data-test="tid()"
  >
    <brand-block />

    <navigation-block />

    <account-block />
  </nav>
</template>
