import React, { useRef, useEffect } from "react";
import { User } from "./types";

interface UserFormProps {
  user: User;
  isEditing: boolean;
  error: string | null;
  onChange: (user: User) => void;
  onSave: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
  user,
  isEditing,
  error,
  onChange,
  onSave,
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      ref={formRef}
      className="mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md bg-gradient-to-r from-gray-50 via-white to-gray-50"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 animate-fade-in-down">
        {isEditing ? "Edit User" : "Add User"}
      </h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="First Name"
          value={user.first_name}
          onChange={(e) => onChange({ ...user, first_name: e.target.value })}
          className="border p-2 rounded-lg shadow-md"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={user.last_name}
          onChange={(e) => onChange({ ...user, last_name: e.target.value })}
          className="border p-2 rounded-lg shadow-md"
        />
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => onChange({ ...user, username: e.target.value })}
          className="border p-2 rounded-lg shadow-md"
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={(e) => onChange({ ...user, age: Number(e.target.value) })}
          className="border p-2 rounded-lg shadow-md"
        />
        <input
          type="text"
          placeholder="Marital Status"
          value={user.marital_status}
          onChange={(e) =>
            onChange({ ...user, marital_status: e.target.value })
          }
          className="border p-2 rounded-lg shadow-md"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={user.is_employed}
            onChange={(e) =>
              onChange({ ...user, is_employed: e.target.checked })
            }
            className="mr-2"
          />
          Employed
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={user.is_founder}
            onChange={(e) =>
              onChange({ ...user, is_founder: e.target.checked })
            }
            className="mr-2"
          />
          Founder
        </label>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-150 shadow-md animate-bounce"
          onClick={onSave}
        >
          Save User
        </button>
      </div>
    </div>
  );
};

export default UserForm;
