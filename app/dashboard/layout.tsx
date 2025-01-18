export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#180161] text-white">
      
        {children}
      
    </div>
  )
}

