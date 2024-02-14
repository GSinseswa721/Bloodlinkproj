import { useState } from "react";
import { MdDelete, MdEditNotifications } from "react-icons/md";
import EditPopup from "./EditPopup";

const Tooltip = () => {
  const [showEditPopup, setShowEditPopup] = useState(false);

  return (
    <>
      <div className="absolute bottom-0 right-3 text-white bg-black rounded-lg w-fit text-base">
        <ul className="m-0 p-2">
          <li
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setShowEditPopup(true)}
          >
            <MdEditNotifications className="m-0" /> Edit
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            <MdDelete className="m-0" />
            Delete
          </li>
        </ul>
      </div>
      {showEditPopup && <EditPopup setShowEditPopup={setShowEditPopup} />}
    </>
  );
};

export default Tooltip;
