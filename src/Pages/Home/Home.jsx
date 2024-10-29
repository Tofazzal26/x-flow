import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  const { name } = useContext(AuthContext);

  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
