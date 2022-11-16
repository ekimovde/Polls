<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ui-modal
    :is-visible.sync="isVisible"
    :view="uiModalView.regular"
  >
    <div
      :class="b()"
      :data-test="tid()"
    >
      <h4 :class="b('title')">
        {{ textAttributes.addImage }}
      </h4>

      <div :class="b('wrapper')">
        <label
          for=""
          :class="b('label')"
        >
          {{ textAttributes.labelSearch }}
        </label>

        <uiInput
          v-model="search"
          :view="uiInputView.default"
          :size="uiInputSize.xs"
          :is-expanded="true"
          :placeholder="textAttributes.placeholder"
        />
      </div>

      <ul :class="b('list')">
        <li
          v-for="(item, index) in photos"
          :key="index"
        >
          <ui-button
            :view="uiButtonView.simple"
            :size="uiButtonSize.byContent"
            :theme="uiButtonTheme.default"
          >
            <figure :class="b('figure')">
              <img
                :src="item"
                :class="b('image')"
                alt=""
              >
            </figure>
          </ui-button>
        </li>
      </ul>
    </div>
  </ui-modal>
</template>
