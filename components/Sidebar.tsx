"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Folder,
  CheckSquare,
  Users,
  Bot,
  Bell,
  Settings,
} from "lucide-react"

const items = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Teams", href: "/teams", icon: Users },
  { name: "AI Assistant", href: "/ai", icon: Bot },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-[#0b0b12]/80 backdrop-blur-xl border-r border-white/5 px-5 py-8">
      <div className="text-xl font-semibold mb-10">BRIX</div>

      <nav className="space-y-2">
        {items.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
              ${
                pathname === href
                  ? "bg-violet-600/20 text-violet-300"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            <Icon size={18} />
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
