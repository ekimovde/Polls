<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <transition name="modal">
    <div
      v-show="isVisible"
      :class="b()"
      :data-test="tid()"
      @click="close"
    >
      <div
        :class="b('wrapper')"
        @click.stop=""
      >
        <ui-button
          :view="uiButtonView.simple"
          :size="uiButtonSize.byContent"
          :theme="uiButtonTheme.default"
          :class="b('button')"
          @click="close"
        >
          <i
            class="bx bx-x"
            :class="b('icon')"
          />
        </ui-button>

        <slot>
          Content
        </slot>
      </div>
    </div>
  </transition>
</template>
