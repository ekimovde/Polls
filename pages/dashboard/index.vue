<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('inner-wrapper')">
      <h1 :class="b('title')">
        {{ textAttributes.title }}
      </h1>

      <progress-block :progress="userProgressResponse" />

      <div :class="b('wrapper')">
        <div>
          <h2 :class="b('sub-title')">
            {{ textAttributes.yourReactions }}
          </h2>

          <reactions-block
            :reactions="reactions"
            :view="reactionsBlockView.default"
          />
        </div>

        <div>
          <h2 :class="b('sub-title')">
            {{ textAttributes.yourPolls }}
          </h2>

          <ul :class="b('list')">
            <li
              v-for="(item, index) in userPopularPolls"
              :key="index"
            >
              <poll-block
                :poll="item"
                :view="pollBlockView.default"
              />
            </li>
          </ul>
        </div>
      </div>

      <ui-button
        :view="uiButtonView.simple"
        :size="uiButtonSize.byContent"
        :theme="uiButtonTheme.purple"
        :is-nuxt-link="true"
        :to="pollsRoute"
      >
        <span :class="b('button-text')">
          {{ textAttributes.allPolls }}

          <i
            class="bx bx-right-arrow-alt"
            :class="b('icon')"
          />
        </span>
      </ui-button>
    </div>
  </div>
</template>
