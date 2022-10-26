<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b({ theme, size, uppercase: isUppercase })"
    :data-test="tid()"
  >
    <slot>
      Badge
    </slot>
  </div>
</template>
