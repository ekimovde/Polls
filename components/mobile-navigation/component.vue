<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ul :class="b('list')">
      <li
        v-for="(item, index) in navigationList"
        :key="index"
      >
        <ul :class="b('links')">
          <li
            v-for="(element, key) in item"
            :key="key"
          >
            <nuxt-link
              v-slot="{ route }"
              :class="b('link', { type: element.type })"
              :to="{ name: element.routeName }"
              :custom="true"
            >
              <ui-button
                :view="uiButtonView.simple"
                :size="uiButtonSize.byContent"
                :theme="uiButtonTheme.default"
                @click="open(route, element.type)"
              >
                <span>
                  {{ element.title }}
                </span>
              </ui-button>
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>

    <div :class="b('footer')">
      <avatar-block
        src=""
        :size="avatarBlockSize.default"
      />

      <div :class="b('block')">
        <p :class="b('name')">
          Denis Ekimov
        </p>

        <p :class="b('role')">
          Company Owner
        </p>
      </div>
    </div>
  </div>
</template>
