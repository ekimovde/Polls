<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>

<template>
  <div
    :class="b({ view })"
    :data-test="tid()"
  >
    <div :class="b('inner-wrapper', { view })">
      <div
        v-if="isButtonsBlockShown"
        :class="b('block')"
      >
        <ui-tooltip
          :placement="uiTooltipPlacement.top"
          :content="textAttributes.questionSettings"
        >
          <ui-button
            :view="uiButtonView.default"
            :size="uiButtonSize.xs"
            :theme="uiButtonTheme.purple"
            :is-active="isSettingsVisible"
            @click="toggleSettingsVisible"
          >
            <i class="bx bx-cog" />
          </ui-button>
        </ui-tooltip>

        <ui-tooltip
          :placement="uiTooltipPlacement.top"
          :content="textAttributes.ownImage"
        >
          <ui-button
            :view="uiButtonView.default"
            :size="uiButtonSize.xs"
            :theme="uiButtonTheme.purple"
            @click="sendEvent(pollQuestionFooterEvent.ownImage)"
          >
            <i class="bx bxs-image" />
          </ui-button>
        </ui-tooltip>
      </div>

      <div :class="b('block')">
        <ui-tooltip
          :placement="uiTooltipPlacement.top"
          :content="textAttributes.hide"
        >
          <ui-button
            :view="uiButtonView.default"
            :size="uiButtonSize.xs"
            :theme="uiButtonTheme.purple"
            :is-active="isQuestionHidden"
            @click="sendEvent(pollQuestionFooterEvent.setQuestionDisplay)"
          >
            <i :class="iconForExpandButton" />
          </ui-button>
        </ui-tooltip>

        <ui-tooltip
          :placement="uiTooltipPlacement.top"
          :content="textAttributes.remove"
        >
          <ui-button
            :view="uiButtonView.default"
            :size="uiButtonSize.xs"
            :theme="uiButtonTheme.purple"
            @click="sendEvent(pollQuestionFooterEvent.remove)"
          >
            <i class="bx bx-trash" />
          </ui-button>
        </ui-tooltip>
      </div>
    </div>

    <div
      v-if="isSettingsVisible"
      :class="b('settings')"
    >
      <p :class="b('title')">
        {{ textAttributes.answersSettings }}
      </p>

      <ui-switch
        :size="uiSwitchSize.xs"
        :view="uiSwitchView.default"
        :value="isMultipleAnswers"
        :active-text="textAttributes.haveMultiple"
        @change="sendEvent(pollQuestionFooterEvent.setMultipleAnswers)"
      />
    </div>
  </div>
</template>
