<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('inner-wrapper')">
      <div :class="b('wrapper')">
        <div :class="b('header')">
          <h1 :class="b('title')">
            {{ textAttributes.title }} {{ id }}
          </h1>

          <p :class="b('description')">
            {{ textAttributes.description }}

            <ui-button
              :view="uiButtonView.simple"
              :size="uiButtonSize.byContent"
              :theme="uiButtonTheme.purple"
              :is-nuxt-link="true"
              :to="pollIdRoute"
            >
              <span>
                {{ id }}
              </span>
            </ui-button>
          </p>
        </div>

        <div :class="b('block')">
          <settings-share />
          <settings-invite />
        </div>
      </div>
    </div>
  </div>
</template>
