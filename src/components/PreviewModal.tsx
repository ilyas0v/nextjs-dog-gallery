import Image from "next/image"
import { Button, Card, Modal } from "react-bootstrap";
import { useRecoilState, useSetRecoilState } from "recoil"
import { openedPictureState } from "../states";

export const PreviewModal = () => {

  const [openedPicture, setOpenedPicture] = useRecoilState(openedPictureState);

  const closeModal = () => {
    setOpenedPicture({});
  }

  return (
    <Modal
      show={'id' in openedPicture}
      onHide={() => closeModal()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { openedPicture.id }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={openedPicture.src} className="modal-picture" />
      </Modal.Body>
    </Modal>
  );
}