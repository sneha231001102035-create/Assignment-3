import { useEffect, useState } from "react";

function EmployeeForm({
  onAdd,
  onUpdate,
  editingEmployee,
  cancelEdit,
}) {
  const initialForm = {
    name: "",
    employeeId: "",
    department: "",
    gender: "",
    phone: "",
    localAddress: "",
    permanentAddress: "",
  };

  const [formData, setFormData] = useState(initialForm);

  // Load employee data when Edit is clicked
  useEffect(() => {
    if (editingEmployee) {
      setFormData({
        name: editingEmployee.name,
        employeeId: editingEmployee.employeeId,
        department: editingEmployee.department,
        gender: editingEmployee.gender,
        phone: editingEmployee.phone,
        localAddress: editingEmployee.localAddress,
        permanentAddress:
          editingEmployee.permanentAddress,
      });
    } else {
      setFormData(initialForm);
    }
  }, [editingEmployee]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.employeeId ||
      !formData.department ||
      !formData.gender ||
      !formData.phone ||
      !formData.localAddress ||
      !formData.permanentAddress
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editingEmployee) {
      onUpdate({
        ...formData,
        id: editingEmployee.id,
      });
    } else {
      onAdd(formData);
    }

    setFormData(initialForm);
  };

  return (
    <section className="form-section">
      <h2>
        {editingEmployee
          ? "Edit Employee"
          : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
            />
          </div>

          <div className="form-group">
            <label>Employee ID</label>

            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="Enter employee ID"
            />
          </div>

          <div className="form-group">
            <label>Department</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">
                Select Department
              </option>

              <option value="Production">
                Production
              </option>

              <option value="Accounts">
                Accounts
              </option>

              <option value="Management">
                Management
              </option>

              <option value="Sales">
                Sales
              </option>

              <option value="Maintenance">
                Maintenance
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">
                Select Gender
              </option>

              <option value="Male">Male</option>

              <option value="Female">Female</option>

              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-group full-width">
            <label>Local Address</label>

            <textarea
              name="localAddress"
              value={formData.localAddress}
              onChange={handleChange}
              placeholder="Enter local address"
              rows="2"
            ></textarea>
          </div>

          <div className="form-group full-width">
            <label>Permanent Address</label>

            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Enter permanent address"
              rows="2"
            ></textarea>
          </div>

        </div>

        <div className="form-buttons">

          <button
            type="submit"
            className="add-button"
          >
            {editingEmployee
              ? "Update Employee"
              : "Add Employee"}
          </button>

          {editingEmployee && (
            <button
              type="button"
              className="cancel-button"
              onClick={() => {
                cancelEdit();
                setFormData(initialForm);
              }}
            >
              Cancel
            </button>
          )}

        </div>
      </form>
    </section>
  );
}

export default EmployeeForm;
