// components/Topbar.jsx
export default function Topbar() {
    return (
      <div className="ml-64 h-16 bg-white shadow-sm flex items-center justify-between px-6">
        <input
          type="text"
          placeholder="Search your content..."
          className="border px-3 py-2 rounded-lg w-96"
        />
        <div className="flex items-center gap-4">
          <img
            src="/user-avatar.png"
            className="w-10 h-10 rounded-full"
            alt="User"
          />
        </div>
      </div>
    );
  }
  