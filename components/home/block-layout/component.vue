<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b({ view })"
    :data-test="tid()"
  >
    <div :class="b('block')">
      <span :class="b('category', { theme })">
        <slot name="category">
          Category
        </slot>
      </span>

      <h2 :class="b('title')">
        <slot name="title">
          Title
        </slot>
      </h2>

      <p :class="b('text')">
        <slot name="text">
          Text
        </slot>
      </p>
    </div>

    <div :class="b('display')">
      <slot name="image">
        Image
      </slot>
    </div>
  </div>
</template>
