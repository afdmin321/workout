import { rtkApi } from 'shared/api/rtkApi';

export const categoryApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query<any, void>({
      query: () => ({
        url: '/categories',
        method: 'GET',
      }),
    }),
  }),
});
export const useGetCategory = categoryApi.useGetCategoryQuery;
