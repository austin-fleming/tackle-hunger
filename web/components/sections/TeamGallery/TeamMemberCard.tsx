import { ImageCard, Rule } from '@components/ui';
import styled from '@emotion/styled';
import { TeamMember as TeamMemberProps } from 'types/generated/schema';

const TextWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
`;

const StyledCard = styled.article`
  width: 100%;
`;

type ExtendedTeamMemberProps = {
  displayDense?: boolean;
} & TeamMemberProps;

export const TeamMemberCard = ({
  image,
  name,
  role,
  description,
  displayDense,
}: ExtendedTeamMemberProps) => (
  <StyledCard>
    <ImageCard
      aspectRatio={1}
      elevation='low'
      imageData={image}
      overlay='none'
      sizes={{
        lg: displayDense ? 50 : 25,
        md: displayDense ? 25 : 50,
        sm: displayDense ? 33 : 50,
        xl: displayDense ? 50 : 25,
        xs: 100,
      }}
    />
    <TextWrapper key='text block'>
      {name && <h1>{name}</h1>}
      <Rule align='left' color='secondary' />
      {role && <h2>{role}</h2>}
      {description && <p>{description}</p>}
    </TextWrapper>
  </StyledCard>
);
