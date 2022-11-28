import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiProgress } from '~/components/ui';
import { UiProgressTheme, UiProgressView } from './component';

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
export const PurpleTheme = (): Component => create({ theme: UiProgressTheme.purple });
export const RedTheme = (): Component => create({ theme: UiProgressTheme.red });
export const BlueTheme = (): Component => create({ theme: UiProgressTheme.blue });
export const DefaultView = (): Component => create({ view: UiProgressView.default });
export const RegularView = (): Component => create({ view: UiProgressView.regular });

function create(props = {}): Component {
  return {
    components: {
      uiProgress
    },
    data() {
      return {
        progress: 22,
        theme: UiProgressTheme.green,
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
