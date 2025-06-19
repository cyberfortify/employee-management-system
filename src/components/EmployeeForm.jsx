import { useState } from "react";

const EmployeeForm = ({ onAdd, editingEmployee, onUpdate }) => {
  const [name, setName] = useState(editingEmployee ? editingEmployee.name : "");
  const [position, setPosition] = useState(editingEmployee ? editingEmployee.position : "");
  const [email, setEmail] = useState(editingEmployee ? editingEmployee.email : "");
  const [description, setDescription] = useState(editingEmployee ? editingEmployee.description : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: editingEmployee ? editingEmployee.id : Date.now().toString(),
      name,
      position,
      email,
      description,
    };

    if (editingEmployee) {
      onUpdate(newEmployee);
    } else {
      onAdd(newEmployee);
    }

    setName("");
    setPosition("");
    setEmail("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded "
      />

      <input
        type="text"
        required
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        placeholder="Email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="Short Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
};

export default EmployeeForm;
