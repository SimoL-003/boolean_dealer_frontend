import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
