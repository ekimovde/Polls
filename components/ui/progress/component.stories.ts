import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiProgress } from '~/components/ui';
import { UiProgressView } from './component';
import { SharedColorTheme } from '~/components/shared/color/component';

export default {
  title: 'Components / Ui / Progress',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const GreenTheme = (): Component => create();
export const PurpleTheme = (): Component => create({ theme: SharedColorTheme.purple });
export const RedTheme = (): Component => create({ theme: SharedColorTheme.red });
export const BlueTheme = (): Component => create({ theme: SharedColorTheme.blue });
export const OrangeTheme = (): Component => create({ theme: SharedColorTheme.orange });
export const PinkTheme = (): Component => create({ theme: SharedColorTheme.pink });
export const PinkLightTheme = (): Component => create({ theme: SharedColorTheme.pinkLight });
export const GreyTheme = (): Component => create({ theme: SharedColorTheme.grey });
export const DefaultView = (): Component => create({ view: UiProgressView.default });

function create(props = {}): Component {
  return {
    components: {
      uiProgress
    },
    data() {
      return {
        progress: 22,
        theme: SharedColorTheme.green,
        view: UiProgressView.default,
        ...props
      };
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <ui-progress
          :progress="progress"
          :theme="theme"
          :view="view"
        />
      </div>
    `
  };
}
