const UserCard = ({ user }) => {
  return (
    <div
      className="bg-zinc-900 border border-zinc-800 rounded-xl 
                 p-5 hover:border-zinc-700 transition"
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
          alt="user"
          className="h-24 w-24 rounded-full border border-zinc-700 object-cover"
        />
      </div>

      {/* Info */}
      <div className="text-center space-y-1">
        <h2 className="text-lg font-semibold text-zinc-100">
          {user.name}
        </h2>
        <p className="text-sm text-zinc-400">{user.email}</p>
        <p className="text-sm text-zinc-400">📞 {user.mobile}</p>
      </div>

      <div className="my-4 border-t border-zinc-800" />

      {/* Meta */}
      <div className="text-sm text-zinc-400 space-y-2">
        <div className="flex justify-between">
          <span>Joined</span>
          <span className="font-medium text-zinc-200">
            {new Date(user.createdAt).toLocaleDateString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Rating</span>
          <span className="font-medium text-amber-400">
            {user.rating ?? "2.5"} ⭐
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
