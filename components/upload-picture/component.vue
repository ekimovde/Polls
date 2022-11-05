<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <div :class="b('avatar-wrapper')">
      <img
        :src="placeholder"
        :class="b('image')"
        alt=""
      >

      <div :class="b('edit')">
        <i
          class="bx bxs-pencil"
          :class="b('icon')"
        />
      </div>
    </div>

    <div :class="b('info')">
      <h4 :class="b('title')">
        {{ textAttributes.title }}
      </h4>

      <p :class="b('description')">
        {{ textAttributes.description }}
      </p>
    </div>
  </div>
</template>
