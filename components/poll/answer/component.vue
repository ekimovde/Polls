<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <div
      v-if="!isTextType"
      :class="b('wrapper')"
    >
      <button
        :class="b('button', { view })"
        @click="action"
      >
        <span
          v-if="!isRemoveIconShown"
          :class="b('preview', { view })"
        >
          <i :class="classForIcon" />
        </span>

        <img
          v-if="hasImage"
          :class="b('image')"
          :src="answer.image"
          alt=""
        >
      </button>

      <button
        :class="b('button', { view })"
        @click="changeImage"
      >
        <ui-tooltip
          :placement="uiTooltipPlacement.rightStart"
          :content="contentForTooltip"
        >
          <span :class="b('action', { grey: isRemoveIconShown })">
            <i :class="classForActionIcon" />
          </span>
        </ui-tooltip>
      </button>
    </div>

    <ui-input
      :value="answer.text"
      :view="uiInputView.extra"
      :size="uiInputSize.small"
      :placeholder="textAttributes.addAnswer"
      :is-expanded="true"
      @input="updateText"
    />

    <shared-modal-uploader
      :is-visible.sync="isVisible"
      @choose="updateImage"
    />
  </div>
</template>
