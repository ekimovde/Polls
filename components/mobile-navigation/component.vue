<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <ul :class="b('list')">
      <li
        v-for="(item, index) in displayedNavigationsList"
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

      <social-links v-if="isIndexPage" />
    </ul>

    <div :class="b('footer')">
      <div
        v-if="isUserInfoShown"
        :class="b('user-info')"
      >
        <avatar-block
          src=""
          :size="avatarBlockSize.default"
        />

        <div :class="b('block')">
          <p :class="b('name')">
            {{ displayedUserName }}
          </p>

          <p :class="b('nick-name')">
            {{ displayedUserNickName }}
          </p>
        </div>
      </div>

      <div
        v-if="isStartAppButtonsShown"
        :class="b('buttons')"
      >
        <ui-button
          :view="uiButtonView.action"
          :size="uiButtonSize.xs"
          :theme="uiButtonTheme.purple"
          :is-expanded="true"
          :is-nuxt-link="true"
          :to="authRegistrationRoute"
        >
          {{ textAttributes.startYourTrial }}
        </ui-button>

        <ui-button
          :view="uiButtonView.action"
          :size="uiButtonSize.xs"
          :theme="uiButtonTheme.darkGrey"
          :is-expanded="true"
          :is-nuxt-link="true"
          :to="authRoute"
        >
          {{ textAttributes.login }}
        </ui-button>
      </div>

      <ui-button
        v-if="isDashboardButtonShown"
        :view="uiButtonView.action"
        :size="uiButtonSize.xs"
        :theme="uiButtonTheme.purple"
        :is-expanded="true"
        :is-nuxt-link="true"
        :to="dashboardRoute"
      >
        {{ textAttributes.dashboard }}
      </ui-button>
    </div>
  </div>
</template>
