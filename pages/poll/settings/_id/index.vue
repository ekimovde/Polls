<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('inner-wrapper')">
      <div :class="b('header')">
        <h1 :class="b('title')">
          {{ textAttributes.title }}
        </h1>

        <div :class="b('description')">
          {{ textAttributes.description }}

          <ui-button
            :view="uiButtonView.simple"
            :size="uiButtonSize.byContent"
            :theme="uiButtonTheme.purple"
            :is-nuxt-link="true"
            :to="pollIdRoute"
          >
            <span :class="b('button-text')">
              {{ id }}
            </span>
          </ui-button>
        </div>
      </div>

      <div :class="b('form-wrapper')">
        <div :class="b('input-wrapper')">
          <label
            for="poll_name"
            :class="b('label')"
          >
            {{ textAttributes.pollName }}
          </label>

          <ui-input
            id="poll_name"
            v-model="name"
            :size="uiInputSize.xs"
            :placeholder="textAttributes.placeholder"
            :is-expanded="true"
          />
        </div>

        <div :class="b('input-wrapper')">
          <label
            for="poll_colour"
            :class="b('label')"
          >
            {{ textAttributes.chooseColor }}
          </label>

          <ui-select
            id="poll_colour"
            v-model="colour"
            :view="uiSelectView.regular"
            :options="options"
            :is-expanded="true"
          />
        </div>

        <div :class="b('notifications')">
          <h3 :class="b('sub-title')">
            {{ textAttributes.notifications }}
          </h3>

          <div :class="b('block')">
            <p :class="b('text')">
              {{ textAttributes.notificationsDescription }}
            </p>

            <ui-button
              :view="uiButtonView.simple"
              :size="uiButtonSize.byContent"
              :theme="uiButtonTheme.purple"
            >
              <span :class="b('button-text')">
                {{ textAttributes.yes }}
              </span>
            </ui-button>
          </div>
        </div>

        <ui-button
          :view="uiButtonView.action"
          :size="uiButtonSize.xl"
          :theme="uiButtonTheme.purple"
        >
          {{ textAttributes.saveChanges }}
        </ui-button>
      </div>
    </div>
  </div>
</template>
