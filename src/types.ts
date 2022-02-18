export type GalleryItemType = {
  id: string;
  title: string;
  src: string;
  viewCount: number;
};

export type GalleryItemProps = {
    item: GalleryItemType
}