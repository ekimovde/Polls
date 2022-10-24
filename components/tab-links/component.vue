<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ul
    :class="b()"
    :data-test="tid()"
  >
    <li
      v-for="(item, index) in tabLinks"
      :key="index"
    >
      <nuxt-link
        :to="{ name: item.routeName }"
        :class="b('link')"
      >
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>
