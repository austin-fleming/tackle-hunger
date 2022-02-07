import { simplePortableText } from 'lib/sanity/portableText';
import type { SimplePortableText as SimplePortableTextProps } from 'lib/sanity/types';

// add to cities gallery asap
type CardTextProps = {
  blockDescription?: SimplePortableTextProps;
  stringDescription?: string;
  subtitle?: string;
  title: string;
};
export const CardText = ({
  title,
  subtitle,
  stringDescription,
  blockDescription,
}: CardTextProps) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
    {stringDescription && <p>{stringDescription}</p>}
    {blockDescription && <div>{simplePortableText(blockDescription)}</div>}
  </div>
);
