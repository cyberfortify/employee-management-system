import { useParams, useNavigate } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Make sure key matches → 'employees'
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Employee Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">{employee.name}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Position:</strong> {employee.position}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Email:</strong> {employee.email || "Not provided"}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Description:</strong> {employee.description || "No description"}</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
