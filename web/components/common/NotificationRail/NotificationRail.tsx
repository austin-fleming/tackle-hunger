import React, { useState } from 'react';
import { ContentContainer } from '@components/layouts';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { SiteConfigSingleton as SiteConfigSingletonProps } from 'lib/sanity/types';
import Link from 'next/link';

const NotificationWrapper = styled.aside`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.brandPurple.main};
  color: white;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

const MessageWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-items: start;
  align-items: start;

  & > * {
    margin: 0;
    line-height: 1.3;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    gap: ${({ theme }) => theme.spacing(1)};
    justify-items: start;
    align-items: start;
  }
`;

const MessageLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  pointer-events: all;

  text-decoration: none;
  color: white;

  & * {
    display: inline-block;
    lineheight: 1.3;
    margin: 0;
    padding-right: ${({ theme }) => theme.spacing(1)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const windowExists = (): boolean => typeof window !== 'undefined';

const storageValueIsTruthy = (key: string): boolean => !!window?.localStorage.getItem(key);

const hasUserClosedDialogue = (key: string): boolean => windowExists() && storageValueIsTruthy(key);

const todaysDate = (): string => {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}.${currentDate.getMonth()}.${currentDate.getDate()}`;
};

export const NotificationRail = ({
  isActive,
  destinationUrl,
  headline,
  message,
}: SiteConfigSingletonProps['notificationBanner']) => {
  const { isMobile } = useTheme();

  const storageKey = headline || message || todaysDate();

  const [hasClosedDialogue, setHasClosedDialogue] = useState(hasUserClosedDialogue(storageKey));

  if (!isActive) return null;

  const handleClose = () => {
    setHasClosedDialogue(true);
    window.localStorage.setItem(storageKey, 'true');
  };

  return isActive && !hasClosedDialogue ? (
    <NotificationWrapper>
      <ContentContainer>
        <MessageWrapper>
          {isMobile && (
            <Button
              style={{
                color: 'white',
                lineHeight: '1.5',
                margin: '0',
                padding: '0',
                width: 'auto',
              }}
              variant='text'
              onClick={handleClose}>
              <CloseIcon />
            </Button>
          )}
          <Link passHref href={destinationUrl || '/'}>
            <MessageLink>
              <Typography variant={isMobile ? 'caption' : 'button'}>{headline}</Typography>
              <Typography variant={isMobile ? 'caption' : 'body1'}>{message || ''}</Typography>
            </MessageLink>
          </Link>
          {!isMobile && (
            <Button
              style={{
                color: 'white',
                lineHeight: '1.5',
                margin: '0',
                padding: '0',
                width: 'auto',
              }}
              variant='text'
              onClick={handleClose}>
              close
            </Button>
          )}
        </MessageWrapper>
      </ContentContainer>
    </NotificationWrapper>
  ) : null;
};
