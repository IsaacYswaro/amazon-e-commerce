import React from "react";
import { categoryInfo } from "./CatagoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfo.map((info) => (
        <CategoryCard key={info.name} data={info} />
      ))}
    </section>
  );
}

export default Category;
