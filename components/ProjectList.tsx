export default function ProjectList() {
  return (
    <div className="bg-[#14141C] p-6 rounded-2xl border border-white/5">
      <h3 className="font-semibold mb-4">Projects in Progress</h3>

      <div className="grid grid-cols-3 gap-4">
        {["Alpha", "Beta", "Gamma"].map((p) => (
          <div
            key={p}
            className="bg-[#0E0E14] p-4 rounded-xl"
          >
            <h4 className="font-medium mb-2">
              Project {p}
            </h4>
            <div className="h-2 bg-white/10 rounded">
              <div className="h-2 w-2/3 bg-purple-500 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
