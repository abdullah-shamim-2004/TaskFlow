import React, { useState } from "react";
import useUsers from "../../Hooks/useUsers/useUsers";
import { FaUser } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const Users = () => {
  const users = useUsers();
  const [currentUser, setCurrentUser] = useState("");
  const [showModal, setShowModal] = useState(false);
  //   console.log(users);

  return (
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
                <button className="btn btn-accent">
                  <BsArrowsFullscreen size={20} />
                </button>
                <button className="btn btn-error">
                  <MdDeleteForever size={20} />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
