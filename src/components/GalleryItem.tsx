import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  galleryItemsState,
  openedPictureState,
  previewModalOpened,
} from "../states";
import { GalleryItemProps, GalleryItemType } from "../types";
import { EyeIcon } from "./EyeIcon";

export const GalleryItem: React.FC<GalleryItemProps> = (props) => {
  const { item } = props;
  const [galleryItems, setGalleryItems] = useRecoilState(galleryItemsState);
  const setOpenedPicture = useSetRecoilState(openedPictureState);
  const setPreviewModalOpened = useSetRecoilState(previewModalOpened);

  const viewPicture = () => {
    setOpenedPicture(item);
    setPreviewModalOpened(true);
    incrementViewCount();
  };

  const incrementViewCount = () => {
    let galleryItemsClone = [...galleryItems];
    let index = galleryItems.findIndex(
      (galleryitem: GalleryItemType) => galleryitem === item
    );

    galleryItemsClone[index] = {
      ...item,
      viewCount: item.viewCount + 1,
    };

    setGalleryItems(galleryItemsClone);
  };

  return (
    <>
      <Card className="picture-card" onClick={viewPicture}>
        <Card.Img variant="top" src={item.src} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <p>{item.title}</p>
            <p className="d-flex justify-content-center align-items-center">
              <span> {item.viewCount}&nbsp;&nbsp;</span>
              <EyeIcon />
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
