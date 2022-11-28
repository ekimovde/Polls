<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ui-button
    :class="b()"
    :data-test="tid()"
    :view="uiButtonView.simple"
    :size="uiButtonSize.byContent"
    :theme="uiButtonTheme.default"
    :is-expanded="true"
    @click="choose"
  >
    <div :class="b('wrapper', { type, active: isActive })">
      <div
        v-if="isImageType"
        :class="b('image-wrapper')"
      >
        <img
          :src="displayedImage"
          :class="b('image')"
          alt=""
        >
      </div>

      <ui-radio
        name="radio"
        :class="b('radio', { type, active: isActive })"
        :view="uiRadioView.default"
        :value="answer.timestamp"
        :model-value="selectedAnswer.timestamp"
        @change="choose"
      />

      <div :class="b('block', { type })">
        <span :class="b('text', { type, active: isActive })">
          {{ answer.text }}
        </span>
      </div>
    </div>
  </ui-button>
</template>
