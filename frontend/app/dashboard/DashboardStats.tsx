"use client"

export function DashboardStats({
  total,
  pending,
  completed,
}: {
  total: number
  pending: number
  completed: number
}) {
  const stats = [
    { label: "Total Tasks", value: total },
    { label: "Pending", value: pending },
    { label: "Completed", value: completed },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card border border-border rounded-xl p-6"
        >
          <p className="text-sm text-muted-foreground">{stat.label}</p>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
