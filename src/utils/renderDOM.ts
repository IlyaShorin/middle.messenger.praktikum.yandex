import { Component } from './component';

function removeAllChildNodes(parent: Element) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function render(query: string, block: Component) {
  const root = document.querySelector(query);
  if (root) {
    removeAllChildNodes(root);
    root.appendChild(block.element);
  }

  return root;
}
