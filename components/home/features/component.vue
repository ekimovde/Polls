<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <div :class="b('header')">
      <p :class="b('description')">
        {{ textAttributes.description }}
      </p>

      <h2 :class="b('title')">
        {{ textAttributes.title }}
      </h2>
    </div>

    <ul :class="b('list')">
      <li
        v-for="(item, index) in fakeFeatures"
        :key="index"
      >
        <div :class="b('block')">
          <div :class="b('circle', { theme: item.theme })">
            <i :class="item.icon" />
          </div>

          <h3 :class="b('sub-title', { theme: item.theme })">
            {{ item.title }}
          </h3>

          <p :class="b('text')">
            {{ item.description }}
          </p>

          <ui-button
            :view="uiButtonView.simple"
            :size="uiButtonSize.byContent"
            :theme="uiButtonTheme.default"
          >
            <span :class="b('button-text')">
              {{ textAttributes.seeMore }}

              <i
                class="bx bx-chevron-right"
                :class="b('icon')"
              />
            </span>
          </ui-button>
        </div>
      </li>
    </ul>
  </div>
</template>
