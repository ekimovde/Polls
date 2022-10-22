<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b({ expanded: isExpanded })"
    :data-test="tid()"
  >
    <input
      :class="b('input', { view, size, expanded: isExpanded })"
      :data-test="tid()"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :disabled="isDisabled"
      @input="input"
    >

    <label
      v-if="isError"
      :class="b('error')"
    >
      {{ errorMessage }}
    </label>
  </div>
</template>
