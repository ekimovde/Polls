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
        <div :class="b('header')">
          <h1 :class="b('title')">
            {{ textAttributes.title }}
          </h1>

          <p :class="b('text')">
            {{ textAttributes.description }}
          </p>
        </div>

        <div :class="b('form-wrapper')">
          <div :class="b('input-wrapper')">
            <label
              for="poll_name"
              :class="b('label')"
            >
              {{ textAttributes.nameLabel }}
            </label>

            <ui-input
              id="poll_name"
              v-model="name"
              :size="uiInputSize.xl"
              :placeholder="textAttributes.namePlaceholder"
              :is-expanded="true"
              :error-message="textAttributes.nameErrorMessage"
            />
          </div>

          <div :class="b('input-wrapper')">
            <label
              for="poll_colour"
              :class="b('label')"
            >
              {{ textAttributes.colourLabel }}
            </label>

            <ui-select
              id="poll_colour"
              v-model="colour"
              :options="options"
              :view="uiSelectView.regular"
              :is-expanded="true"
            />
          </div>

          <ui-button
            :view="uiButtonView.action"
            :size="uiButtonSize.xl"
            :theme="uiButtonTheme.purple"
          >
            {{ textAttributes.createPoll }}
          </ui-button>
        </div>

        <p :class="b('copyright-text')">
          {{ displayedCopyright }}
        </p>
      </div>
    </div>
  </div>
</template>
