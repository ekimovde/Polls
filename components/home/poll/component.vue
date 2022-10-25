<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <home-block-layout
      :view="homeBlockLayoutView.regular"
      :theme="homeBlockTheme.teal"
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
            alt="Poll mood tracker"
          >

          <img
            :src="picture"
            :class="b('image')"
            alt="Poll mood tracker"
          >
        </picture>
      </template>
    </home-block-layout>
  </div>
</template>
