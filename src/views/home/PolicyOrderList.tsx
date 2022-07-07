import React from "react";
import { PolicyOrder } from "../../types";
import PolicyOrderRow from "./PolicyOrderRow";

type PolicyOrderListProps = {
  policyOrders: PolicyOrder[];
  fileredKey?: string;
};

const PolicyOrderList: React.FC<PolicyOrderListProps> = ({ policyOrders }) => {
  return (
    <>
      {policyOrders.map((po) => (
        <PolicyOrderRow key={po.policyOrder} po={po} />
      ))}
    </>
  );
};
export default React.memo(
  PolicyOrderList,
  (prevProps, nextProps) => prevProps.fileredKey === nextProps.fileredKey
);
