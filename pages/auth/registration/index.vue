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
                  :size="uiInputSize.xl"
                  :placeholder="textAttributes.firstName"
                  :is-expanded="true"
                />

                <ui-input
                  :size="uiInputSize.xl"
                  :placeholder="textAttributes.lastName"
                  :is-expanded="true"
                />
              </div>

              <ui-input
                :size="uiInputSize.xl"
                :placeholder="textAttributes.jobTitle"
                :is-expanded="true"
              />

              <ui-input
                :size="uiInputSize.xl"
                :placeholder="textAttributes.email"
                :is-expanded="true"
              />

              <ui-input
                :size="uiInputSize.xl"
                :type="uiInputType.password"
                :placeholder="textAttributes.password"
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
                :is-nuxt-link="true"
                :to="authLoginRoute"
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
