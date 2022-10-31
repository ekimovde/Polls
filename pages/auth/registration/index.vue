<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('brand')">
      <brand-block :size="brandBlockSize.default" />
    </div>

    <div :class="b('columns-wrapper')">
      <div :class="b('left-column')">
        <div :class="b('left-column-outer')">
          <div :class="b('left-column-inner')">
            <div :class="b('header')">
              <h1 :class="b('title')">
                {{ textAttributes.title }}
              </h1>

              <p :class="b('text')">
                {{ textAttributes.description }}
              </p>
            </div>

            <div :class="b('form-wrapper')">
              <div :class="b('split-fields')">
                <ui-input
                  v-model="form.firstName"
                  :size="uiInputSize.xl"
                  :placeholder="textAttributes.firstName"
                  :error-message="textAttributes.errorMessage"
                  :is-error="hasFirstNameInputError"
                  :is-expanded="true"
                />

                <ui-input
                  v-model="form.lastName"
                  :size="uiInputSize.xl"
                  :placeholder="textAttributes.lastName"
                  :error-message="textAttributes.errorMessage"
                  :is-error="hasLastNameInputError"
                  :is-expanded="true"
                />
              </div>

              <ui-input
                v-model="form.nickName"
                :size="uiInputSize.xl"
                :placeholder="textAttributes.nickName"
                :error-message="textAttributes.errorMessage"
                :is-error="hasNickNameInputError"
                :is-expanded="true"
              />

              <ui-input
                v-model="form.email"
                :size="uiInputSize.xl"
                :placeholder="textAttributes.email"
                :error-message="textAttributes.emailErrorMessage"
                :is-error="hasEmailInputError"
                :is-expanded="true"
              />

              <ui-input
                v-model="form.password"
                :size="uiInputSize.xl"
                :type="uiInputType.password"
                :placeholder="textAttributes.password"
                :error-message="textAttributes.passwordErrorMessage"
                :is-error="hasPasswordInputError"
                :is-expanded="true"
              />

              <p :class="b('text')">
                {{ textAttributes.agreeInfo }}
              </p>

              <ui-button
                :view="uiButtonView.action"
                :size="uiButtonSize.xl"
                :theme="uiButtonTheme.purple"
                :is-expanded="true"
                :is-loading="isLoading"
                @click="signup"
              >
                {{ textAttributes.createAccount }}
              </ui-button>
            </div>

            <div :class="b('bottom-link')">
              {{ textAttributes.accountQuestion }}

              <ui-button
                :view="uiButtonView.simple"
                :size="uiButtonSize.byContent"
                :theme="uiButtonTheme.grey"
                :is-disabled="isLoading"
                @click="signin"
              >
                <span :class="b('button-text')">
                  {{ textAttributes.logIn }}
                </span>
              </ui-button>
            </div>
          </div>
        </div>
      </div>

      <div :class="b('right-column')">
        <div :class="b('right-column-inner')">
          <img
            :class="b('image')"
            :src="picture"
            alt=""
          >
        </div>
      </div>
    </div>

    <div :class="b('copyright')">
      {{ displayedCopyright }}
    </div>
  </div>
</template>
