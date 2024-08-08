import { Product } from 'entities/Product';
import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Product[], void>({
      query: () => ({
        url: '/products/random',
        params: {
          limit: 5,
        },
      }),
    }),
  }),
});

export const useArticleRecommendationsList =
  recommendationsApi.useGetArticleRecommendationsListQuery;
