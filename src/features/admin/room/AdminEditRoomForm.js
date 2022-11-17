import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { updateRoom } from '../../../api/adminApi';

export default function AdminEditRoomForm({
  item,
  showRooms,
  handleCloseEdit
}) {
  const { currentPrice, roomImage, desc, status, id } = item;

  const [input, setInput] = useState({
    currentPrice,
    roomImage,
    desc,
    status
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [roomImageInput, setRoomImageInput] = useState(null);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append(
        'roomImage',
        roomImageInput ? roomImageInput : input.roomImage
      );
      formData.append('desc', input.desc);
      formData.append('currentPrice', input.currentPrice);
      formData.append('status', input.status);
      const res = await updateRoom(formData, id);
      console.log(res);
      toast.success('Update Room Success');
      showRooms();
      handleCloseEdit();
    } catch (err) {
      console.log(err);
      toast.error('ERROR UPDATE');
    } finally {
    }
  };
  return (
    <div
      className="flex bg-slate-500 justify-center h-[80%]"
      onClick={(e) => e.stopPropagation()}
    >
      <form className="flex flex-col justify-center items-center">
        <img
          src={item?.roomImage}
          className="w-[500px] mt-20"
          alt="roomImage"
        />
        <input
          type="file"
          id="roomImage"
          name="roomImage"
          onChange={(e) => {
            if (e.target.files[0]) {
              setRoomImageInput(e.target.files[0]);
            }
          }}
          className="border-1 rounded-xl w-full text-black px-12 py-5"
        />
        <div className="flex flex-col gap-5 font-bold text-2xl  mx-10 ">
          <div className="text-black text-xl py-2">ROOM NO : {item?.id}</div>
          <label htmlFor="desc" className="text-black text-xl py-2">
            TYPE :
          </label>
          <input
            type="text"
            id="desc"
            name="desc"
            placeholder={item?.desc}
            value={input?.desc}
            onChange={handleChangeInput}
            className="border-1 border-slate-500 rounded-xl p-3 text-black px-5"
          />
          <label htmlFor="price" className="text-black text-xl py-2">
            Price :
          </label>
          <input
            type="text"
            id="price"
            name="currentPrice"
            placeholder={item?.currentPrice}
            value={input?.currentPrice}
            onChange={handleChangeInput}
            className="border-1 border-slate-500 rounded-xl p-3 text-black px-5"
          />
          <label htmlFor="status" className="text-black text-xl py-2">
            STATUS :
          </label>
          <input
            type="text"
            id="status"
            name="status"
            placeholder={item?.status}
            value={input?.status}
            onChange={handleChangeInput}
            className="border-1 border-slate-500 rounded-xl p-3 text-black px-5"
          />

          <button
            className="my-5 bg-black text-white w-[500px] h-[80px] rounded-xl align-center items-center"
            type="submit"
            onClick={handleSubmitForm}
          >
            Confirm Edit Room
          </button>
        </div>
      </form>
    </div>
  );
}
