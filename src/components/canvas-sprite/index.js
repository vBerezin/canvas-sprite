export default function CanvasSprite(node, imgSrc, count) {
  this.canvas = node;
  this.currentFrame = 0;
  this.onLoad = null;
  this.onError = null;
  const sprite = new Image();
  const framesCount = +count;
  const ctx = this.canvas.getContext('2d');
  let interval;
  sprite.src = imgSrc;
  this.render = (frameIndex = 0) => {
    const { frameHeight, frameWidth, canvas: { width, height } } = this;
    let spriteLeft = 0;
    let spriteTop = 0;
    if (frameWidth > frameHeight) {
      // горизонтальный спрайт
      spriteLeft = Math.min(frameIndex * frameWidth, sprite.width - frameWidth);
    }
    if (frameHeight > frameWidth) {
      // вертикальный спрайт
      spriteTop = Math.min(frameIndex * frameHeight, sprite.height - frameHeight);
    }
    return window.requestAnimationFrame(() => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(sprite, spriteLeft, spriteTop, frameWidth, frameHeight, 0, 0, width, height);
    });
  };
  this.next = () => {
    this.currentFrame += 1;
    if (this.currentFrame > framesCount) {
      this.currentFrame = 0;
    }
    return this.render(this.currentFrame);
  };
  this.prev = () => {
    this.currentFrame -= 1;
    if (this.currentFrame < 0) {
      this.currentFrame = framesCount;
    }
    return this.render(this.currentFrame);
  };
  this.animate = (loop = false, speed = 1000, reverse = false) => {
    clearInterval(interval);
    this.currentFrame = reverse ? framesCount : 0;
    if (reverse) {
      interval = setInterval(() => {
        if (!loop && this.currentFrame === 0) {
          return clearInterval(interval);
        }
        return this.prev();
      }, speed / framesCount);
    } else {
      interval = setInterval(() => {
        if (!loop && this.currentFrame === framesCount) {
          return clearInterval(interval);
        }
        return this.next();
      }, speed / framesCount);
    }
  };
  sprite.onload = () => {
    this.frameHeight = sprite.height;
    this.frameWidth = sprite.width / framesCount;
    this.canvas.height = sprite.height;
    this.canvas.width = this.frameWidth;
    if (typeof this.onLoad === 'function') return this.onLoad();
    return this.render(this.currentFrame);
  };
  sprite.onerror = () => {
    if (typeof this.onError === 'function') return this.onError();
    throw new Error(`Sprite ${imgSrc} not loaded`);
  };
}
