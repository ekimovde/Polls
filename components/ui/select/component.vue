<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    v-click-outside="deactivate"
    :class="b()"
    :data-test="tid()"
    @keydown.esc="deactivate"
  >
    <div
      :class="b('wrapper', { open: isActivated })"
      @click="activate"
    >
      <div :class="b('block')">
        <div :class="b('inner-block')">
          <shared-color
            v-if="isSharedColorShown"
            :theme="value"
            :size="sharedColorSize.xs"
          />

          <span :class="b('text', { default: !hasValue })">
            {{ diaplayedCurrentValue }}
          </span>
        </div>

        <i
          class="bx bx-chevron-down"
          :class="b('icon')"
        />
      </div>

      <ul :class="b('list', { open: isActivated })">
        <li
          v-for="(item, index) in options"
          :key="index"
          :class="b('item')"
          @click.stop="select(item)"
        >
          <shared-color
            v-if="isRegularView"
            :theme="item.value"
            :size="sharedColorSize.xs"
          />

          <span>
            {{ item.label }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
