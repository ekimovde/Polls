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
  ownImage: string;
}

export interface PollQuestionDate {
  month: number;
  day: number
}

export interface PollQuestionTime {
  hour: number;
  minute: number;
}

export interface PollAuthor {
  id: number
  fullName: string
  avatar: string
}

export interface PollVoteResults {
  total: number
  answers: PollQuestionAnswer[]
  progress: PollVoteProgress
  users: PollAuthor[]
  selectedAnswer: number
}

export interface PollVoteProgress {
  [t: number]: number
}
