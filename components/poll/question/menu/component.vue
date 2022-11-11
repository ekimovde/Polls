<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ul
    :class="b({ view })"
    :data-test="tid()"
  >
    <li
      v-for="(item, index) in pollQuestionTypeOptions"
      :key="index"
    >
      <poll-question-type
        :view="pollQuestionTypeView.card"
        :option="item"
        @click="chooseType(item.type)"
      />
    </li>
  </ul>
</template>
