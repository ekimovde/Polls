<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <img
    :class="b({ size })"
    :data-test="tid()"
    :src="src"
    alt=""
    @error="replaceByDefault"
  >
</template>
