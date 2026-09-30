import EmployeeCard from "./EmployeeCard";

function EmployeeList({
  employees,
  onDelete,
  onEdit,
}) {
  return (
    <section className="employee-section">

      <h2>
        Employees ({employees.length})
      </h2>

      {employees.length === 0 ? (
        <div className="no-data">
          <p>No employees found.</p>
        </div>
      ) : (
        <div className="employee-grid">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default EmployeeList;
