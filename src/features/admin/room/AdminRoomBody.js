import React, { useEffect } from 'react';
import AdminRoomList from './AdminRoomList';

function AdminRoomBody({ rooms, setRooms, showRooms }) {
  useEffect(() => {
    showRooms();
  }, []);
  return (
    <div className="flex flex-col col-span-2">
      {rooms &&
        rooms?.map((item, index) => (
          <AdminRoomList
            key={index}
            item={item}
            setRooms={setRooms}
            showRooms={showRooms}
          />
        ))}
    </div>
  );
}

export default AdminRoomBody;
