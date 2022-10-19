<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <input
    :class="b({ view, expanded: isExpanded })"
    :data-test="tid()"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :disabled="isDisabled"
    @input="input"
  />
</template>
