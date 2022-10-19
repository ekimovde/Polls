<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <component
    :is="currentTag"
    v-bind="attributes"
    :data-test="tid()"
    :class="b('', { size, view, theme, loading: isLoading, disabled: isDisabled, expanded: isExpanded })"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>
