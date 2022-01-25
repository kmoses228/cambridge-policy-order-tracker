import React from "react";
import { fetchPolicyOrders } from "../../data/GoogleSheets";
import useAsync from "../../hooks/useAsync";
import { PolicyOrder } from "../../types";

const Home: React.FC = () => {
  const { value, status } = useAsync<PolicyOrder[]>(fetchPolicyOrders, true);
  console.log(status, value);

  return <div>App</div>;
};
export default Home;
