<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ui-dropdown
      :is-visible.sync="isVisible"
      :placement="uiDropdownPlacement.bottomEnd"
    >
      <template slot="reference">
        <ui-button
          :view="uiButtonView.simple"
          :size="uiButtonSize.byContent"
          :theme="uiButtonTheme.default"
        >
          <avatar-block src="" />

          <i
            class='bx bx-chevron-down'
            :class="b('icon', { active: isVisible })"
          />
        </ui-button>
      </template>

      <template slot="content">
        <ul :class="b('list')">
          <li
            v-for="(item, index) in accountDropdownList"
            :key="index"
            :class="b('inner-item')"
          >
            <ul :class="b('list')">
              <li
                v-for="(element, index) in item"
                :key="index"
                :class="b('item')"
              >
                <nuxt-link
                  :class="b('link', { type: element.type })"
                  :to="{ name: element.routeName }"
                  :custom="true"
                  v-slot="{ route }"
                >
                  <ui-button
                    :view="uiButtonView.simple"
                    :size="uiButtonSize.byContent"
                    :theme="uiButtonTheme.default"
                    @click="open(route, element.type)"
                  >
                    <p :class="b('text')">
                      {{ element.title }}
                    </p>
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
