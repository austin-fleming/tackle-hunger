import { Fragment } from 'react';
import { PageSeo } from '@components/common';
import { RenderSections } from '@components/sections';
import { getHome } from 'lib/sanity/queries';
import type { HomePageSingleton as HomePageSingletonProps } from 'lib/sanity/types';
import { NextPage } from 'next';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

// TODO: import { NextSeo } from 'next-seo';

export const getStaticProps: GetStaticProps = async () => {
  const homeData = await getHome();

  if (!homeData) {
    console.error('Failed to fetch home page.');
    return {
      notFound: true,
    };
  }

  return Object({
    props: {
      homeData,
    },
  });
};

const Home: NextPage<HomePageSingletonProps> = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { homeData } = props;
  const { seo } = homeData;

  return (
    <Fragment>
      <PageSeo pageSlug='/' seo={seo} />
      <RenderSections {...homeData} />
    </Fragment>
  );
};

export default Home;
