<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('inner-wrapper')">
      <div :class="b('header')">
        <h1 :class="b('title')">
          {{ textAttributes.title }}
        </h1>

        <p :class="b('description')">
          {{ textAttributes.description }}

          <ui-button
            :view="uiButtonView.simple"
            :size="uiButtonSize.byContent"
            :theme="uiButtonTheme.purple"
            :is-nuxt-link="true"
            :to="pollIdRoute"
          >
            {{ id }}
          </ui-button>
        </p>
      </div>

      <div :class="b('wrapper')">
        <ul :class="b('list')">
          <li
            v-for="(item, index) in pollMembers"
            :key="index"
            :class="b('item')"
          >
            <div :class="b('block')">
              <avatar-block
                :src="item.avatar"
                :size="avatarBlockSize.default"
              />

              <div :class="b('inner-block')">
                <p :class="b('name')">
                  {{ item.name }}

                  <span>
                    {{ textAttributes.you }}
                  </span>
                </p>

                <p :class="b('role')">
                  {{ item.role }}
                </p>
              </div>
            </div>

            <ui-button
              :view="uiButtonView.simple"
              :size="uiButtonSize.byContent"
              :theme="uiButtonTheme.pink"
            >
              <span :class="b('button-text')">
                {{ textAttributes.remove }}
              </span>
            </ui-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
