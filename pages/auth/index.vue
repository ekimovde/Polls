<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('session-top-link')">
      {{ textAttributes.accountQuestion }}

      <ui-button
        :view="uiButtonView.simple"
        :size="uiButtonSize.byContent"
        :theme="uiButtonTheme.purple"
        :is-disabled="isLoading"
        @click="signup"
      >
        <span :class="b('button-text')">
          {{ textAttributes.signUp }}
        </span>
      </ui-button>
    </div>

    <div :class="b('inner-wrapper')">
      <div :class="b('wrapper')">
        <brand-block
          :size="brandBlockSize.xl"
          :class="b('brand')"
        />

        <div :class="b('header')">
          <h1 :class="b('title')">
            {{ textAttributes.title }}
          </h1>

          <p :class="b('text')">
            {{ textAttributes.description }}
          </p>
        </div>

        <div :class="b('form-wrapper')">
          <ui-input
            v-model="$v.form.email.$model"
            :size="uiInputSize.xl"
            :placeholder="textAttributes.email"
            :is-expanded="true"
            :is-error="hasEmailInputError"
            :error-message="textAttributes.emailErrorMessage"
          />

          <ui-input
            v-model="$v.form.password.$model"
            :size="uiInputSize.xl"
            :placeholder="textAttributes.password"
            :type="uiInputType.password"
            :is-expanded="true"
            :is-error="hasPasswordInputError"
            :error-message="textAttributes.passwordErrorMessage"
          />

          <ui-button
            :view="uiButtonView.action"
            :size="uiButtonSize.xl"
            :theme="uiButtonTheme.purple"
            :is-expanded="true"
            :is-loading="isLoading"
            @click="signin"
          >
            {{ textAttributes.title }}
          </ui-button>
        </div>

        <div :class="b('footer-links')">
          {{ textAttributes.forgotPassword }}

          <ui-button
            :view="uiButtonView.simple"
            :size="uiButtonSize.byContent"
            :theme="uiButtonTheme.grey"
            :is-disabled="isLoading"
            @click="resetPassword"
          >
            <span :class="b('button-text', { small: true })">
              {{ textAttributes.reset }}
            </span>
          </ui-button>
        </div>

        <p :class="b('text', { small: true })">
          {{ displayedCopyright }}
        </p>
      </div>
    </div>
  </div>
</template>
