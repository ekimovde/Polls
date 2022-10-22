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
        :is-nuxt-link="true"
        :to="authRegistrationRoute"
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
            :size="uiInputSize.xl"
            :placeholder="textAttributes.emailAddress"
            :is-expanded="true"
          />

          <ui-input
            :size="uiInputSize.xl"
            :placeholder="textAttributes.password"
            :is-expanded="true"
          />

          <ui-button
            :view="uiButtonView.action"
            :size="uiButtonSize.xl"
            :theme="uiButtonTheme.purple"
            :is-expanded="true"
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
            :is-nuxt-link="true"
            :to="authRegistrationRoute"
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
