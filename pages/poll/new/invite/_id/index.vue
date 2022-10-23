<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('top-nav')">
      <brand-block :size="brandBlockSize.default" />

      <p :class="b('navigation')">
        {{ textAttributes.backTo }}

        <ui-button
          :view="uiButtonView.simple"
          :size="uiButtonSize.byContent"
          :theme="uiButtonTheme.purple"
          :is-nuxt-link="true"
          :to="pollsRoute"
        >
          <span :class="b('button-text')">
            {{ textAttributes.polls }}
          </span>
        </ui-button>
      </p>
    </div>

    <div :class="b('inner-wrapper')">
      <div :class="b('wrapper')">
        <div :class="b('header')">
          <h1 :class="b('title')">
            {{ textAttributes.title }}

            <span>
              {{ id }}
            </span>

            {{ textAttributes.viaEmail }}
          </h1>

          <p :class="b('text')">
            {{ textAttributes.description }}
          </p>
        </div>

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
              :size="uiInputSize.xs"
              :placeholder="textAttributes.emailPlaceholder"
              :error-message="textAttributes.emailErrorMessage"
              :is-expanded="true"
            />
          </div>

          <div :class="b('buttons')">
            <ui-button
              :view="uiButtonView.action"
              :size="uiButtonSize.xl"
              :theme="uiButtonTheme.purple"
              @click="sendInvite"
            >
              {{ textAttributes.sendInvites }}
            </ui-button>

            <ui-button
              :view="uiButtonView.action"
              :size="uiButtonSize.xl"
              :theme="uiButtonTheme.darkGrey"
              :is-nuxt-link="true"
              :to="pollNewSummaryIdRoute"
            >
              {{ textAttributes.skip }}
            </ui-button>
          </div>

          <p :class="b('copyright')">
            {{ displayedCopyright }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
