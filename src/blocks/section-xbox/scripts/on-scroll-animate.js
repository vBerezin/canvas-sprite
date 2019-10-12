import CanvasSprite from '~components/canvas-sprite';
import { getOffset } from '~scripts/utils';

(() => {
  const section = document.querySelector('.js-section-xbox-3');
  if (!section) return false;
  const canvas = section.querySelector('canvas');
  if (!canvas) return false;
  const placeholder = section.querySelector('[data-rel="placeholder"]');
  const { img, frames } = canvas.dataset;
  const sprite = new CanvasSprite(canvas, img, frames);
  let lastScroll = 0;
  let animated = false;
  sprite.onLoad = () => {
    const onScroll = () => {
      const offset = getOffset(section);
      const windowMiddle = window.scrollY + window.innerHeight / 2;
      const sectionBottom = offset.top + section.offsetHeight;
      if (windowMiddle < offset.top || windowMiddle > sectionBottom) {
        animated = false;
        lastScroll = windowMiddle;
        return false;
      }
      if (animated) return false;
      animated = true;
      if (windowMiddle > lastScroll) {
        return sprite.animate(false, 1000, false);
      }
      return sprite.animate(false, 1000, true);
    };
    window.addEventListener('scroll', onScroll);
    if (placeholder) placeholder.parentNode.removeChild(placeholder);
    return sprite.render(0);
  };
  return sprite;
})();
