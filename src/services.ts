import { v4 as uuidv4 } from "uuid"
import { GalleryItemType } from "./types";
import { API_URL } from "./constants";

export const getDogPictures = async (count: number = 25) => {
  const data = await fetch(`${API_URL}/${count}`);
  const pics = await data.json();
  
  const result = pics.message.map((picSrc: string) => {
    return {
      id: uuidv4(),
      src: picSrc,
      viewCount: 0
    }
  });

  return result;
} 