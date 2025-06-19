import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeList = ({ employees, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      {employees.length === 0 ? (
        <p className="text-gray-600">No employees added yet.</p>
      ) : (
        <ul>
          <AnimatePresence>
            {employees.map((emp) => (
              <motion.li
                key={emp.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <Link
                    to={`/employee/${emp.id}`}
                    className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <Eye size={16} /> {emp.name}
                  </Link>

                  <p className="text-gray-500 text-sm">{emp.position}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(emp)}
                    className="text-green-600 font-medium flex items-center gap-1"
                  >
                    <Pencil size={16} /> Edit
                  </button>
                  <button
                    onClick={() => onDelete(emp.id)}
                    className="text-red-500 font-medium flex items-center gap-1"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
