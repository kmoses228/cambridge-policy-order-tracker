import { Heading, Link, Pane, Small, Text, useTheme } from "evergreen-ui";
import { PolicyOrder } from "../../types";
import TopicIcon from "./TopicIcon";
import moment from "moment";

type Props = {
  po: PolicyOrder;
};

const PolicyOrderRow: React.FC<Props> = ({ po }) => {
  const theme = useTheme();

  return (
    <Pane
      key={po.policyOrder}
      backgroundColor={theme.colors.tint1}
      marginBottom={20}
      padding={20}
      maxWidth={750}
    >
      <Pane display="flex">
        <Pane width={40}>
          <TopicIcon topic={po.topic} />
        </Pane>
        <Pane marginLeft={20}>
          <Heading size={500}>
            <Link href={po.link} target="blank">
              {po.policyOrder}
            </Link>{" "}
            <Text color="muted">
              <Small>{moment(po.date).format("LL")}</Small>
            </Text>
          </Heading>
          <Text>{po.summary}</Text>
        </Pane>
      </Pane>
      <Pane marginTop={10}>
        <Text color="muted">Voting Results</Text>
      </Pane>
    </Pane>
  );
};

export default PolicyOrderRow;
