import { atom, selector } from "recoil";
import { getDogPictures } from "./services";
import { emptyGalleryItem } from "./utils";

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

export const previewModalOpened = atom({
  key: 'previewModalOpened',
  default: false
});

export const openedPictureState = atom({
  key: "openedPictureState",
  default: emptyGalleryItem(),
});