import * as yup from "yup";

export const ProductCreateSchema = yup.object().shape({
  image: yup.string().url().required("Image URL is required"),
  title: yup.string().required("Title is required"),
  category: yup.string().required("Category is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be positive"),
});
