export default function TopBar() {
  return (
    <div className="flex items-center justify-between">
      <input
        placeholder="Search..."
        className="bg-[#14141C] px-4 py-2 rounded-lg w-80 text-sm outline-none"
      />

      <div className="flex items-center gap-4">
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-lg text-sm">
          + Create
        </button>
      </div>
    </div>
  );
}
