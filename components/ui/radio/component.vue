<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <label
    :class="b({ view, checked: isChecked, disabled: isDisabled })"
    :data-test="tid()"
  >
    <input
      ref="input"
      type="radio"
      :value="value"
      :name="name"
      :class="b('control')"
      @change="onChange"
    >

    <span
      v-if="isLabelExist"
      :class="b('label')"
    >
      <slot />
    </span>
  </label>
</template>
