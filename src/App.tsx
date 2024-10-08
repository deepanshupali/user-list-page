import React, { useState, useEffect } from "react";
import "./App.css";
import UserTable from "../src/components/UserTable";
import UserForm from "../src/components/UserForm";
import { User } from "./components/types";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState<User>({
    first_name: "",
    last_name: "",
    username: "",
    age: 0,
    marital_status: "",
    is_employed: false,
    is_founder: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const validateUser = (user: User) => {
    if (
      !user.first_name ||
      !user.last_name ||
      !user.username ||
      !user.age ||
      !user.marital_status
    ) {
      return false;
    }
    return true;
  };

  const handleAddUser = () => {
    if (!validateUser(newUser)) {
      setError("All fields are required.");
      return;
    }

    if (isEditing && editUsername) {
      setUsers(
        users.map((user) => (user.username === editUsername ? newUser : user))
      );
      setIsEditing(false);
      setEditUsername(null);
    } else {
      setUsers([...users, newUser]);
    }
    setShowForm(false);
    setNewUser({
      first_name: "",
      last_name: "",
      username: "",
      age: 0,
      marital_status: "",
      is_employed: false,
      is_founder: false,
    });
    setError(null);
  };

  const handleDeleteUser = (username: string) => {
    setUsers(users.filter((user) => user.username !== username));
  };

  const handleEditUser = (username: string) => {
    const userToEdit = users.find((user) => user.username === username);
    if (userToEdit) {
      setNewUser(userToEdit);
      setShowForm(true);
      setIsEditing(true);
      setEditUsername(username);
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-8 text-center text-gray-800 animate-fade-in-down">
        User List
      </h1>
      <UserTable
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
      {showForm && (
        <UserForm
          user={newUser}
          isEditing={isEditing}
          error={error}
          onChange={setNewUser}
          onSave={handleAddUser}
        />
      )}
      {!showForm && (
        <div className="text-center mt-8">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-150 shadow-md animate-pulse"
            onClick={handleShowForm}
          >
            Add User
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
