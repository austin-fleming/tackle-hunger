import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import HamburgerIcon from './icons/Hamburger';

type HeaderProps = {
  logo: {
    asset: { url: string };
    logo: string;
  };
  navItems: {
    slug: { current: string };
    title: string;
  }[];
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ title = 'Missing title', navItems, logo }) => {
  const router = useRouter();

  const [showNav, setShowNav] = useState(false);

  const hideMenu = () => {
    setShowNav(false);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', hideMenu);
    return () => {
      router.events.off('routeChangeComplete', hideMenu);
    };
  }, [hideMenu]);

  return (
    <div data-show-nav={showNav}>
      <h1>
        <Link
          prefetch
          as='/'
          href={{
            pathname: '/LandingPage',
            query: {
              slug: '/',
            },
          }}>
          <a title={title}>
            {/* eslint-disable-next-line no-nested-ternary */}
            {!logo?.asset ? null : logo.asset.extension === 'svg' ? (
              <SVG src={logo.asset.url} />
            ) : (
              <img alt={logo.title} src={logo.asset.url} />
            )}
          </a>
        </Link>
      </h1>
      <nav>
        <ul>
          {navItems &&
            navItems.map(({ slug, title, _id }) => (
              <li key={_id}>
                <Link
                  prefetch
                  as={`/${slug.current}`}
                  href={{
                    pathname: '/LandingPage',
                    query: { slug: slug.current },
                  }}>
                  <a
                    data-is-active={
                      router.pathname === '/LandingPage' && router.query.slug === slug.current
                        ? 'true'
                        : 'false'
                    }>
                    {title}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
        <button
          onClick={() => {
            setShowNav(!showNav);
          }}>
          <HamburgerIcon />
        </button>
      </nav>
    </div>
  );
};
