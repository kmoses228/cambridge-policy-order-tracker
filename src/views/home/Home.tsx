import React, { useMemo } from "react";
import { fetchPolicyOrders } from "../../data/GoogleSheets";
import useAsync from "../../hooks/useAsync";
import { Pane, Heading, Spinner, Tablist, Tab } from "evergreen-ui";
import PolicyOrderRow from "./PolicyOrderRow";
import moment from "moment";
import Footer from "./Footer";
import seal from "../../img/seal.png";
import { useLocation, useNavigate } from "react-router-dom";
import PolicyOrderList from "./PolicyOrderList";

const Home: React.FC = () => {
  const { value, status } = useAsync(fetchPolicyOrders, true);
  const navigate = useNavigate();
  const location = useLocation();

  let filterBy: "awaiting" | "passed" | "failed" = "awaiting";
  if (location.pathname === "/passed") {
    filterBy = "passed";
  } else if (location.pathname === "/failed") {
    filterBy = "failed";
  }

  const showValues = useMemo(
    () =>
      (value || [])
        .filter((po) => {
          switch (filterBy) {
            case "awaiting":
              return !po.hasVotes;
            case "passed":
              return po.results.yes.length > po.results.no.length;
            case "failed":
              return po.results.no.length > po.results.yes.length;
            default:
              return true;
          }
        })
        .sort((a, b) => moment(b.date).unix() - moment(a.date).unix()),
    [value, filterBy]
  );

  let content = null;
  if (status !== "success" || !value) {
    content = <Spinner />;
  } else {
    content = (
      <PolicyOrderList policyOrders={showValues} fileredKey={filterBy} />
    );
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
      <Heading size={900} marginTop={20} marginBottom={25}>
        Cambridge Policy Orders
      </Heading>
      <Tablist marginBottom={16}>
        <Tab
          isSelected={filterBy === "awaiting"}
          onSelect={() => navigate("/", { replace: true })}
        >
          Awaiting Vote
        </Tab>
        <Tab
          isSelected={filterBy === "passed"}
          onSelect={() => navigate("/passed", { replace: true })}
        >
          Passed
        </Tab>
        <Tab
          isSelected={filterBy === "failed"}
          onSelect={() => navigate("/failed", { replace: true })}
        >
          Failed
        </Tab>
      </Tablist>
      {/* <Pane textAlign="center" marginBottom={30}>
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
      </Pane> */}
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        maxWidth="100%"
      >
        {content}
      </Pane>
      <Footer />
    </Pane>
  );
};

export default Home;
