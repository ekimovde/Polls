<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <textarea
    :class="b({ expanded: isExpanded })"
    :data-test="tid()"
    :placeholder="placeholder"
    :value="value"
    :disabled="isDisabled"
    @input="input"
  />
</template>
