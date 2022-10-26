<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div
    v-click-outside="hide"
    :class="b()"
    :data-test="tid()"
  >
    <slot name="reference" />

    <div :class="b('wrapper', { active: isVisible })">
      <slot name="content">
        Content
      </slot>
    </div>
  </div>
</template>
