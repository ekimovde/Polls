<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ul
    :class="b()"
    :data-test="tid()"
  >
    <li
      v-for="(item, index) in shareList"
      :key="index"
    >
      <div :class="b('inner-wrapper')">
        <div>
          <h4 :class="b('title')">
            {{ item.title }}
          </h4>

          <p :class="b('text')">
            {{ item.description }}
          </p>
        </div>

        <ui-button
          :view="uiButtonView.default"
          :size="uiButtonSize.xl"
          :theme="uiButtonTheme.default"
          @click="open(item.type)"
        >
          <i class='bx bx-chevron-right' />
        </ui-button>
      </div>
    </li>
  </ul>
</template>
