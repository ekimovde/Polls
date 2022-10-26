<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <div :class="b('header')">
      <h2 :class="b('title')">
        {{ textAttributes.title }}
      </h2>

      <shared-badge
        :theme="sharedColorTheme.pinkLight"
        :size="sharedBadgeSize.small"
        :is-uppercase="true"
      >
        {{ textAttributes.new }}
      </shared-badge>
    </div>

    <div :class="b('block')">
      <p :class="b('text')">
        {{ textAttributes.descriptionOne }}
      </p>

      <p :class="b('text')">
        {{ textAttributes.descriptionTwo }}
      </p>
    </div>

    <ui-input
      :view="uiInputView.regular"
      :size="uiInputSize.xs"
      :placeholder="textAttributes.placeholder"
      :is-expanded="true"
      :is-disabled="true"
    />
  </div>
</template>
