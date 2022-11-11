import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestionMenu } from './index';
import { PollQuestionMenuView } from './component';

export default {
  title: 'Components / Poll / Question / Menu',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const ListView = (): Component => create();
export const GridView = (): Component => create(PollQuestionMenuView.grid);

function create(view = PollQuestionMenuView.list): Component {
  return {
    components: {
      PollQuestionMenu
    },
    data() {
      return {
        view
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-question-menu :view="view" />
      </div>
    `
  };
};

const views = [
  ListView,
  GridView
];

views.forEach(item => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  item.parameters = {
    viewport: {
      defaultViewport: 'ipad'
    }
  };
});
