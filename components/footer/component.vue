<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div
    :class="b()"
    :data-test="tid()"
  >
    <div :class="b('info')">
      <brand-block />

      <ul :class="b('list')">
        <li
          v-for="(item, index) in footerSocialLinks"
          :key="index"
        >
          <a
            :class="b('social-link')"
            :href="item.href"
            :target="item.target"
          >
            <img
              :class="b('image')"
              :src="item.src"
              alt=""
            >
          </a>
        </li>
      </ul>

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
</template>
