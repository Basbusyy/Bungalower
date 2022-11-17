import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createRoom } from '../../../api/adminApi';

export default function CreateRoomBody({ handleClickClose, showRooms }) {
  const [input, setInput] = useState({
    currentPrice: '',
    roomImage: '',
    desc: '',
    status: 'AVALIABLE'
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
      const res = await createRoom(formData);
      console.log(res);
      toast.success('CREATEROOM SUCCESS');
      showRooms();
      handleClickClose();
    } catch (err) {
      console.log(err);
      toast.error('CREATEROOM ERROR');
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
          src={handleChangeInput}
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
          <label htmlFor="desc" className="text-black text-xl py-2">
            TYPE :
          </label>
          <input
            type="text"
            id="desc"
            name="desc"
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
            value={input?.status}
            onChange={handleChangeInput}
            className="border-1 border-slate-500 rounded-xl p-3 text-black px-5"
          />

          <button
            className="my-5 bg-black text-white w-[500px] h-[80px] rounded-xl align-center items-center"
            type="submit"
            onClick={handleSubmitForm}
          >
            CREATE ROOM
          </button>
        </div>
      </form>
    </div>
  );
}
