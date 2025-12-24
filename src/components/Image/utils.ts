export const SupportedReadingFormats = ['png', 'jpg', 'jpeg', 'webp', 'tiff'];
export const SupportedWritingFormats = ['png', 'jpg', 'jpeg', 'webp', 'avif'];

export function detectAvifScript(avif_class = 'avifok') {
  return `function addClass(className) {
    document.documentElement.classList.add(className);
   }
   var avif = new Image();
   avif.src =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
   avif.onload = function () {
    addClass("${avif_class}");
   };`;
}

export function detectWebpScript(className = 'webpok') {
  return `
  var isWebp = document.createElement("canvas").toDataURL("image/webp").includes("data:image/webp");
  if(isWebp) {
    document.documentElement.classList.add("${className}");
  }
  `;
}

export function loadDetectScript() {
  return new Promise((resolve, reject) => {
    if (typeof document === 'undefined') return resolve(true);
    const script = document.createElement('script');
    script.innerHTML = `
    ${detectAvifScript()}
    ${detectWebpScript()}
    `;
    script.onerror = () => reject(false);
    document.body.appendChild(script);
    setTimeout(() => resolve(true), 1);
  });
}

export function isSupportAvif() {
  if (typeof window === 'undefined') return false;
  return document.documentElement.classList.contains('avifok');
}

export function isSupportWebp() {
  if (typeof window === 'undefined') return true;
  return document.documentElement.classList.contains('webpok');
}

export function isImageValid(src: string): Promise<boolean> {
  if (!src) return Promise.resolve(false);
  if (typeof document === 'undefined') return Promise.resolve(true);
  return new Promise((resolve) => {
    const img = document.createElement('img');
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
    img.srcset = src;
  });
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

const TransformPath = new Map([
  ['https://fh-static.bycsi.com', '/common-static/fhs'],
  ['https://t1.bycsi.com', '/bycsi-root'],
  ['https://s1.bycsi.com', '/bycsi-root']
]);

export function isSupportedDomain(src: string) {
  try {
    const url = new URL(src);
    return TransformPath.has(url.origin);
  } catch (error) {
    return false;
  }
}

export function isMoly() {
  if (typeof window === 'undefined') return false;
  return window.origin.includes('moly.');
}

const isDEV = process.env.NODE_ENV === 'development';

export function toRelativePath(url: string) {
  if (!isSupportedDomain(url)) return url;
  let res = url;
  TransformPath.forEach((relativePrefix, prefix) => {
    if (url.startsWith(prefix)) {
      res = url.replace(prefix, relativePrefix);
      if (isDEV || isMoly()) {
        res = 'https://www.bybit.com' + res;
      }
    }
  });
  return res;
}
