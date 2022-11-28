<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ul :class="b('list')">
      <li
        v-for="item in answers"
        :key="item.timestamp"
        :class="b('item')"
      >
        <p :class="b('text')">
          {{ getDisplayedProgress(item.timestamp) }}
        </p>

        <div :class="b('wrapper')">
          <div :class="b('block')">
            <h5 :class="b('text', { bold: true })">
              {{ item.text }}
            </h5>

            <shared-badge
              v-if="isMyAnswer(item.authors)"
              :theme="sharedColorTheme.purple"
              :size="sharedBadgeSize.small"
            >
              {{ textAttributes.yourChoice }}
            </shared-badge>
          </div>

          <ui-progress
            :progress="vote.progress[item.timestamp]"
            :theme="uiProgressTheme.blue"
            :view="uiProgressView.regular"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
