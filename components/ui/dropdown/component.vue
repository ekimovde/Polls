<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <el-popover
      :placement="placement"
      :popper-class="b('wrapper')"
      :visible-arrow="false"
      :value="isVisible"
      :open-delay="100"
      :close-delay="100"
      trigger="click"
      @show="show"
      @hide="hide"
    >
      <template slot="reference">
        <slot name="reference" />
      </template>

      <slot name="content" />
    </el-popover>
  </div>
</template>
