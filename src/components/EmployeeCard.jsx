function EmployeeCard({
  employee,
  onDelete,
  onEdit,
}) {
  return (
    <div className="employee-card">

      <div className="employee-header">
        <div className="employee-avatar">
          {employee.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3>{employee.name}</h3>

          <p className="employee-id">
            {employee.employeeId}
          </p>
        </div>
      </div>

      <div className="employee-details">

        <p>
          <strong>Department:</strong>{" "}
          {employee.department}
        </p>

        <p>
          <strong>Gender:</strong>{" "}
          {employee.gender}
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          {employee.phone}
        </p>

        <p>
          <strong>Local Address:</strong>{" "}
          {employee.localAddress}
        </p>

        <p>
          <strong>Permanent Address:</strong>{" "}
          {employee.permanentAddress}
        </p>

      </div>

      <div className="card-buttons">

        <button
          className="edit-button"
          onClick={() => onEdit(employee)}
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(employee.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;
