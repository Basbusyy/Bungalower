import React from 'react';

import Modal from '../../../component/Modal';
import AdminEditRoomForm from './AdminEditRoomForm';

export default function EditRoomModal({
  EditRoom,
  handleCloseEdit,
  item,
  setRooms,
  showRooms
}) {
  return (
    <>
      <div className="flex " onClick={handleCloseEdit}>
        <Modal show={EditRoom}>
          <div className="flex max-h-full overflow-y-scroll scrollbar-hide">
            <AdminEditRoomForm
              handleCloseEdit={handleCloseEdit}
              item={item}
              showRooms={showRooms}
              setRooms={setRooms}
            />
          </div>
        </Modal>
      </div>
    </>
  );
}
