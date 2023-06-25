import React from "react";
import TrendingToday from "../../components/trending-today";
import Posts from "../../components/post";



function Popular() {
  return (
    <section style={{ paddingLeft: "270px" }}>
      <TrendingToday />
      <Posts />
      
    </section>
  );
}

export default Popular;
