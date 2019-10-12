import CanvasSprite from '~components/canvas-sprite';
import { getOffset } from '~scripts/utils';

(() => {
  const section = document.querySelector('.js-section-xbox-1');
  if (!section) return false;
  const canvas = section.querySelector('canvas');
  if (!canvas) return false;
  const info = section.querySelector('[data-rel="frame.info"]');
  const placeholder = section.querySelector('[data-rel="placeholder"]');
  const { img, frames } = canvas.dataset;
  const sprite = new CanvasSprite(canvas, img, frames);
  sprite.onLoad = () => {
    const offset = getOffset(section);
    const onScroll = () => {
      const windowMiddle = window.scrollY + window.innerHeight / 2;
      if (windowMiddle > offset.top && windowMiddle < offset.top + section.offsetHeight) {
        const scrollSize = windowMiddle - offset.top;
        const step = section.offsetHeight / frames;
        const frameIndex = Math.round(scrollSize / step);
        info.innerText = frameIndex;
        return sprite.render(frameIndex);
      }
      return false;
    };
    window.addEventListener('scroll', onScroll);
    if (placeholder) placeholder.parentNode.removeChild(placeholder);
    return sprite.render(0);
  };
  return sprite;
})();
