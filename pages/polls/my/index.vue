<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('inner-wrapper', { empty: !hasPolls })">
      <template v-if="hasPolls">
        <div :class="b('wrapper')">
          <div :class="b('header')">
            <h1 :class="b('title')">
              {{ textAttributes.title }}
            </h1>

            <p :class="b('text')">
              {{ displayedDescription }}
            </p>
          </div>

          <ui-button
            :view="uiButtonView.simple"
            :size="uiButtonSize.byContent"
            :theme="uiButtonTheme.purple"
            :is-nuxt-link="true"
            :to="pollNewRoute"
          >
            <span :class="b('button-text')">
              {{ textAttributes.createPoll }}

              <i
                class="bx bx-plus"
                :class="b('icon')"
              />
            </span>
          </ui-button>
        </div>

        <ul :class="b('list')">
          <li
            v-for="(item, index) in polls"
            :key="index"
          >
            <poll-block
              :poll="item"
              :view="pollBlockView.regular"
            />
          </li>
        </ul>
      </template>

      <poll-empty-banner
        v-else
        :class="b('poll-empty-banner')"
      />
    </div>
  </div>
</template>
