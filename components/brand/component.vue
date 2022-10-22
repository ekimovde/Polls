<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <nuxt-link
    :class="b({ size })"
    :data-test="tid()"
    :to="{ name: routesName.index }"
  >
    <img
      :class="b('image')"
      :src="picture"
      alt=""
    >
  </nuxt-link>
</template>
