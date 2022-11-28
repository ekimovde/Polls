<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ul :class="b('list')">
      <li
        v-for="(item, index) in 3"
        :key="index"
        :class="b('item')"
      >
        <avatar-block
          :size="avatarBlockSize.xs"
          :src="''"
        />
      </li>
    </ul>

    <p :class="b('text')">
      {{ displayedTotalVotes }}
    </p>

    <div :class="b('circle')" />

    <p :class="b('text')">
      {{ displayedTimeLeft }}
    </p>
  </div>
</template>
