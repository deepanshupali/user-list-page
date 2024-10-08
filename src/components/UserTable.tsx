import React from "react";
import { User } from "./types";

interface UserTableProps {
  users: User[];
  onEdit: (username: string) => void;
  onDelete: (username: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg bg-gradient-to-r from-gray-100 via-white to-gray-100 p-4">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white">
          <tr>
            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold">
              First Name
            </th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold">
              Last Name
            </th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold">
              Username
            </th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold">
              Age
            </th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold">
              Marital Status
            </th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold">
              Employed
            </th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold">
              Founder
            </th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.username}
              className="border-b bg-gray-50 hover:bg-gray-100 transition duration-150"
            >
              <td className="py-2 sm:py-3 px-2 sm:px-4">{user.first_name}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4">{user.last_name}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4">{user.username}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4">{user.age}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4">
                {user.marital_status}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-4">
                {user.is_employed ? "Yes" : "No"}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-4">
                {user.is_founder ? "Yes" : "No"}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 flex flex-col sm:flex-row gap-2">
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-150 shadow-md"
                  onClick={() => onEdit(user.username)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-150 shadow-md"
                  onClick={() => onDelete(user.username)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
