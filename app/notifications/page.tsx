import Card from "@/components/Card"

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Notifications
      </h1>

      <Card>
        <p className="text-gray-400">
          No notifications yet.
        </p>
      </Card>
    </div>
  )
}
