import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, UiButtonTextAttribute, UiButtonTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';

export enum UiButtonView {
  action = 'action',
  simple = 'simple',
  extra = 'extra',
  default = 'default'
}

export enum UiButtonTheme {
  default = 'default',
  purple = 'purple',
  grey = 'grey',
  darkGrey = 'dark-grey',
  green = 'green',
  pink = 'pink',
  red = 'red'
}

export enum UiButtonSize {
  xl = 'xl',
  xs = 'xs',
  byContent = 'by-content'
}

export enum UiButtonTag {
  button = 'button',
  link = 'a',
  nuxtLink = 'nuxt-link'
}

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: String,
    default: ''
  }) readonly href: string;

  @Prop({
    type: Object,
    default: () => ({})
  }) readonly to: Partial<Route>;

  @Prop({
    type: String,
    validator: val => Object.values(UiButtonView).includes(val),
    default: UiButtonView.action
  }) readonly view: UiButtonView;

  @Prop({
    type: String,
    validator: val => Object.values(UiButtonTheme).includes(val),
    default: UiButtonTheme.purple
  }) readonly theme: UiButtonTheme;

  @Prop({
    type: String,
    validator: val => Object.values(UiButtonSize).includes(val),
    default: UiButtonSize.xl
  }) readonly size: UiButtonSize;

  @Prop({
    type: String,
    validator: val => Object.values(UiButtonTag).includes(val),
    default: UiButtonTag.button
  }) readonly tag: UiButtonTag;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isLoading: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isNuxtLink: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isDisabled: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isExpanded: boolean;

  readonly textAttributes = this.transAll(UiButtonTextAttribute)
  readonly testLocators = UiButtonTestLocator;

  get isLink(): boolean {
    return !!this.href;
  }

  get attributes() : ButtonAttributes {
    const attributes: ButtonAttributes = {};

    if (this.isNuxtLink) {
      attributes.to = this.to;
    }

    if (this.isLink) {
      attributes.href = this.href;
    }

    const isDisabled = this.isDisabled || this.isLoading;

    if (isDisabled && this.tag === UiButtonTag.button && !attributes?.href) {
      attributes.disabled = isDisabled;
    }

    return attributes;
  }

  get currentTag() : string {
    if (this.isNuxtLink) {
      return UiButtonTag.nuxtLink;
    }

    if (this.isLink) {
      return UiButtonTag.link;
    }

    return this.tag;
  }
}

export interface ButtonAttributes {
  href?: string
  disabled?: boolean
  isNuxtLink?: boolean
  to?: Partial<Route>
  view?: UiButtonView
  size?: UiButtonSize
}
