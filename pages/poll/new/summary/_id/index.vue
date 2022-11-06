<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('top-nav')">
      <brand-block />

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
        <h1 :class="b('title')">
          {{ textAttributes.title }}

          <span>
            {{ displayedPollName }}
          </span>

          {{ textAttributes.soWhatNext }}
        </h1>

        <summary-block />

        <ui-button
          :view="uiButtonView.action"
          :size="uiButtonSize.xl"
          :theme="uiButtonTheme.purple"
          :is-nuxt-link="true"
          :to="pollIdRoute"
        >
          {{ textAttributes.continueToPoll }}
        </ui-button>

        <p :class="b('copyright')">
          {{ displayedCopyright }}
        </p>
      </div>
    </div>
  </div>
</template>
