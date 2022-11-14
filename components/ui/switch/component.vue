<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <el-switch
    v-bind="$attrs"
    :class="b({ size })"
    :data-test="tid()"
    v-on="$listeners"
  >
    <slot />
  </el-switch>
</template>
