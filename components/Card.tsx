export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`
        rounded-2xl
        bg-gradient-to-br from-[#151520]/80 to-[#0f0f18]/80
        backdrop-blur-xl
        border border-white/5
        shadow-[0_20px_40px_rgba(0,0,0,0.6)]
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  )
}
