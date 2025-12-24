import * as React from 'react';

const isValidElement = React.isValidElement;

export { isValidElement };

export function isFragment(child: any): child is React.ReactElement {
  return child && isValidElement(child) && child.type === React.Fragment;
}

export function replaceElement(
  element: React.ReactNode,
  replacement: React.ReactNode,
  props: any,
): React.ReactNode {
  if (!isValidElement(element)) {
    return replacement;
  }
  return React.cloneElement(
    element as React.ReactElement,
    typeof props === 'function' ? props((element as React.ReactElement).props || {}) : props,
  );
}

export function cloneElement(element: React.ReactNode, props: any): React.ReactNode {
  return replaceElement(element, element, props);
}
