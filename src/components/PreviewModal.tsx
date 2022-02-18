import { Button, ButtonGroup, Card, Modal } from "react-bootstrap";
import { useRecoilState, useSetRecoilState } from "recoil";
import { openedPictureState } from "../states";
import { isObjectEmpty } from "../utils";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React from "react";
import { GalleryItemModel } from "../types";

export const PreviewModal: React.FC = () => {
  const [openedPicture, setOpenedPicture] = useRecoilState(openedPictureState);

  const closeModal = () => {
    setOpenedPicture(new GalleryItemModel);
  };

  return (
    <Modal
      show={ openedPicture.title != ''}
      onHide={() => closeModal()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {openedPicture.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <div className="tools mb-2 d-flex justify-content-center">
                <Button variant="outline-success" onClick={() => zoomIn()}>
                  Zoom in
                </Button>
                <Button variant="outline-primary" onClick={() => zoomOut()}>
                  Zoom out
                </Button>
                <Button variant="outline-dark" onClick={() => resetTransform()}>
                  Reset
                </Button>
              </div>
              <TransformComponent>
                <img src={openedPicture.src} className="modal-picture" />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Modal.Body>
    </Modal>
  );
};
