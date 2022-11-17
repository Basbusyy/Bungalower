import React from 'react';
import { Modal } from 'flowbite-react';
import CloseButton from './CloseButton';
import CreateRoomBody from './CreateRoomBody';

function CreateRoomModal({ openAddRoom, handleClickClose, showRooms }) {
  return (
    <div>
      <div className="w-full h-full bg-black opacity-50">
        <Modal show={openAddRoom}>
          <CloseButton handleClickClose={handleClickClose} />
          <CreateRoomBody
            handleClickClose={handleClickClose}
            showRooms={showRooms}
          />
        </Modal>
      </div>
    </div>
  );
}

export default CreateRoomModal;
