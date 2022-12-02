<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ul :class="b('list')">
      <li
        v-for="(item, index) in answers"
        :key="index"
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
              v-if="isMyAnswer(item.timestamp)"
              :theme="sharedColorTheme.green"
              :size="sharedBadgeSize.xs"
            >
              {{ textAttributes.yourAnswer }}
            </shared-badge>
          </div>

          <ui-progress
            :progress="getProgress(item.timestamp)"
            :theme="color"
            :view="uiProgressView.default"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
