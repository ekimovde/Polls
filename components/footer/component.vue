<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <footer
    :class="b()"
    :data-test="tid()"
  >
    <div :class="b('inner-wrapper')">
      <div :class="b('info')">
        <brand-block />

        <social-links :class="b('social-links')" />

        <div :class="b('copyright')">
          {{ displayedCopyright }}
        </div>
      </div>

      <div :class="b('wrapper')">
        <ul :class="b('links')">
          <li
            v-for="(item, index) in footerLinks"
            :key="index"
          >
            <nuxt-link
              :class="b('link')"
              :to="{ name: item.routeName }"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>

        <ul :class="b('links')">
          <li
            v-for="(item, index) in footerOtherLinks"
            :key="index"
          >
            <nuxt-link
              :class="b('link')"
              :to="{ name: item.routeName }"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
