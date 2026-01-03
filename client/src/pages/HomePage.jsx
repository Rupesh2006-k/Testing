import React from "react";

const stats = [
  {
    title: "Total Users",
    value: 50,
    icon: "👤",
    bg: "bg-blue-500/20",
    text: "text-blue-400",
  },
  {
    title: "Total Products",
    value: 120,
    icon: "📦",
    bg: "bg-green-500/20",
    text: "text-green-400",
  },
  {
    title: "Total Orders",
    value: 340,
    icon: "🛒",
    bg: "bg-amber-500/20",
    text: "text-amber-400",
  },
  {
    title: "Products Listed",
    value: 120,
    icon: "📊",
    bg: "bg-purple-500/20",
    text: "text-purple-400",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-zinc-400 mt-1">
          Overview of users, products & orders
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-xl 
                       p-6 hover:border-zinc-700 transition"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg text-xl ${item.bg} ${item.text}`}
            >
              {item.icon}
            </div>

            <div className="mt-4">
              <h2 className="text-sm text-zinc-400">{item.title}</h2>
              <p className="text-3xl font-bold text-white">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
