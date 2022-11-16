<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <ui-modal
    :is-visible="isVisible"
    :view="uiModalView.regular"
    @close="close"
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

        <ui-input
          :value="search"
          :view="uiInputView.default"
          :size="uiInputSize.xs"
          :is-expanded="true"
          :placeholder="textAttributes.placeholder"
          @input="input"
        />
      </div>

      <masonry
        v-infinite-scroll="getPhotos"
        :gutter="10"
        :class="b('masonry')"
        :infinite-scroll-disabled="isLoading"
      >
        <ui-button
          v-for="(item, index) in photos"
          :key="index"
          :view="uiButtonView.simple"
          :size="uiButtonSize.byContent"
          :theme="uiButtonTheme.default"
          :class="b('button')"
          @click="choose(item.urls.full)"
        >
          <figure :class="b('figure')">
            <img
              :src="item.urls.full"
              :class="b('image')"
              alt=""
            >
          </figure>
        </ui-button>
      </masonry>
    </div>
  </ui-modal>
</template>
