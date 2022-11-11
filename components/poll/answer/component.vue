<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <button
      v-if="!isTextType"
      :class="b('button', { view })"
    >
      <span :class="b('preview', { view })">
        <i :class="classForIcon" />
      </span>

      <ui-tooltip
        :placement="uiTooltipPlacement.rightStart"
        :content="contentForTooltip"
      >
        <span :class="b('action')">
          <i :class="classForActionIcon" />
        </span>
      </ui-tooltip>
    </button>

    <ui-input
      :value="answer.text"
      :view="uiInputView.extra"
      :size="uiInputSize.small"
      :placeholder="textAttributes.addAnswer"
      :is-expanded="true"
      @input="updateText"
    />
  </div>
</template>
