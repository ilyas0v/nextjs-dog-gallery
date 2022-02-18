export type GalleryItemType = {
  id: string;
  title: string;
  src: string;
  viewCount: number;
};

export type GalleryItemProps = {
  item: GalleryItemType;
};

export class GalleryItemModel {
  public id: string;
  public title: string;
  public src: string;
  public viewCount: number;

  constructor() {
    this.id = "";
    this.title = "";
    this.src = "";
    this.viewCount = 0;
  }
}
