import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";
import { userRatings } from "../components/users/FilterData";
import UserFilter from "../components/users/UserFilter";
import UserCard from "../components/users/UserCard";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRating, setSelectedRating] = useState(userRatings[0]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers =
    selectedRating.label === "All Ratings"
      ? users
      : users.filter((user) => {
          const rating = user.rating ?? 0;
          return (
            rating >= selectedRating.min &&
            rating < selectedRating.max
          );
        });

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-zinc-300 bg-zinc-950">
        Loading users...
      </div>
    );
  }

  return (
    <div className="p-8 bg-zinc-950 min-h-screen text-zinc-100">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-zinc-400 mt-1">
          Total Users: {users.length}
        </p>
      </div>

      {/* Filter */}
      <UserFilter
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />

      {/* Users Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user._id} user={user} />
          ))
        ) : (
          <div className="col-span-full text-center text-zinc-400">
            No users found for this rating
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
