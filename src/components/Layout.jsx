import { NavBar, Loading } from "./";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />
      {loading ? <Loading /> : <Outlet />}
    </>
  );
};

export default Layout;
