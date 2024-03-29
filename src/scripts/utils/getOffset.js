/**
 * @description - позиция относительно документа
 * */
export default function (node) {
  if (!node) return false;
  const rect = node.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset - document.documentElement.clientTop,
    left: rect.left + window.pageXOffset - document.documentElement.clientLeft,
  };
}
