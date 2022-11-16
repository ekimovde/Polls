import { isEmpty } from 'lodash';
import { UnsplashPhotoRequest } from '../repository/repo';

export const getQueryForUnsplashResponse = (params: UnsplashPhotoRequest): string => {
  const { page, search } = params;
  let query = `client_id=${UNSPLASH_ACCESS_KEY}&page=${page}&order_by=popular`;

  if (!isEmpty(search)) {
    query += `&query=${search}`;
  }

  return query;
};
