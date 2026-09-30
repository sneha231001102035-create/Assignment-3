import { useState } from "react";
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      employeeId: "EMP001",
      department: "Production",
      gender: "Male",
      phone: "9876543210",
      localAddress: "Village Road, Kolkata",
      permanentAddress: "Main Road, Kolkata",
    },
    {
      id: 2,
      name: "Priya Singh",
      employeeId: "EMP002",
      department: "Accounts",
      gender: "Female",
      phone: "9876543211",
      localAddress: "Station Road, Kolkata",
      permanentAddress: "MG Road, Kolkata",
    },
    {
      id: 3,
      name: "Amit Kumar",
      employeeId: "EMP003",
      department: "Management",
      gender: "Male",
      phone: "9876543212",
      localAddress: "College Road, Kolkata",
      permanentAddress: "Park Street, Kolkata",
    },
  ]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Add Employee
  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now(),
    };

    setEmployees([...employees, newEmployee]);
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      setEmployees(
        employees.filter((employee) => employee.id !== id)
      );
    }
  };

  // Start Editing
  const editEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  // Update Employee
  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setEditingEmployee(null);
  };

  // Search and Department Filter
  const filteredEmployees = employees.filter((employee) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      employee.name.toLowerCase().includes(searchText) ||
      employee.employeeId.toLowerCase().includes(searchText) ||
      employee.department.toLowerCase().includes(searchText);

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  // Department List
  const departments = [
    "All",
    ...new Set(employees.map((employee) => employee.department)),
  ];

  return (
    <div className="app">
      <Header />

      <main>
        <section className="container">

          {/* Employee Count */}
          <div className="top-section">
            <h2>Employee Directory</h2>

            <div className="employee-count">
              Total Employees: <strong>{employees.length}</strong>
            </div>
          </div>

          {/* Employee Form */}
          <EmployeeForm
            onAdd={addEmployee}
            onUpdate={updateEmployee}
            editingEmployee={editingEmployee}
            cancelEdit={() => setEditingEmployee(null)}
          />

          {/* Search and Filter */}
          <div className="filter-section">

            <input
              type="text"
              placeholder="Search by name, ID or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "All"
                    ? "All Departments"
                    : dept}
                </option>
              ))}
            </select>

          </div>

          {/* Employee List */}
          <EmployeeList
            employees={filteredEmployees}
            onDelete={deleteEmployee}
            onEdit={editEmployee}
          />

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
