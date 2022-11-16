<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ui-button
      v-if="isOwnImageEmpty"
      :view="uiButtonView.simple"
      :size="uiButtonSize.byContent"
      :theme="uiButtonTheme.default"
      @click="toggleVisible"
    >
      <div :class="b('banner')">
        <i class="bx bx-upload" />

        <label :class="b('label')">
          {{ textAttributes.size }}
        </label>
      </div>
    </ui-button>

    <div
      v-else
      :class="b('wrapper')"
    >
      <img
        :class="b('image')"
        :src="ownImage"
        alt=""
      >

      <ui-button
        :class="b('button')"
        :view="uiButtonView.simple"
        :size="uiButtonSize.byContent"
        :theme="uiButtonTheme.pink"
        @click="remove"
      >
        <i class="bx bx-trash" />
      </ui-button>
    </div>

    <shared-modal-uploader
      :is-visible.sync="isVisible"
      @choose="choose"
    />
  </div>
</template>
