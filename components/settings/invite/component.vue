<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <h2 :class="b('title')">
      {{ textAttributes.title }}
    </h2>

    <div :class="b('form-wrapper')">
      <div :class="b('input-wrapper')">
        <label
          for="poll_invite_message"
          :class="b('label')"
        >
          {{ textAttributes.noteLabel }}
        </label>

        <ui-textarea
          id="poll_invite_message"
          v-model="note"
          :placeholder="textAttributes.notePlaceholder"
          :is-expanded="true"
        />
      </div>

      <div :class="b('input-wrapper')">
        <label
          for="poll_invite_email"
          :class="b('label')"
        >
          {{ textAttributes.emailLabel }}
        </label>

        <ui-input
          id="poll_invite_email"
          v-model="note"
          :view="uiButtonView.default"
          :size="uiInputSize.xs"
          :placeholder="textAttributes.emailPlaceholder"
          :error-message="textAttributes.emailErrorMessage"
          :is-expanded="true"
        />
      </div>

      <ui-button
        :view="uiButtonView.action"
        :size="uiButtonSize.xl"
        :theme="uiButtonTheme.purple"
      >
        {{ textAttributes.sendInvites }}
      </ui-button>
    </div>
  </div>
</template>
