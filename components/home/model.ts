export enum HomeBlockTheme {
  pink = 'pink',
  orange = 'orange',
  purple = 'purple',
  blue = 'blue',
  green = 'green',
  teal = 'teal'
}

export interface HomeFeature {
  icon: string
  title: string
  description: string
  theme: HomeBlockTheme
}
