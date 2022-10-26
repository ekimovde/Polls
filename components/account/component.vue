<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ui-dropdown :is-visible.sync="isVisible">
      <template slot="reference">
        <ui-button
          :view="uiButtonView.simple"
          :size="uiButtonSize.byContent"
          :theme="uiButtonTheme.default"
          @click="toggleVisible"
        >
          <avatar-block
            src=""
            :size="avatarBlockSize.default"
          />

          <i
            class="bx bx-chevron-down"
            :class="b('icon', { active: isVisible })"
          />
        </ui-button>
      </template>

      <template slot="content">
        <ul :class="b('list')">
          <li
            v-for="(item, index) in dropdownList"
            :key="index"
            :class="b('inner-item')"
          >
            <ul :class="b('list')">
              <li
                v-for="(element, key) in item"
                :key="key"
                :class="b('item')"
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
      </template>
    </ui-dropdown>
  </div>
</template>
