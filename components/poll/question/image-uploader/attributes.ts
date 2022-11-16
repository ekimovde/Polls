import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-question-image-uploader';

export enum PollQuestionImageUploaderTextAttribute {
  size = '5MB max'
}

export enum PollQuestionImageUploaderTestLocator {
  //
}

export const dtPollQuestionImageUploader = getTestSelectors(COMPONENT_NAME, PollQuestionImageUploaderTestLocator);
