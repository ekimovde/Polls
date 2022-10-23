<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ul
    :class="b()"
    :data-test="tid()"
  >
    <li
      v-for="(item, index) in summaryList"
      :key="index"
      :class="b('item')"
    >
      <i :class="getClasses(item.icon)" />

      <p :class="b('text')">
        {{ item.description }}
      </p>
    </li>
  </ul>
</template>
