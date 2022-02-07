import React from 'react';
import { useTheme } from '@emotion/react';
import { CtaButton, Page } from '../types/generated/schema';
import { PrimaryButton } from './Buttons';
import { Link } from './Link';

export const Cta: React.FC<CtaButton & { page: Omit<Page, '_type'> }> = ({
  buttonColor,
  text,
  page,
  link,
}) => {
  const { isMobile } = useTheme();

  const defaultStyle = { background: buttonColor?.hex || 'inherit' };

  const style = isMobile
    ? { ...defaultStyle, fontSize: '14px', padding: '10px 5px', width: '100%' }
    : defaultStyle;

  return page?.slug?.current ? (
    <Link
      as={`/${page.slug.current}`}
      href={{
        pathname: '/LandingPage',
        query: { slug: page.slug.current },
      }}>
      <PrimaryButton style={style}>{text}</PrimaryButton>
    </Link>
  ) : (
    <PrimaryButton href={link} style={style}>
      {text}
    </PrimaryButton>
  );
};
