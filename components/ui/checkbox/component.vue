<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <label
      for="input"
      :class="b('label', { checked: isChecked })"
    >
      <slot>
        Checkbox
      </slot>
    </label>

    <input
      id="input"
      type="checkbox"
      :value="isChecked"
      :class="b('input')"
      @change="change"
    >
  </div>
</template>
