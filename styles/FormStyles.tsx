import styled from "styled-components";

export const FormLabel = styled.label<{ fontWeight?: number }>`
  margin-bottom: 0.5rem;
  display: inline-block;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 500)};
  font-size: 12px;
  color: #00000099;
`;

export const FormError = styled.small`
  display: block;
  font-weight: 500;
  font-size: 12px;
  font-family: var(--font);
  color: var(--fire-opal-error);
  margin-top: 0.25rem;
`;

export const FormGroup = styled.div``;
