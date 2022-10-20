<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <div :class="b('inner-wrapper')">
      <shared-color :theme="poll.color" />

      <div :class="b('title')">
        {{ poll.name }}
      </div>
    </div>

    <div :class="b('inner-wrapper')">
      <shared-badge :theme="poll.color">
        {{ poll.category }}
      </shared-badge>

      <ui-button
        :view="uiButtonView.default"
        :size="uiButtonSize.xl"
        :theme="uiButtonTheme.grey"
      >
        <i class='bx bx-chevron-right' />
      </ui-button>
    </div>
  </div>
</template>
