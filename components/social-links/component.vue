<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ul
    :class="b()"
    :data-test="tid()"
  >
    <li
      v-for="(item, index) in socialLinks"
      :key="index"
    >
      <a
        :class="b('social-link')"
        :href="item.href"
        :target="item.target"
      >
        <img
          :class="b('image')"
          :src="item.src"
          alt=""
        >
      </a>
    </li>
  </ul>
</template>
