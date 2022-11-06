<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b({ view })"
    :data-test="tid()"
  >
    <div :class="b('inner-wrapper')">
      <div :class="b('wrapper')">
        <div :class="b('outer-wrapper')">
          <shared-color :theme="poll.color" />

          <div :class="b('title')">
            {{ poll.name }}
          </div>
        </div>

        <div :class="b('outer-wrapper')">
          <shared-badge
            v-if="isDefaultView"
            :theme="poll.color"
          >
            {{ poll.category }}
          </shared-badge>

          <ui-button
            :view="uiButtonView.default"
            :size="uiButtonSize.xl"
            :theme="uiButtonTheme.grey"
            @click="open"
          >
            <i class="bx bx-chevron-right" />
          </ui-button>
        </div>
      </div>

      <div
        v-if="isRegularView"
        :class="b('outer-wrapper', { view })"
      >
        <avatar-block
          src=""
          :size="avatarBlockSize.default"
        />

        <p :class="b('text')">
          {{ displayedDate }}
        </p>

        <shared-badge :theme="poll.color">
          {{ poll.category }}
        </shared-badge>
      </div>
    </div>
  </div>
</template>
