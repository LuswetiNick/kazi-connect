export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Kazi Connect</h1>
        </div>
        <nav>
          {/* Navigation links will be added here based on user role */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
