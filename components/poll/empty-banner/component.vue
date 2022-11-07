<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <h4 :class="b('title')">
      {{ textAttributes.title }}
    </h4>

    <p :class="b('description')">
      {{ textAttributes.description }}
    </p>

    <ui-button
      :view="uiButtonView.action"
      :size="uiButtonSize.xl"
      :theme="uiButtonTheme.purple"
      :is-nuxt-link="true"
      :to="pollNewRoute"
    >
      {{ textAttributes.createPoll }}
    </ui-button>
  </div>
</template>
