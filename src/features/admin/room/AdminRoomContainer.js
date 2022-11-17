import React, { useState } from 'react';
import AdminRoomBody from './AdminRoomBody';
import CreateRoomModal from './CreateRoomModal';
import { getAllRoom } from '../../../api/adminApi';

function AdminRoomContainer() {
  const [openAddRoom, setOpenAddRoom] = useState(false);
  const handleClickOpen = (e) => setOpenAddRoom(true);
  const handleClickClose = (e) => setOpenAddRoom(false);

  const [rooms, setRooms] = useState('');

  const showRooms = async () => {
    try {
      const res = await getAllRoom();
      setRooms(res.data.allRoom);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-700 w-full h-[120px]">
      <div className="flex justify-end mx-20">
        <button
          className="flex justify-center bg-black text-white w-[200px] h-[80px] rounded-xl align-center items-center text-2xl font-bold mt-5 mb-5"
          type="button"
          onClick={handleClickOpen}
        >
          CREATE ROOM
        </button>
        <CreateRoomModal
          handleClickClose={handleClickClose}
          openAddRoom={openAddRoom}
          showRooms={showRooms}
        />
      </div>
      <AdminRoomBody setRooms={setRooms} rooms={rooms} showRooms={showRooms} />
    </div>
  );
}

export default AdminRoomContainer;
