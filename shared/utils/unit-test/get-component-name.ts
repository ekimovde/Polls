import Vue from 'vue';

export function getComponentName(Component: typeof Vue): string {
  return new Component().$options.name;
}
