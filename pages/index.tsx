import { NextPage } from 'next'
import { CardGroup, Container } from 'react-bootstrap'
import { useRecoilStateLoadable } from 'recoil'
import { galleryItemsState } from '../src/states'
import { GalleryItem } from '../src/components/GalleryItem'
import { getDogPictures } from '../src/services'
import { PreviewModal } from '../src/components/PreviewModal'
import { Spinner } from '../src/components/Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


const Home: NextPage = () => {
  const [galleryItems, setGalleryItems] = useRecoilStateLoadable(galleryItemsState);

  const getMorePictures = async () => {
    let newPictures = await getDogPictures(25);
    let galleryItemsNew = [...galleryItems.contents, ...newPictures];
    setGalleryItems(galleryItemsNew);
  }

  if(galleryItems.state != 'hasValue') {
    return <Spinner />
  }

  return (
    <>
      <InfiniteScroll
        dataLength={galleryItems.contents.length}
        next={getMorePictures}
        hasMore={true}
        loader={<Spinner />}
        endMessage={<div>...</div>}
      >
        <PreviewModal />
        <Container fluid="md">
          
          <h1 className="main-title">Random dogs</h1>

          <CardGroup style={{  }}>
            {galleryItems.state == 'hasValue' && galleryItems.contents.map((item: any, i: number) => (  
              <GalleryItem key={i} item={item} />
            )) }
          </CardGroup>
        </Container>
      </InfiniteScroll>
    </>
  )
}

export default Home