<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('inner-wrapper')">
      <h1 :class="b('title')">
        {{ textAttributes.title }}
      </h1>

      <div :class="b('wrapper')">
        <div :class="b('split-fields')">
          <div :class="b('input-wrapper')">
            <label
              for="first_name"
              :class="b('label')"
            >
              {{ textAttributes.firstName }}
            </label>

            <ui-input
              id="first_name"
              :is-expanded="true"
              :placeholder="textAttributes.firstName"
              :size="uiInputSize.xs"
            />
          </div>

          <div :class="b('input-wrapper')">
            <label
              for="last_name"
              :class="b('label')"
            >
              {{ textAttributes.lastName }}
            </label>

            <ui-input
              id="last_name"
              :is-expanded="true"
              :placeholder="textAttributes.lastName"
              :size="uiInputSize.xs"
            />
          </div>
        </div>

        <div :class="b('input-wrapper')">
          <label
            for="job_title"
            :class="b('label')"
          >
            {{ textAttributes.jobTitle }}
          </label>

          <ui-input
            id="job_title"
            :is-expanded="true"
            :placeholder="textAttributes.jobTitle"
            :size="uiInputSize.xs"
          />
        </div>

        <ui-button
          :view="uiButtonView.action"
          :size="uiButtonSize.xs"
          :theme="uiButtonTheme.purple"
        >
          {{ textAttributes.saveChanges }}
        </ui-button>
      </div>

      <link-list />
    </div>
  </div>
</template>
