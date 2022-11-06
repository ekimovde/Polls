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
              {{ displayedPollName }}
            </span>

            {{ textAttributes.joinLink }}
          </h1>

          <p :class="b('text')">
            {{ textAttributes.description }}
          </p>
        </div>

        <ui-input
          :size="uiInputSize.xs"
          :placeholder="textAttributes.placeholder"
          :is-expanded="true"
          :is-disabled="true"
        />

        <div :class="b('buttons')">
          <ui-button
            :view="uiButtonView.action"
            :size="uiButtonSize.xl"
            :theme="uiButtonTheme.purple"
            :is-nuxt-link="true"
            :to="pollNewSummaryIdRoute"
          >
            {{ textAttributes.continue }}
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
</template>
