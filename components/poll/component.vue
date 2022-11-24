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
            :view="displayedButtonView"
            :size="displayedButtonSize"
            :theme="displayedButtonTheme"
            :is-loading="isLoading"
            @click="action"
          >
            <i
              v-if="isMemberOfPoll"
              class="bx bx-chevron-right"
            />

            <span v-else>
              {{ textAttributes.join }}
            </span>
          </ui-button>
        </div>
      </div>

      <div
        v-if="isRegularView"
        :class="b('outer-wrapper', { view })"
      >
        <ui-tooltip
          :placement="uiTooltipPlacement.top"
          :content="authorFullNameOfPoll"
        >
          <avatar-block
            :src="authorAvatarOfPoll"
            :size="avatarBlockSize.default"
          />
        </ui-tooltip>

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
