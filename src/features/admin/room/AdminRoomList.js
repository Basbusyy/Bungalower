import React, { useState } from 'react';
import EditRoomModal from './EditRoomModal';

function AdminRoomList({ item, setRooms, showRooms }) {
  const [EditRoom, setEditRoom] = useState(false);

  const handleClickEdit = (e) => setEditRoom(true);
  const handleCloseEdit = (e) => setEditRoom(false);
  return (
    <>
      <div className="flex border border-dark px-[50px] py-2">
        <img
          src={item?.roomImage}
          alt="Room"
          className=" mx-1 block w-[600px] m-5 ms-5 pe-5"
        />
        <div className="flex flex-col gap-5 font-bold text-2xl my-20 mx-10  ">
          <div>ROOM NO : {item?.id}</div>
          <div>TYPE : {item?.desc}</div>
          <div>PRICE : {item?.currentPrice} Baht</div>
          <div>STATUS : {item?.status}</div>
          <button
            className="my-10 bg-black text-white w-[200px] h-[80px] rounded-xl align-center items-center"
            type="button"
            onClick={handleClickEdit}
          >
            EDIT ROOM
          </button>
        </div>
        <EditRoomModal
          EditRoom={EditRoom}
          handleCloseEdit={handleCloseEdit}
          item={item}
          setRooms={setRooms}
          showRooms={showRooms}
        />
      </div>
    </>
  );
}

export default AdminRoomList;
