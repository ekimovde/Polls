<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ui-button
      :view="uiButtonView.simple"
      :size="uiButtonSize.byContent"
      :theme="uiButtonTheme.purple"
      @click="addAnswer"
    >
      <span :class="b('text')">
        {{ textAttributes.addAnswer }}
      </span>
    </ui-button>

    <span :class="b('text', { grey: true })">
      {{ textAttributes.pressEnter }}
    </span>
  </div>
</template>
