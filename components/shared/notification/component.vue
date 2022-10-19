<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    v-show="isShown"
    :class="b()"
    :data-test="tid()"
  >
    <div :class="b('wrapper', { type })">
      <div :class="b('content')">
        <component
          v-if="isIconVisible"
          :is="icon"
          :data-test="tid(testLocators.icon)"
        />

        <div :class="b('inner')">
          <div
            :data-test="tid(testLocators.title)"
            :class="b('title', { type })"
            v-html="title"
          />

          <div
            v-if="message"
            :data-test="tid(testLocators.message)"
            :class="b('message', { type })"
            v-html="message"
          />
        </div>
      </div>
    </div>
  </div>
</template>
