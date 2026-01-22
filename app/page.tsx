import Sidebar from "@/components/Sidebar";
import DashboardCards from "@/components/DashboardCards";
import AIWidget from "@/components/AIWidget";
import StatsCard from "@/components/StatsCard";
import ProjectList from "@/components/ProjectList";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#020617] to-transparent">
      <Sidebar />

      <main className="flex-1 p-6">
        

        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-semibold">
              Welcome{" "}
              <span aria-hidden>👋</span>
            </h1>
            <p className="text-gray-400 mt-1">
              Here’s your day at a glance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              placeholder="Search projects, tasks, people..."
              className="bg-[#0E0E14] px-3 py-2 rounded-lg text-sm w-48 md:w-64"
              aria-label="Search"
            />

            <button className="btn btn-ghost">New</button>
            <button className="btn btn-primary">Create</button>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DashboardCards />
              <StatsCard />
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold mb-3">
                Projects in Progress
              </h2>
              <ProjectList />
            </div>
          </div>

          <aside className="space-y-6">
            <AIWidget />

            <div className="card">
              <h3 className="font-semibold mb-2">Notifications</h3>
              <p className="muted">No new notifications</p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Quick Settings</h3>
              <div className="flex flex-col gap-2">
                <button className="btn btn-ghost">Appearance</button>
                <button className="btn btn-ghost">Account</button>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
