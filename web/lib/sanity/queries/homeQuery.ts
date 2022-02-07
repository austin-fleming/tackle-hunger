import { getClient } from '../client';
import type { HomePageSingleton as HomePageSingletonProps } from '../types';
import { expandedSectionsQuery } from './pageSections';

export const getHome = async (preview = false) =>
  await getClient(preview).fetch<HomePageSingletonProps>(`*[_type == "homePageSingleton"][0]{
    ...,
    ${expandedSectionsQuery}
  }`);
