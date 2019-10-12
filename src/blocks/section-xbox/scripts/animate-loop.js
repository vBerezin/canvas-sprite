import CanvasSprite from '~components/canvas-sprite';

(() => {
  const section = document.querySelector('.js-section-xbox-2');
  if (!section) return false;
  const canvas = section.querySelector('canvas');
  if (!canvas) return false;
  const placeholder = section.querySelector('[data-rel="placeholder"]');
  const { img, frames } = canvas.dataset;
  const sprite = new CanvasSprite(canvas, img, frames);
  sprite.onLoad = () => {
    if (placeholder) placeholder.parentNode.removeChild(placeholder);
    return sprite.animate(true);
  };
  return sprite;
})();
