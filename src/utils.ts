import { v4 as uuidv4 } from "uuid";

/**
 * 
 * @param object 
 * @returns - returns true if the object is empty.
 */
export const isObjectEmpty = (object: {}) => {
  return Object.keys(object).length === 0;
};

export const extractTitle = (url: string) => {
  let p = url.split("/");

  return p[4].replaceAll("-", " ").toUpperCase();
};

/**
 *
 * @returns Random uuid
 */
export const randomId = () => {
  return uuidv4();
};

/**
 *
 * @param array - Array to shuffle
 * @returns Shuffled array
 */
export const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
