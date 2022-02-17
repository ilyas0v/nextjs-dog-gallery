import Image from "next/image"
import { Button, Card } from "react-bootstrap";
import { useRecoilState, useSetRecoilState } from "recoil"
import { galleryItemsState, openedPictureState } from "../states";

export const GalleryItem = ( {item} ) => {
  const [galleryItems, setGalleryItems] = useRecoilState(galleryItemsState);
  const setOpenedPicture = useSetRecoilState(openedPictureState);

  const viewPicture = () => {
    setOpenedPicture(item);
    incrementViewCount();
  }

  const incrementViewCount = () => {
    let galleryItemsClone = [...galleryItems];
    let index = galleryItems.findIndex((galleryitem: object) => galleryitem === item);
    
    galleryItemsClone[index] = {
      ...item,
      viewCount: item.viewCount + 1
    };

    setGalleryItems(galleryItemsClone);
  }

  return (
      <>
      <Card className="picture-card" onClick={viewPicture}>
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <p>{ item.viewCount }</p>
          </Card.Body>
        </Card>
      </>
  )
}