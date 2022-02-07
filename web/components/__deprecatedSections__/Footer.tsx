import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PortableText } from '../config/sanity';

type FooterProps = {
  navItems: {
    _id: string;
    slug: { current: string };
    title: string;
  }[];
  text: Record<string, unknown>;
};

export const Footer: React.FC<FooterProps> = ({ navItems, text }) => {
  const router = useRouter();
  return (
    <div>
      <nav>
        <ul>
          {navItems &&
            navItems.map((item) => (
              // eslint-disable-next-line no-underscore-dangle
              <li key={item._id}>
                <Link
                  prefetch
                  as={`/${item.slug.current}`}
                  href={{
                    pathname: '/LandingPage',
                    query: { slug: item.slug.current },
                  }}>
                  <a
                    data-is-active={
                      router.pathname === '/LandingPage' && router.query.slug === item.slug.current
                        ? 'true'
                        : 'false'
                    }>
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div>
        <PortableText blocks={text} />
      </div>
    </div>
  );
};
