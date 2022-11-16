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
      :theme="uiButtonTheme.default"
      @click="open"
    >
      <div :class="b('avatar-wrapper')">
        <img
          :src="avatar"
          :class="b('image')"
          alt=""
          @error="replaceByDefault"
        >

        <div :class="b('edit')">
          <i
            class="bx bxs-pencil"
            :class="b('icon')"
          />
        </div>
      </div>

      <div :class="b('info')">
        <h4 :class="b('title')">
          {{ textAttributes.title }}
        </h4>

        <p :class="b('description')">
          {{ textAttributes.description }}
        </p>
      </div>
    </ui-button>

    <shared-modal-uploader
      :is-visible.sync="isVisible"
      @choose="chooseAvatar"
    />
  </div>
</template>
