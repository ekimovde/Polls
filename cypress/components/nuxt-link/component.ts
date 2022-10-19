import { Component, Prop, Vue } from 'vue-property-decorator';

export const nuxtLinkId = 'nuxt-link';

@Component
export default class FakeNuxtLink extends Vue {
  @Prop({
    type: String
  }) readonly to: string

  get link(): string {
    return this.to ?? '#';
  }

  get id(): string {
    return nuxtLinkId;
  }
};
