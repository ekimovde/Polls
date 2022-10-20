import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiProgress } from '~/components/ui';
import { UiProgressTheme } from './component';

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
export const PurpleTheme = (): Component => create(UiProgressTheme.purple);
export const RedTheme = (): Component => create(UiProgressTheme.red);

function create(theme = UiProgressTheme.green): Component {
  return {
    components: {
      uiProgress
    },
    data() {
      return {
        progress: 22,
        theme
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
        />
      </div>
    `
  };
}
