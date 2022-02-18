import { API_URL } from "./constants";
import { extractTitle, randomId, shuffleArray } from "./utils";

/**
 * 
 * @param count  - Number of pictures to be fetched
 * @returns - Array of fetched pictures with attributes
 */
export const getDogPictures = async (count: number = 25) => {
  const data = await fetch(`${API_URL}/${count}`);
  const pics = await data.json();

  const result = pics.message.map((picSrc: string) => {
    return {
      id: randomId(),
      title: extractTitle(picSrc),
      src: picSrc,
      viewCount: 0,
    };
  });

  return shuffleArray(result);
};