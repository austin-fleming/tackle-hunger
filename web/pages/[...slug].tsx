// eslint-disable-next-line import/no-nodejs-modules
import { ParsedUrlQuery } from 'querystring';
import { Fragment } from 'react';
import { PageSeo } from '@components/common';
import { RenderSections } from '@components/sections';
import { getAllPages, getPageBySlug } from 'lib/sanity/queries';
import type { Page as PageProps } from 'lib/sanity/types';
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { NextPage } from 'next';

const explodeSlugsForStaticPaths = (pages: PageProps[]) =>
  pages
    .map((page: PageProps): string => page.slug.current)
    .map((path: string): string[] => path.split('/'))
    .map((explodedSlug: string[]) => Object.freeze({ params: { slug: explodedSlug } }));

export const getStaticPaths: GetStaticPaths = async () => {
  const allPageSlugs = await getAllPages();
  const paths = explodeSlugsForStaticPaths(allPageSlugs);
  return { fallback: false, paths };
};

type CatchAllParsedUrlQuery = {
  slug: string[];
} & ParsedUrlQuery;

const unexplodeSlug = (explodedPath: string[]): string => explodedPath.join('/');

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params as CatchAllParsedUrlQuery;
  const pageSlug = unexplodeSlug(slug);
  const pageData = await getPageBySlug(pageSlug);

  // Route to home if fetch fails
  if (!pageData) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return Object({
    props: {
      pageData,
    },
  });
};

const Page: NextPage<PageProps> = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { pageData } = props;
  const { seo, slug } = pageData;

  return (
    <Fragment>
      <PageSeo pageSlug={slug.current} seo={seo} />
      <RenderSections {...pageData} />
    </Fragment>
  );
};

export default Page;
