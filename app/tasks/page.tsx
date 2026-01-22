import Card from "@/components/Card"

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Tasks
      </h1>

      <Card>
        <p className="text-gray-400">
          Your tasks will appear here.
        </p>
      </Card>
    </div>
  )
}
