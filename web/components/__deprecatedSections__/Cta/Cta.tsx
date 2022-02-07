import React from 'react';
import { PrimaryButton, SecondaryButton, TextButton } from '@components/ui';
import { CtaButton } from 'types/generated/schema';

const activateDonationWidget = () => {
  const simulateClick = (elem) =>
    elem.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

  const widget = document.getElementById('harness-widget')?.querySelector('.h-widget-button');

  if (widget) {
    simulateClick(widget);
  }
};

// TODO: can omission be removed?
export const Cta = ({
  label,
  isBlankTarget,
  link,
  style = 'solid',
}: CtaButton): React.ReactNode => {
  const buttonComponentRouter = (buttonType: string) =>
    Object({
      outlined: SecondaryButton,
      solid: PrimaryButton,
      text: TextButton,
    })[buttonType];

  const ButtonComponent = buttonComponentRouter(style);

  const buttonProps = {
    href: link,
    onClick: activateDonationWidget,
  };

  return <ButtonComponent {...buttonProps}>{label}</ButtonComponent>;
};
