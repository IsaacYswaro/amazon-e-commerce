import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loading from "../../components/Loading/Loading";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false);
      });
  }, [categoryName]);
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName} </p> <hr />
        {isLoading ? (
          <Loading/>):(
<div className={classes.products_container}>
          {results?.map((product)=>(
            <ProductCard 
            key={product.id}
            product={product}
            renderDescription={false}
            renderAdd={true}
            />
          ))}
        </div>
          )}
      </section>
    </LayOut>
  )
}

export default Results;
