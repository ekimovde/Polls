<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <brand-block />

    <navigation-block />

    <div>
      Profile
    </div>
  </div>
</template>
