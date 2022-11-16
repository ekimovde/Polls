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
              v-model="$v.form.name.$model"
              :size="uiInputSize.xl"
              :placeholder="textAttributes.namePlaceholder"
              :is-expanded="true"
              :error-message="textAttributes.nameErrorMessage"
            />
          </div>

          <div :class="b('input-wrapper')">
            <label
              for="poll_color"
              :class="b('label')"
            >
              {{ textAttributes.colorLabel }}
            </label>

            <ui-select
              id="poll_color"
              v-model="$v.form.color.$model"
              :options="options"
              :view="uiSelectView.regular"
              :is-expanded="true"
            />
          </div>

          <div :class="b('input-wrapper')">
            <label :class="b('label')">
              {{ textAttributes.dateLabel }}
            </label>

            <div :class="b('split-fields')">
              <ui-select
                v-model="$v.form.date.month.$model"
                :options="optionsWithDateMonths"
                :view="uiSelectView.default"
                :is-expanded="true"
              />

              <ui-select
                v-model="$v.form.date.day.$model"
                :options="optionsWithDateDays"
                :view="uiSelectView.default"
                :is-expanded="true"
              />
            </div>
          </div>

          <div :class="b('input-wrapper')">
            <label :class="b('label')">
              {{ textAttributes.timeLabel }}
            </label>

            <div :class="b('split-fields')">
              <ui-select
                v-model="$v.form.time.hour.$model"
                :options="optionsWithTimeHours"
                :view="uiSelectView.default"
                :is-expanded="true"
              />

              <ui-select
                v-model="$v.form.time.minute.$model"
                :options="optionsWithTimeMinutes"
                :view="uiSelectView.default"
                :is-expanded="true"
              />
            </div>
          </div>

          <div :class="b('block')">
            <p :class="b('label', { default: true })">
              {{ textAttributes.switchLabel }}
            </p>

            <ui-switch
              v-model="form.isPublic"
              :size="uiSwitchSize.default"
              :view="uiSwitchView.regular"
              :active-text="displayedSwitchContent"
            />
          </div>

          <poll-question :question.sync="form.question" />

          <ui-button
            :view="uiButtonView.action"
            :size="uiButtonSize.xl"
            :theme="uiButtonTheme.purple"
            :is-disabled="isFormInvalid"
            :is-loading="isLoading"
            @click="setPoll"
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
