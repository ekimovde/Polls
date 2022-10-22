<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ul
    :class="b()"
    :data-test="tid()"
  >
    <li
      v-for="(item, index) in linkList"
      :key="index"
      :class="b('item')"
    >
      <nuxt-link
        :class="b('link')"
        :to="{ name: item.routeName }"
      >
        <div>
          {{ item.title }}
        </div>

        <i
          class="bx bx-chevron-right"
          :class="b('icon')"
        />
      </nuxt-link>
    </li>
  </ul>
</template>
