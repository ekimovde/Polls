<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <el-tooltip
      :placement="placement"
      :content="content"
    >
      <slot />
    </el-tooltip>
  </div>
</template>
