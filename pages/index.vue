<template>
  <div :class="b()">
    <div :class="b('inner-wrapper')">
      <div :class="b('header')">
        <h1 :class="b('title')">
          {{ textAttributes.title }}
        </h1>

        <p :class="b('description')">
          {{ textAttributes.description }}
        </p>

        <div :class="b('buttons')">
          <ui-button
            :view="uiButtonView.action"
            :size="uiButtonSize.xl"
            :theme="uiButtonTheme.purple"
            :is-expanded="true"
            :is-nuxt-link="true"
            :to="linkRoute"
          >
            {{ textAttributes.startButton }}
          </ui-button>

          <ui-button
            :view="uiButtonView.action"
            :size="uiButtonSize.xl"
            :theme="uiButtonTheme.green"
            :is-expanded="true"
          >
            {{ textAttributes.findOutMore }}
          </ui-button>
        </div>
      </div>

      <home-features :class="b('section')" />
      <home-stand-ups :class="b('section')" />
      <home-discussions :class="b('section')" />
      <home-insights :class="b('section')" />
      <home-task-management :class="b('section')" />
      <home-remote :class="b('section')" />
      <home-poll :class="b('poll')" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, mixins } from 'nuxt-property-decorator';
  import { Route } from 'vue-router';
  import { COMPONENT_NAME, IndexPageTextAttribute } from './attributes';
  import { HomeFeatures } from '~/components/home/features';
  import { HomeDiscussions } from '~/components/home/discussions';
  import { HomeInsights } from '~/components/home/insights';
  import { HomeStandUps } from '~/components/home/stand-ups';
  import { HomeTaskManagement } from '~/components/home/task-management';
  import { HomeRemote } from '~/components/home/remote';
  import { HomePoll } from '~/components/home/poll';
  import { Translatable } from '~/components/shared/translatable';
  import { uiButton } from '~/components/ui';
  import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
  import { routes } from '~/shared/repository/routes';
  import { RoutesName } from '~/shared/repository/routes/routes-name';

  @Component({
    name: COMPONENT_NAME,
    components: {
      HomeFeatures,
      HomeStandUps,
      HomeDiscussions,
      HomeInsights,
      HomeTaskManagement,
      HomeRemote,
      HomePoll,
      uiButton
    }
  })
  export default class HomePage extends mixins(Vue, Translatable) {
    readonly textAttributes = this.transAll(IndexPageTextAttribute);

    readonly userRepo = this.$projectServices.userRepo;

    readonly uiButtonView = UiButtonView;
    readonly uiButtonSize = UiButtonSize;
    readonly uiButtonTheme = UiButtonTheme;

    get isAuthorized(): boolean {
      return this.userRepo.isAuthorized;
    }

    get linkRoute(): Partial<Route> {
      return this.isAuthorized
        ? routes[RoutesName.dashboard]
        : routes[RoutesName.authRegistration];
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/scss/helper.scss';

  .index-page {
    @include fontInter14Regular;

    display: flex;

    &__inner-wrapper {
      margin: 0 auto;
      width: 1200px;

      @media screen and (max-width: 1240px) {
        width: 90%;
      }
    }

    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 800px;
      text-align: center;
      margin: 0 auto;
      padding-top: 120px;

      @media screen and (max-width: 900px) {
        width: 100%;
        align-items: flex-start;
        text-align: start;
        margin: initial;
      }

      @media screen and (max-width: 600px) {
        align-items: center;
        text-align: center;
      }
    }

    &__title {
      @include fontInter64Bold;

      padding: 0;
      margin: 0;
      line-height: 68px;
      color: $black;

      @media screen and (max-width: 600px) {
        @include fontInter32Bold;

        line-height: 38px;
      }
    }

    &__description {
      @include fontInter18Regular;

      padding: 0;
      margin: 0;
      line-height: 26px;
      color: #777777;
      margin: 20px 0px;

      @media screen and (max-width: 600px) {
        @include fontInter17Regular;

        line-height: 21px;
        margin: 10px 0 20px 0;
      }
    }

    &__buttons {
      display: flex;
      align-items: center;
      column-gap: 15px;
      width: 100%;

      @media screen and (min-width: 600px) {
        max-width: 500px;
      }

      @media screen and (max-width: 500px) {
        flex-direction: column;
        row-gap: 15px;
      }
    }

    &__section {
      padding-top: 120px;
    }

    &__poll {
      padding: 120px 0;
    }
  }
</style>
