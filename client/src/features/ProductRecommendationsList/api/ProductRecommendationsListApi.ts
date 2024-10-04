import { Product } from 'entities/Product';
import { rtkApi } from 'shared/api/rtkApi';

export const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProductRecommendationsList: build.query<Product[], string>({
      query: (id) => ({
        url: '/products/random',
        params: {
          limit: 5,
        },
      }),
      keepUnusedDataFor: 1,
    }),
  }),
});

export const useProductRecommendationsList =
  recommendationsApi.useGetProductRecommendationsListQuery;
