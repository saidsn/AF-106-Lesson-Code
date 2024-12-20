import React from "react";
import "./Category.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Category = ({ name, onDelete, onEdit }) => {
  return (
    <div className="category">
      {name}
      <div className="icons">
        <MdDeleteForever onClick={onDelete} />
        <FaEdit onClick={onEdit} />
      </div>
    </div>
  );
};

export default Category;
