<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ul
    :class="b()"
    :data-test="tid()"
  >
    <li
      v-for="(item, index) in progress"
      :key="index"
      :class="b('item')"
    >
      <div :class="b('wrapper')">
        <div :class="b('top')">
          <div :class="b('title')">
            {{ item.title }}
          </div>

          <div :class="b('text')">
            {{ item.value }}
          </div>
        </div>

        <div>
          Progress
        </div>

        <div :class="b('text', { small: true })">
          {{ item.description }}
        </div>
      </div>
    </li>
  </ul>
</template>
