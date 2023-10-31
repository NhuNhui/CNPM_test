import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      id: "",
      name: "",
      place: "",
      status: "on"
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.id && formState.name && formState.place && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          if(key === "id")
            errorFields.push("ID máy in");
          if(key === "name") 
            errorFields.push("Tên máy in");
          if(key === "place") 
            errorFields.push("Vị trí máy in");
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Thêm máy in
          </button>
          <div className="form-group">
            <label htmlFor="id">ID Máy In</label>
            <input name="id" onChange={handleChange} value={formState.id} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Tên Máy In</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>
          <div className="form-group">
            <label htmlFor="place">Vị Trí Máy In</label>
            <input name="place" onChange={handleChange} value={formState.place} />
          </div>
          
          <div className="form-group">
            <label htmlFor="status">Trạng Thái Máy In</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="on">On</option>
              <option value="off">Off</option>
            </select>
          </div>
          

          {errors && 
          <div className="error">{`Thêm máy in thất bài do thiếu: ${errors}`}</div>
          }
          
        </form>
        
      </div>
    </div>
  );
};