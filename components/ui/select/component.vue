<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    v-click-outside="deactivate"
    :class="b()"
    :data-test="tid()"
    @keydown.esc="deactivate"
  >
    <label :class="b('label')">
      What is your timezone
    </label>

    <div
      :class="b('wrapper', { open: isActivated })"
      @click="activate"
    >
      <div :class="b('block')">
        <span :class="b('text')">
          {{ diaplayedCurrentValue }}
        </span>

        <i
          class='bx bx-chevron-down'
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
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
