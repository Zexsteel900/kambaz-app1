import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function AssignmentControlButtons({ assignmentId }: { assignmentId: string }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <button onClick={handleDelete} className="btn btn-danger btn-sm ms-2">Delete</button>
    </div>
  );
}
