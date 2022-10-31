<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <nav
    :class="b({ view })"
    :data-test="tid()"
  >
    <brand-block />
    <navigation-block :class="b('block')" />

    <div :class="b('navigation-items')">
      <ui-button
        v-if="isButtonDashboardShown"
        :view="uiButtonView.action"
        :size="uiButtonSize.xs"
        :theme="uiButtonTheme.purple"
        :is-nuxt-link="true"
        :to="dashboardRoute"
      >
        <span :class="b('button-text')">
          {{ textAttributes.dashboard }}
        </span>
      </ui-button>

      <ui-button
        v-if="isButtonAuthShown"
        :view="uiButtonView.simple"
        :size="uiButtonSize.byContent"
        :theme="uiButtonTheme.purple"
        :is-nuxt-link="true"
        :to="authRoute"
      >
        <span :class="b('button-text')">
          {{ textAttributes.login }}
        </span>
      </ui-button>

      <account-block
        v-if="isAccountBlockShown"
        :class="b('block')"
      />
    </div>

    <ui-button
      :view="uiButtonView.simple"
      :size="uiButtonSize.byContent"
      :theme="theme"
      :class="b('ui-button')"
      @click="toggleVisible"
    >
      <i
        class="bx bx-menu"
        :class="b('icon')"
      />
    </ui-button>

    <transition name="mobile-navigation">
      <mobile-navigation v-show="isVisible" />
    </transition>
  </nav>
</template>
