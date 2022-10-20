<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b({ theme })"
    :data-test="tid()"
  >
    <slot>
      Badge
    </slot>
  </div>
</template>
