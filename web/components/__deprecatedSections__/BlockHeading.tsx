import React from 'react';
import { Typography } from '@material-ui/core';
import { CommonProps } from '@material-ui/core/OverridableComponent';
import { PortableText } from '../config/sanity';
import { serializers } from './serializers';

export const BlockHeading: React.FC<CommonProps & { blocks: any }> = ({ style, ...rest }) => (
  <Typography style={style} variant='h2'>
    <PortableText serializers={serializers} {...rest} />
  </Typography>
);
