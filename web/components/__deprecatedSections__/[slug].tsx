import React from 'react';
import { groq } from 'next-sanity';
import { useRouter } from 'next/router';
import { IndexPage } from '..';
import { usePreviewSubscription } from '../../config/sanity';
import { Page, SiteConfig } from '../../types/generated/schema';

const pageQuery = groq`{
  "config": *[_type == "site-config"][0],
  "content": *[_type == "page" && slug.current == $slug][0].content
}`;

const PreviewPage: React.FC<SiteConfig & Page> = (props) => {
  const { query } = useRouter();

  const { slug } = query;

  const { data } = usePreviewSubscription(pageQuery, {
    enabled: !!slug,
    initialData: props,
    params: { slug },
  });

  return <IndexPage {...data} />;
};

export default PreviewPage;
