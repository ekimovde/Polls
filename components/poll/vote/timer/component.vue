<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <h4 :class="b('title')">
      {{ textAttributes.title }}
    </h4>

    <div :class="b('wrapper')">
      <div :class="b('panel')">
        <p :class="b('time')">
          02
        </p>

        <p :class="b('time', { ['dark-grey']: true })">
          :
        </p>

        <p :class="b('time')">
          12
        </p>

        <p :class="b('time', { ['dark-grey']: true })">
          :
        </p>

        <p :class="b('time', { grey: true })">
          00
        </p>
      </div>

      <ul :class="b('list')">
        <li
          v-for="(item, index) in params"
          :key="index"
          :class="b('item')"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <p :class="b('text')">
      {{ textAttributes.description }}
    </p>
  </div>
</template>
