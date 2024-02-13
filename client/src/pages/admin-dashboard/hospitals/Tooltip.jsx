import { MdDelete, MdEditNotifications } from "react-icons/md";

const Tooltip = () => {
  return (
    <div className="absolute bottom-0 right-3 text-white bg-black rounded-lg w-fit text-base">
      <ul className="m-0 p-2">
        <li className="flex gap-2 items-center cursor-pointer">
          <MdEditNotifications className="m-0" /> Edit
        </li>
        <li className="flex gap-2 items-center cursor-pointer">
          <MdDelete className="m-0" />
          Delete
        </li>
      </ul>
    </div>
  );
};

export default Tooltip;
