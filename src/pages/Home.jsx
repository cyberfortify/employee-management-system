import { useState, useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

const Home = () => {
  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem("employees");
    return stored ? JSON.parse(stored) : [];
  });

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleAddEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const handleUpdateEmployee = (updated) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updated.id ? updated : emp))
    );
  };

  const handleDeleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const clearSelection = () => {
    setSelectedEmployee(null);
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* 🔎 Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 📌 2 Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Employee Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            {selectedEmployee ? "Edit Employee" : "Add New Employee"}
          </h2>
          <EmployeeForm
            onAdd={handleAddEmployee}
            onUpdate={handleUpdateEmployee}
            selectedEmployee={selectedEmployee}
            clearSelection={clearSelection}
          />
        </div>

        {/* Right: Employee List */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Employee List</h2>
          <EmployeeList
            employees={filteredEmployees}
            onDelete={handleDeleteEmployee}
            onEdit={handleEditEmployee}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
