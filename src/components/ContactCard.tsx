import React from "react";
import styled from "styled-components";

interface Props {
  background?: string;
  styles?: object;
  children?: React.ReactNode;
}

const Section = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  max-width: 60%;
  height: 100%;
  max-height: 50%;
  /* aspect-ratio: 1.414/1; */
  /* aspect-ratio: 1.814/1; */
  padding: 1rem;

  background-color: var(--color-green);
  background: ${(Props) => Props?.background || ""};
  ${({ styles }) => ({ ...styles })}

  @media (max-width: 768px) {
    max-width: 85%;
    max-height: 45;
    aspect-ratio: unset;
  }
`;

const ContactCard: React.FC<Props> = ({ children, background, styles }) => {
  return (
    <Section styles={styles} background={background}>
      {children}
    </Section>
  );
};

export default ContactCard;
