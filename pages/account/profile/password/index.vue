<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('inner-wrapper')">
      <h1 :class="b('title')">
        {{ textAttributes.title }}
      </h1>

      <div :class="b('wrapper')">
        <div :class="b('input-wrapper')">
          <label
            :class="b('label')"
            for="current_password"
          >
            {{ textAttributes.currentPassword }}
          </label>

          <ui-input
            id="current_password"
            v-model="$v.form.password.$model"
            :is-expanded="true"
            :placeholder="textAttributes.placeholder"
            :type="uiInputType.password"
            :is-error="hasPasswordInputError"
            :error-message="textAttributes.errorMessage"
          />
        </div>

        <div :class="b('input-wrapper')">
          <label
            :class="b('label')"
            for="password"
          >
            {{ textAttributes.newPassword }}
          </label>

          <ui-input
            id="password"
            v-model="$v.form.newPassword.$model"
            :is-expanded="true"
            :placeholder="textAttributes.placeholder"
            :type="uiInputType.password"
            :is-error="hasNewPasswordInputError"
            :error-message="textAttributes.errorMessage"
          />
        </div>

        <ui-button
          :view="uiButtonView.action"
          :size="uiButtonSize.xs"
          :theme="uiButtonTheme.purple"
          :is-disabled="isFormInvalid"
          :is-loading="isLoading"
          @click="setPassword"
        >
          {{ textAttributes.saveChanges }}
        </ui-button>
      </div>
    </div>
  </div>
</template>
