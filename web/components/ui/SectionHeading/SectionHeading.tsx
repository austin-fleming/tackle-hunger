import React from 'react';
import { Rule } from '@components/ui';
import { useTheme } from '@emotion/react';
import { Typography } from '@material-ui/core';

type SectionHeadingProps = {
  align?: 'left' | 'center' | 'right';
  component?: string;
  mobileAlign?: 'left' | 'center' | 'right' | 'same';
  rule?: boolean;
  ruleColor?: 'primary' | 'secondary';
  size?: 'lg' | 'sm';
  title: string;
};

export const SectionHeading = ({
  size = 'lg',
  rule = true,
  ruleColor = 'secondary',
  align = 'center',
  mobileAlign = 'same',
  title,
}: SectionHeadingProps) => {
  const { isMobile } = useTheme();

  const wrapperStyle = {
    width: '100%',
  };

  const mobileAlignment = mobileAlign === 'same' ? align : mobileAlign;
  const alignment = isMobile ? mobileAlignment : align;

  const desktopVariantSize = size === 'lg' ? 'h4' : 'h3';
  const mobileVariantSize = size === 'lg' ? 'h4' : 'h5';
  const variantSize = isMobile ? mobileVariantSize : desktopVariantSize;

  return (
    <div style={wrapperStyle}>
      <Typography align={alignment} component='h1' variant={variantSize}>
        {title}
      </Typography>
      {rule && <Rule align={alignment} color={ruleColor} topSpacing={2} />}
    </div>
  );
};
