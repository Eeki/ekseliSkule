import { VIDEO_SELECTED } from './constants';

export function selectVideo(video) {
  console.log(`A video has been selected: ${video.title}`);

  return {
    type : VIDEO_SELECTED,
    payload: video
  };
}