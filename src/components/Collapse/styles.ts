import { css, keyframes } from '@emotion/css';

const slideDown = keyframes`
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  `;

const slideUp = keyframes`
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  `;

export const AccordionChevron = css`
  flex-basis: 15px;
  color: var(--bds-gray-t3);
`;

export const AccordionTitleContent = css`
  flex: 1;
`;

export const AccordionRoot = css`
  border-radius: 6px;
  width: 100%;
  background-color: var(--mauve-6);
  box-shadow: 0 2px 10px var(--black-a4);
  font-family: var(--bds-font-family);
`;

export const AccordionItem = css`
  margin-top: 1px;
  padding: 24px 0;
  border-bottom: 1px solid var(--bds-gray-ele-border);
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px var(--mauve-12);
  }
`;

export const AccordionHeader = css`
  display: flex;
`;

export const AccordionTrigger = css`
  font-family: inherit;
  background-color: transparent;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: var(--bds-gray-t1-title);
  text-align: inherit;
  border-radius: 2px;
  margin: 0;
  padding: 0;
  &:hover {
    color: var(--bds-brand-700-normal);
    .moly-icon {
      color: var(--bds-brand-700-normal);
    }
  }
  &[data-state='open'] {
    .moly-collaspe-custom-icon,
    .moly-icon {
      transform: rotate(180deg);
    }
  }
`;

export const AccordionContent = css`
  overflow: hidden;
  font-size: 15px;
  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

export const AccordionContentText = css`
  padding-top: 12px;
  color: var(--bds-gray-t2);
  font-size: 16px;
  line-height: 24px;
`;

export const viewMore = css`
  margin-top: 24px;
`;
