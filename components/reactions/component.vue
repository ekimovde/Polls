<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <div :class="b('title')">
      {{ textAttributes.title }}
    </div>

    <ul :class="b('list')">
      <li
        v-for="(item, index) in reactions"
        :key="index"
        :class="b('item')"
      >
        <ui-button
          :view="uiButtonView.simple"
          :size="uiButtonSize.byContent"
          :theme="uiButtonTheme.default"
          :is-expanded="true"
        >
          <span :class="b('wrapper')">
            <span>
              {{ item.icon }}
            </span>

            <p :class="b('text')">
              {{ item.quantity }}
            </p>
          </span>
        </ui-button>
      </li>
    </ul>

    <p :class="b('text', { grey: true })">
      {{ displayedReactionsInfo }}
    </p>
  </div>
</template>
