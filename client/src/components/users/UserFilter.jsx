import { userRatings } from "./FilterData";

const UserFilter = ({ selectedRating, setSelectedRating }) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-medium text-zinc-300 whitespace-nowrap">
        Filter by Rating:
      </span>

      <select
        value={selectedRating?.label || "All Ratings"}
        onChange={(e) =>
          setSelectedRating(
            userRatings.find((r) => r.label === e.target.value) ||
              userRatings[0]
          )
        }
        className="
          px-4 py-2 rounded-lg
          bg-zinc-900 text-zinc-200
          border border-zinc-700
          hover:border-amber-400
          focus:outline-none focus:ring-2 focus:ring-amber-400
          transition
        "
      >
        {userRatings.map((rating) => (
          <option
            key={rating.label}
            value={rating.label}
            className="bg-zinc-900 text-zinc-200"
          >
            {rating.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserFilter;
