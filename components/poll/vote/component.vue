<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <h4 :class="b('title')">
      {{ textAttributes.poll }}
    </h4>

    <div :class="b('body')">
      <h5 :class="b('question-title')">
        {{ question.name }}
      </h5>

      <div :class="b('wrapper', { grid: isImageTextType })">
        <ul :class="b('list', { type: question.type, default: isOnlyAnswer })">
          <li
            v-for="(item, index) in question.answers"
            :key="index"
            :class="b('item')"
          >
            <poll-vote-option
              :answer="item"
              :selected-answer.sync="selectedAnswer"
              :own-image="ownImage"
            />
          </li>
        </ul>

        <div
          v-if="isImageTextType"
          :class="b('image-wrapper', { empty: !isImageShown })"
        >
          <img
            v-if="isImageShown"
            :src="displayedImage"
            :class="b('image')"
            alt=""
          >

          <span v-else>
            {{ displayedImagePlaceholder }}
          </span>
        </div>
      </div>

      <poll-vote-result />
    </div>

    <div :class="b('footer')">
      <poll-vote-info />

      <ui-button
        :view="uiButtonView.action"
        :size="uiButtonSize.small"
        :theme="uiButtonTheme.purple"
        :is-disabled="!hasSelectedAnswer"
        @click="vote"
      >
        {{ textAttributes.vote }}
      </ui-button>
    </div>
  </div>
</template>
