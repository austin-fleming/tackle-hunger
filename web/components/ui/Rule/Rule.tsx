import React from 'react';
import { useTheme } from '@emotion/react';

type RuleProps = {
  align?: 'left' | 'center' | 'right';
  bottomSpacing?: number;
  color?: 'primary' | 'secondary';
  thickness?: 'bold' | 'thin';
  topSpacing?: number;
  widthUnits?: number;
};

export const Rule = ({
  bottomSpacing = 0,
  color = 'primary',
  thickness = 'bold',
  topSpacing = 1,
  widthUnits = 8,
  align = 'center',
}: RuleProps) => {
  const { spacing, palette } = useTheme();

  const ruleColor = color === 'primary' ? palette.brandPurple.main : palette.brandYellow.main;
  const ruleThickness = thickness === 'bold' ? '4px' : '2px';

  const borderStyle = `${ruleThickness} solid ${ruleColor}`;

  const alignments = {
    center: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    left: {
      marginLeft: 0,
      marginRight: 'auto',
    },
    right: {
      marginLeft: 'auto',
      marginRight: 0,
    },
  };

  const style = {
    backgroundColor: 'transparent',
    border: borderStyle,
    borderColor: ruleColor,
    display: 'block',
    marginBottom: spacing(bottomSpacing),
    marginLeft: alignments[align].marginLeft,
    marginRight: alignments[align].marginRight,
    marginTop: spacing(topSpacing),
    width: spacing(widthUnits),
  };

  return <hr style={style} />;
};
