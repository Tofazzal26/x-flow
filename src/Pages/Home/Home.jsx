import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import OurAnalytics from "../../Components/OurAnalytics/OurAnalytics";
import OurPosts from "../../Components/OurPosts/OurPosts";

const Home = () => {
  const { name } = useContext(AuthContext);

  return (
    <div>
      <Banner />
      <Brand />
      <OurPosts />
      <OurAnalytics />
    </div>
  );
};

export default Home;
