<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ul :class="b('list')">
      <li
        v-for="(item, index) in avatars"
        :key="index"
        :class="b('item')"
      >
        <avatar-block
          :size="avatarBlockSize.xs"
          :src="item"
        />
      </li>
    </ul>

    <p :class="b('text', { default: !hasAvatars })">
      {{ displayedTotalVotes }}
    </p>

    <div :class="b('circle')" />
  </div>
</template>
