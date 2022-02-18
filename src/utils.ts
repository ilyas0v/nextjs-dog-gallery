import { v4 as uuidv4 } from "uuid";

export const isObjectEmpty = (object: {}) => {
  return Object.keys(object).length === 0;
};

export const extractTitle = (url: string) => {
  let p = url.split("/");

  return p[4].replaceAll("-", " ").toUpperCase();
};

export const randomId = () => {
  return uuidv4();
};

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
