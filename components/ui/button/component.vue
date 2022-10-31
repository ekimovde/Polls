<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <component
    :is="currentTag"
    v-bind="attributes"
    :data-test="tid()"
    :class="b('', { size, view, theme, loading: isLoading, disabled: isDisabled, expanded: isExpanded })"
    v-on="$listeners"
  >
    <i
      v-if="isLoading"
      class="bx bx-loader-circle bx-spin"
      :class="b('icon')"
    />
    <slot v-else />
  </component>
</template>
