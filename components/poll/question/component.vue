<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div
    :class="b({ collapsed: isQuestionHidden })"
    :data-test="tid()"
  >
    <div :class="b('header', { collapsed: isQuestionHidden })">
      <div :class="b('block')">
        <poll-question-type
          v-if="hasAnswers"
          :option="pollQuestionTypeOption"
          :has-icon="true"
          :is-disabled="isQuestionHidden"
          @click="openModal"
        />

        <ui-input
          v-model="question.name"
          :view="uiInputView.extra"
          :size="uiInputSize.byContent"
          :placeholder="textAttributes.placeholder"
          :max-lenght="40"
          :is-expanded="true"
          :is-disabled="isQuestionHidden"
        />
      </div>

      <div :class="b('actions', { collapsed: isQuestionHidden })">
        <template v-if="isQuestionHidden">
          <poll-question-footer
            :view="pollQuestionFooterView.list"
            :is-question-hidden.sync="isQuestionHidden"
            @questionSettings="''"
            @ownImage="''"
            @remove="clearQuestion"
          />

          <div :class="b('divider')" />
        </template>

        <poll-question-counter :count="quantityOfAnswers" />
      </div>
    </div>

    <div
      v-if="!isQuestionHidden"
      ref="body"
      :class="b('body', { empty: !hasAnswers })"
    >
      <draggable
        v-if="hasAnswers"
        v-model="question.answers"
        tag="ul"
        handle=".move"
        ghost-class="ghost"
        :disabled="false"
        :class="b('answers')"
      >
        <TransitionGroup name="answers">
          <li
            v-for="(item, index) in question.answers"
            :key="item.timestamp"
            :class="b('answer')"
          >
            <span
              class="move"
              :class="b('answer-move')"
            >
              <i class="bx bx-grid-vertical" />
            </span>

            <poll-answer
              :class="b('poll-answer')"
              :answer="item"
              @update="updateAnswer(index, $event)"
            />

            <ui-button
              :view="uiButtonView.simple"
              :size="uiButtonSize.byContent"
              :theme="uiButtonTheme.pink"
              :class="b('answer-button')"
              @click="removePoll(index)"
            >
              <i class="bx bx-trash" />
            </ui-button>
          </li>
        </TransitionGroup>
      </draggable>

      <poll-question-menu
        v-else
        :view="pollQuestionMenuView.list"
        @choose-type="updateQuestion"
      />

      <poll-question-help
        v-if="hasAnswers"
        @add-answer="addAnswer"
      />
    </div>

    <poll-question-footer
      v-if="!isQuestionHidden"
      :view="pollQuestionFooterView.default"
      :is-question-hidden.sync="isQuestionHidden"
      :is-multiple-answers.sync="question.settings.isMultipleAnswers"
      @ownImage="''"
      @remove="clearQuestion"
    />

    <ui-modal :is-visible.sync="isVisible">
      <div>
        <h4 :class="b('modal-title')">
          {{ textAttributes.chooseTypeQuestion }}
        </h4>

        <poll-question-menu
          :view="pollQuestionMenuView.grid"
          @choose-type="updateQuestion"
        />
      </div>
    </ui-modal>
  </div>
</template>
