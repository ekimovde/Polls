<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ul
    :class="b()"
    :data-test="tid()"
  >
    <li
      v-for="(item, index) in navigations"
      :key="index"
    >
      <nuxt-link
        :class="b('link')"
        :to="{ name: item.routeName }"
      >
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>
