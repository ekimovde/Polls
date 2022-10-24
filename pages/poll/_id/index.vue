<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('poll-header')">
      <div :class="b('poll-header-inner')">
        <div :class="b('inner-wrapper')">
          <div :class="b('top')">
            <div :class="b('block')">
              <h1 :class="b('title')">
                {{ id }}
              </h1>

              <p :class="b('text')">
                {{ textAttributes.description }}
              </p>
            </div>

            <ui-button
              :view="uiButtonView.action"
              :size="uiButtonSize.xs"
              :theme="uiButtonTheme.darkGrey"
              :is-nuxt-link="true"
              :to="pollSettingsIdRoute"
            >
              {{ textAttributes.settings }}
            </ui-button>
          </div>

          <div :class="b('bottom')">
            <tab-links />

            <avatar-block
              src=""
              :size="avatarBlockSize.xs"
              :class="b('avatar')"
            />
          </div>
        </div>
      </div>
    </div>

    <div :class="b('inner-wrapper')">
      fassaf
    </div>
  </div>
</template>
