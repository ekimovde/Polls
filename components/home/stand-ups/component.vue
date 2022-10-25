<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <home-block-layout
      :view="homeBlockLayoutView.default"
      :theme="homeBlockTheme.pink"
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
            alt="Remote team friendly"
          >

          <img
            :src="picture"
            :class="b('image')"
            alt="Remote team friendly"
          >
        </picture>
      </template>
    </home-block-layout>
  </div>
</template>
