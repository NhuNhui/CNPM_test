import React, { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
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
        <table>
          <tbody>
            <td>
              <input name="id" onChange={handleChange} value={formState.id} placeholder={
                formState.id === "" ? "id" : formState.id
              }/>
            </td>
            <td>
              <input name="name" onChange={handleChange} value={formState.name} />
            </td>
            <td>
              <input name="place" onChange={handleChange} value={formState.place} />
            </td>
            <td>
              <select
                name="status"
                onChange={handleChange}
                value={formState.status}
              >
                <option value="on">On</option>
                <option value="off">Off</option>
              </select>
            </td>
          </tbody>
        </table>
        <button type="submit" className="btn" onClick={handleSubmit} >
          Đồng Ý
        </button>

        {errors && 
          <div className="error">{`Thêm máy in thất bài do thiếu: ${errors}`}</div>
        }
          
          

        
      </div>
    </div>
  );
};