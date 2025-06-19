import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import EmployeeDetails from "../components/EmployeeDetails";
import { AnimatePresence, motion } from "framer-motion";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/Login"; // ✅ Add this line
import Signup from "../pages/Signup"; // ✅ Add this too

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Home />
              </motion.div>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <About />
              </motion.div>
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Contact />
              </motion.div>
            </PrivateRoute>
          }
        />

        <Route
          path="/employee/:id"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EmployeeDetails />
            </motion.div>
          }
        />

        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
