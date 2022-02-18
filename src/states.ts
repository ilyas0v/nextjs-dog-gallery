import { atom, selector } from "recoil";
import { getDogPictures } from "./services";

// export const pictureStateById = (id: string) => atom({
//     key: `picture_${id}`,
//     default: {
//         id: id,
//         viewCount: 0,
//         src: ''
//     }
// });

export const galleryItemsSelector = selector({
  key: "galleryItemsSelector",
  get: async ({ get }) => {
    try {
      const result = await getDogPictures(50);
      return result;
    } catch (error) {
      return [];
    }
  },
});

export const galleryItemsState = atom({
  key: "galleryItemsState",
  default: galleryItemsSelector,
});

export const openedPictureState = atom({
  key: "openedPictureState",
  default: {},
});