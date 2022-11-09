<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <button
    :class="b({ view, active: isActive, default: hasIcon })"
    :data-test="tid()"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div :class="b('icon-wrapper', { view })">
      <img
        :src="option.icon"
        :class="b('icon', { view, default: hasIcon })"
        alt=""
      >
    </div>

    <div
      v-if="!hasIcon"
      :class="b('title-wrapper', { view })"
    >
      <span :class="b('title', { active: isActive })">
        {{ option.title }}
      </span>
    </div>
  </button>
</template>
