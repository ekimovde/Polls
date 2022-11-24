import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, ProgressBlockTextAttribute, ProgressBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { UserProgressResponse } from '~/shared/repository/repo';
import { uiProgress } from '~/components/ui';
import { UserProgressValue } from './model';
import { UiProgressTheme } from '../ui/progress/component';
import { formatNumber } from '~/shared/utils/format-number';
import { getPercentage } from '~/shared/utils/get-percentage';

enum ProgressBlockType {
  created = 'created',
  consists = 'consists',
  participation = 'participation'
};

const progressBlockTypes = {
  0: ProgressBlockType.created,
  1: ProgressBlockType.consists,
  2: ProgressBlockType.participation
};

@Component({
  name: COMPONENT_NAME,
  components: {
    uiProgress
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Object,
    required: true
  }) readonly userProgressResponse: UserProgressResponse;

  readonly textAttributes = ProgressBlockTextAttribute;
  readonly testLocators = ProgressBlockTestLocator;

  get hasUserProgressResponse(): boolean {
    return Boolean(this.userProgressResponse);
  }

  get displayedUserProgress(): ProgressBlockParams[] {
    if (!this.hasUserProgressResponse) {
      return [];
    }

    const userProgressValues: UserProgressValue[] = Object.values(this.userProgressResponse);

    return userProgressValues.map((item, index) => {
      const { total, count } = item;
      const currentType = progressBlockTypes[index];
      const progress = getPercentage(count, total);

      return {
        ...item,
        title: this.textAttributes[currentType],
        description: this.getDescriptionByType(item, currentType),
        theme: this.getThemeByType(currentType),
        progress,
        formattedProgress: `${formatNumber(progress)}%`
      };
    });
  }

  getDescriptionByType(value: UserProgressValue, type: ProgressBlockType): string {
    const { count, total } = value;
    const { from, createdInfo, consistsInfo, participationInfo } = this.textAttributes;

    let description = `${count} ${from} ${total}`;

    switch (type) {
      case ProgressBlockType.created:
        description = `${description} ${createdInfo}`;
        break;
      case ProgressBlockType.consists:
        description = `${description} ${consistsInfo}`;
        break;
      case ProgressBlockType.participation:
        description = `${description} ${participationInfo}`;
        break;
    }

    return description;
  }

  getThemeByType(type: ProgressBlockType): UiProgressTheme {
    let theme = UiProgressTheme.green;

    switch (type) {
      case ProgressBlockType.consists:
        theme = UiProgressTheme.purple;
        break;
      case ProgressBlockType.participation:
        theme = UiProgressTheme.red;
        break;
    }

    return theme;
  }
}

interface ProgressBlockParams extends UserProgressValue {
  title: string
  description: string
  theme: UiProgressTheme
  progress: number
  formattedProgress: string
}
