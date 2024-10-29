import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";

const Home = () => {
  const { name } = useContext(AuthContext);

  return (
    <div>
      <Banner />
      <Brand />
    </div>
  );
};

export default Home;
