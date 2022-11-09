<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <div :class="b('header')">
      <poll-question-type
        v-if="!isAnswersEmpty"
        :option="pollQuestionTypeOption"
        :has-icon="true"
      />

      <div :class="b('actions')">
        <div :class="b('block')">
          <ui-button
            :view="uiButtonView.default"
            :size="uiButtonSize.xs"
            :theme="uiButtonTheme.purple"
          >
            <i class="bx bx-chevron-down" />
          </ui-button>

          <poll-question-counter :count="count" />
        </div>
      </div>
    </div>

    <div :class="b('body', { empty: isAnswersEmpty })">
      <ul
        v-if="isAnswersEmpty"
        :class="b('list')"
      >
        <li
          v-for="(item, index) in pollQuestionTypeOptions"
          :key="index"
        >
          <poll-question-type
            :view="PollQuestionTypeView.card"
            :option="item"
          />
        </li>
      </ul>

      <div
        v-if="!isAnswersEmpty"
        :class="b('help')"
      >
        <ui-button
          :view="uiButtonView.simple"
          :size="uiButtonSize.byContent"
          :theme="uiButtonTheme.purple"
          @click="addAnswer"
        >
          <span :class="b('help-button-text')">
            {{ textAttributes.addAnswer }}
          </span>
        </ui-button>

        <span :class="b('help-text')">
          {{ textAttributes.pressEnter }}
        </span>
      </div>
    </div>

    <div :class="b('footer')">
      <div :class="b('block')">
        <ui-button
          :view="uiButtonView.default"
          :size="uiButtonSize.xs"
          :theme="uiButtonTheme.purple"
        >
          <i class="bx bx-cog" />
        </ui-button>

        <ui-button
          :view="uiButtonView.default"
          :size="uiButtonSize.xs"
          :theme="uiButtonTheme.purple"
        >
          <i class="bx bxs-image" />
        </ui-button>
      </div>

      <div :class="b('block')">
        <ui-button
          :view="uiButtonView.default"
          :size="uiButtonSize.xs"
          :theme="uiButtonTheme.purple"
        >
          <i :class="iconForExpandButton" />
        </ui-button>

        <ui-button
          :view="uiButtonView.default"
          :size="uiButtonSize.xs"
          :theme="uiButtonTheme.purple"
        >
          <i class="bx bx-trash" />
        </ui-button>
      </div>
    </div>
  </div>
</template>
