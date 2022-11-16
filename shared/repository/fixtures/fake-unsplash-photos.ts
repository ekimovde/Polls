import { UnsplashPhotoResponse } from '../repo';

export const fakeUnsplashPhoto = (params: Partial<UnsplashPhotoResponse> = {}): UnsplashPhotoResponse => {
  return {
    id: 'LBI7cgq3pbM',
    width: 5245,
    height: 3497,
    urls: {
      raw: 'https://images.unsplash.com/face-springmorning.jpg',
      full: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODAyMzh8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTY2ODU1Njc2Ng&ixlib=rb-4.0.3&q=80',
      regular: 'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=1080&fit=max',
      small: 'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=400&fit=max',
      thumb: 'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=200&fit=max'
    },
    color: '#60544D',
    user: {
      id: 'pXhwzz1JtQU',
      username: 'poorkane',
      name: 'Gilbert Kane',
      portfolio_url: 'https://theylooklikeeggsorsomething.com/'
    },
    links: {
      self: 'https://api.unsplash.com/photos/LBI7cgq3pbM',
      html: 'https://unsplash.com/photos/LBI7cgq3pbM',
      download: 'https://unsplash.com/photos/LBI7cgq3pbM/download',
      download_location: 'https://api.unsplash.com/photos/LBI7cgq3pbM/download'
    },
    ...params
  };
};

export const fakeUnsplashPhotos = (): UnsplashPhotoResponse[] => {
  return [
    fakeUnsplashPhoto(),
    fakeUnsplashPhoto(),
    fakeUnsplashPhoto(),
    fakeUnsplashPhoto(),
    fakeUnsplashPhoto()
  ];
};
