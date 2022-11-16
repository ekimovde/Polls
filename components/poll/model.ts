export enum PollQuestionTypes {
  text = 'text',
  image = 'image',
  imageText = 'image-text',
  emoji = 'emoji'
}

export interface PollQuestionResponse {
  name: string;
  type: PollQuestionTypes;
  answers: PollQuestionAnswer[];
  settings: PollQuestionSettings;
}

export interface PollQuestionAnswer {
  text: string;
  type: PollQuestionTypes;
  image: string;
  emoji: string;
  timestamp?: number;
}

export interface PollQuestionSettings {
  isMultipleAnswers: boolean;
}

export interface PollQuestionDate {
  month: number;
  day: number
}

export interface PollQuestionTime {
  hour: number;
  minute: number;
}
