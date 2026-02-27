import React, { useState } from "react";
import useUsers from "../../Hooks/useUsers/useUsers";
import { FaUser } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader/Loader";

const Users = () => {
  const { users, isLoading } = useUsers();
  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  //   console.log(users);
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h2 className="text-2xl mb-2.5 p-2.5">Total User {users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      {user?.image ? (
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      ) : (
                        <FaUser />
                      )}
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <th className="flex gap-3">
                  {/* Details btn */}
                  <button
                    onClick={() => {
                      setCurrentUser(user);
                      setShowModal(true);
                    }}
                    className="btn btn-accent"
                  >
                    <BsArrowsFullscreen size={20} />
                  </button>
                  {/* Delete btn */}
                  <button
                    onClick={() => handleDelete()}
                    className="btn btn-error"
                  >
                    <MdDeleteForever size={20} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Details Mondal */}
      {showModal && (
        <dialog open className="modal">
          <div className="modal-box max-w-lg">
            <h3 className="text-xl font-bold mb-2">User Details</h3>

            <p>
              <b>Name:</b> {currentUser.name}
            </p>
            <p>
              <b>Email:</b> {currentUser.email}
            </p>

            <p>
              <b>Status:</b> {currentUser.status}
            </p>
            <p>
              <b>Join Date:</b> {currentUser.joinDate}
            </p>

            <div className="modal-action">
              <button className="btn" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Users;
