import React from "react";
import "./Categories.css";
import Spinner from "react-bootstrap/Spinner";
import Category from "../category/Category";
import { v4 as uuidv4 } from "uuid";

const Categories = ({ categories, load, setData }) => {
  const addCategory = async () => {
    try {
      const newCategory = {
        id: uuidv4(),
        name: prompt("Enter the category name"),
      };

      setData([...categories, newCategory]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      // await axios.delete(`${baseUrl}/${id}`);
      setData(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (category) => {
    try {
      const promptCategory = prompt(
        "Enter the new category name",
        category.name
      );

      if (promptCategory !== null) {
        setData(
          categories.map((cat) =>
            cat.id === category.id ? { ...cat, name: promptCategory } : cat
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="category-container">
      <h1>Categories</h1>
      <button onClick={addCategory}>Add</button>
      {load ? (
        <div className="spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        categories.map((category) => (
          <Category
            name={category.name}
            key={category.id}
            onDelete={() => {
              handleDelete(category.id);
            }}
            onEdit={() => handleEdit(category)}
          />
        ))
      )}
    </div>
  );
};

export default Categories;
