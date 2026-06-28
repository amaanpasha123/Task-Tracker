import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100">

      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          Task Tracker
        </h1>

        <div className="flex items-center gap-4">

          <span className="font-semibold">
            Welcome, {user?.name}
          </span>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </nav>

      <div className="max-w-6xl mx-auto mt-10">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            My Tasks
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
            + Add Task
          </button>

        </div>

        <div className="grid gap-6">

          <div className="bg-white rounded-xl shadow-md p-6">

            <div className="flex justify-between">

              <h3 className="text-xl font-semibold">
                Learn MERN Stack
              </h3>

              <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
                Pending
              </span>

            </div>

            <p className="mt-3 text-gray-600">
              Complete Task Tracker Assignment
            </p>

            <div className="mt-5 flex gap-3">

              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Delete
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;