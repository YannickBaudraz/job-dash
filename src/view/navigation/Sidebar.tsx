/**
 * Using tailwindcss
 * @constructor
 */
export default function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 h-screen">
        <div className="flex h-20 flex-col items-center justify-center">
          <div className="flex items-center">
            <span className="text-2xl font-semibold">Logo</span>
          </div>
        </div>
        <nav className="px-2 py-4">
          <ul>
            <li className="flex items-center rounded-lg py-2 px-4 hover:bg-gray-700 hover:text-white">
              <svg
                className="mr-3 h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
              <span className="font-semibold">Dashboard</span>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
