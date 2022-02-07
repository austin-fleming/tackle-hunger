import { getClient } from '../client';
import type { Page as PageProps } from '../types';
import { expandedSectionsQuery } from './pageSections';

export const getAllPages = async (preview = false) =>
  await getClient(preview).fetch<PageProps[]>(`*[_type == "page"]{..., ${expandedSectionsQuery}}`);

export const getPageBySlug = async (slug: string, preview = false) =>
  await getClient(preview).fetch<PageProps>(`*[_type == 'page' && slug.current == "${slug}"][0]{
  ...,
  ${expandedSectionsQuery}
}`);
