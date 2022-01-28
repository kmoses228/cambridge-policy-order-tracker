import React from "react";
import { fetchPolicyOrders } from "../../data/GoogleSheets";
import useAsync from "../../hooks/useAsync";
import { PolicyOrder, Topic } from "../../types";
import { Pane, Heading, Spinner, Small, Link, Text } from "evergreen-ui";
import PolicyOrderRow from "./PolicyOrderRow";
import TopicIcon from "./TopicIcon";

const Home: React.FC = () => {
  const { value, status } = useAsync<PolicyOrder[]>(fetchPolicyOrders, true);
  console.log(status, value);

  let content = null;
  if (status !== "success" || !value) {
    content = <Spinner />;
  } else {
    content = value.map((po: PolicyOrder) => (
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
      <Heading size={900} marginTop={55} marginBottom={55}>
        Cambridge Policy Orders
      </Heading>
      <Pane textAlign="center" marginBottom={30}>
        {Object.keys(Topic).map((topic: string) => (
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
      <Pane textAlign="center" paddingBottom={20} paddingTop={20}>
        <Text color="muted">
          Data Provided by{" "}
          <Link href="https://docs.google.com/spreadsheets/d/12lHAVLNtH-Ycm-C2k0JJfACZdVg4EIuztxt8GVt5NXI/edit#gid=0">
            Google Sheet
          </Link>
        </Text>
        <br />
        <Text color="muted">
          <Small>
            This site is not maintained nor endorsed by the City of Cambridge or
            any City Council member. Data may not be correct or complete.
          </Small>
        </Text>
      </Pane>
    </Pane>
  );
};
export default Home;
