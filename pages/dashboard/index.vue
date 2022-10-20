<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('inner-wrapper')">
      <h1 :class="b('title')">
        {{ textAttributes.title }}
      </h1>

      <progress-block :progress="userProgress" />

      <div :class="b('poll-list-wrapper')">
        <h2 :class="b('title', { small: true })">
          {{ textAttributes.subTitle }}
        </h2>

        <ul :class="b('list')">
          <li
            v-for="(item, index) in userPopularPolls"
            :key="index"
          >
            <poll-block :poll="item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
