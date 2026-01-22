export default function StatsCard() {
  return (
    <div className="bg-[#14141C] p-6 rounded-2xl border border-white/5">
      <h3 className="font-semibold mb-4">Quick Stats</h3>

      <ul className="space-y-3 text-sm text-gray-300">
        <li>📌 5 Tasks</li>
        <li>📁 14 Projects</li>
        <li>👥 32 Team Members</li>
        <li>⏱ 12h Logged</li>
      </ul>
    </div>
  );
}
