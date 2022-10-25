<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <home-block-layout
      :view="homeBlockLayoutView.default"
      :theme="homeBlockTheme.purple"
    >
      <template #category>
        {{ textAttributes.category }}
      </template>

      <template #title>
        {{ textAttributes.title }}
      </template>

      <template #text>
        {{ textAttributes.description }}
      </template>

      <template #image>
        <picture>
          <source
            :srcset="picture"
            type="image/jpeg"
            alt="Daily stand-ups example"
          >

          <img
            :src="picture"
            :class="b('image')"
            alt="Daily stand-ups example"
          >
        </picture>
      </template>
    </home-block-layout>
  </div>
</template>
