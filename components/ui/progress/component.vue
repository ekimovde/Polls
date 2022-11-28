<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <el-progress
      :class="b({ theme, view, completed: isCompleted })"
      :percentage="percentage"
      :show-text="false"
    />
  </div>
</template>
