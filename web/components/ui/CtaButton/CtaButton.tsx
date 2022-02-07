/* eslint-disable react/no-multi-comp */
import { ButtonProps, Button as MuiButton } from '@material-ui/core';
import { activateDonationWidget } from 'lib/domActions';
import { CtaButton as CtaButtonProps } from 'lib/sanity/types';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type BaseButtonProps = Omit<ButtonProps, 'href'> & {
  href?: NextLinkProps['href'];
};
const BaseButton = ({ href, ...rest }: BaseButtonProps) => <MuiButton {...rest} size='small' />;

const SolidButton = (props: BaseButtonProps) => (
  <BaseButton {...props} fullWidth={false} variant='contained' />
);

const OutlinedButton = (props: BaseButtonProps) => (
  <BaseButton {...props} fullWidth={false} variant='outlined' />
);

const TextButton = (props: BaseButtonProps) => (
  <BaseButton {...props} fullWidth={false} variant='text' />
);

export const CtaButton = ({ label, isBlankTarget, link, style = 'solid' }: CtaButtonProps) => {
  const { urlLink, internalLink, download, donationWidget } = link;

  const maybeRelativePath = internalLink?.slug && `/${internalLink.slug.current}`;
  const maybeHref = urlLink?.href || download?.url || maybeRelativePath || null;
  const maybeAction = donationWidget;

  const buttonComponentRouter = (buttonType: string) =>
    Object({
      outlined: OutlinedButton,
      solid: SolidButton,
      text: TextButton,
    })[buttonType];

  const ButtonComponent = buttonComponentRouter(style);

  const MaybeHrefButton = maybeHref && (
    <NextLink passHref href={maybeHref}>
      <ButtonComponent target={isBlankTarget ? '_blank' : '_self'}>{label}</ButtonComponent>
    </NextLink>
  );

  const MaybeActionButton = maybeAction && (
    <ButtonComponent onClick={activateDonationWidget}>{label}</ButtonComponent>
  );

  return MaybeHrefButton || MaybeActionButton || null;
};
