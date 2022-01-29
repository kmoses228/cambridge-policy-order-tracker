import React from "react";
import { fetchPolicyOrders } from "../../data/GoogleSheets";
import useAsync from "../../hooks/useAsync";
import { PolicyOrder, Topic } from "../../types";
import { Pane, Heading, Spinner, Small, Link, Text } from "evergreen-ui";
import PolicyOrderRow from "./PolicyOrderRow";
import TopicIcon from "./TopicIcon";
import moment from "moment";
import Footer from "./Footer";
import seal from "../../img/seal.png";

const Home: React.FC = () => {
  const { value, status } = useAsync<PolicyOrder[]>(fetchPolicyOrders, true);

  let content = null;
  if (status !== "success" || !value) {
    content = <Spinner />;
  } else {
    content = value
      .sort(
        (a: PolicyOrder, b: PolicyOrder) =>
          moment(b.date).unix() - moment(a.date).unix()
      )
      .map((po: PolicyOrder) => (
        <PolicyOrderRow key={po.policyOrder} po={po} />
      ));
  }

  return (
    <Pane
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="start"
      flexDirection="column"
    >
      <img
        style={{ marginTop: 20 }}
        src={seal}
        width={150}
        alt="Seal of Cambridge, Massachusetts"
      />
      <Heading size={900} marginTop={20} marginBottom={50}>
        Cambridge Policy Orders
      </Heading>
      <Pane textAlign="center" marginBottom={30}>
        {Object.keys(Topic)
          .sort()
          .map((topic: string) => (
            <Pane
              key={topic}
              display="inline-block"
              marginLeft={10}
              marginRight={10}
              textAlign="center"
            >
              <Pane display="inline-block">
                <TopicIcon topic={Topic[topic as keyof typeof Topic]} />
              </Pane>
              <br />
              <Text>
                <Small>{topic}</Small>
              </Text>
            </Pane>
          ))}
      </Pane>
      <Pane display="flex" flexDirection="column" alignItems="stretch">
        {content}
      </Pane>
      <Footer />
    </Pane>
  );
};

export default Home;
