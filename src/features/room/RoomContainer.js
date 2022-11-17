import React, { useEffect, useState } from 'react';

import * as roomService from '../../api/roomApi';
import RoomBody from './RoomBody';

function RoomContainer() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await roomService.getRoom().then((res) => {
        setRooms(res.data.rooms);
        setLoading(false);
      });
    };
    fetchRoom();
  }, []);

  if (loading) return <div>Loading</div>;
  return (
    <div className="py-4 max-w ">
      {/* {console.log(rooms)} */}
      {rooms?.map((item) => (
        <RoomBody item={item} />
      ))}
    </div>
  );
}

export default RoomContainer;
