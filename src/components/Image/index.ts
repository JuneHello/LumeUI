import { Image } from './Image';
export * from './Image';
export * from './types';
export {
  detectAvifScript,
  detectWebpScript,
  loadDetectScript,
} from './utils';
export { getProcessedSrcset, getProcessedUrl } from './logic';
export default Image;
