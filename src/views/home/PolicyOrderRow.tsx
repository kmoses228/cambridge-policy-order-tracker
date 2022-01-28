import { BanCircleIcon, Heading, Pane, Text, useTheme } from "evergreen-ui";
import { PolicyOrder } from "../../types";
import TopicIcon from "./TopicIcon";

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
    >
      <Pane display="flex">
        <Pane width={40}>
          <TopicIcon topic={po.topic} />
        </Pane>
        <Pane marginLeft={20}>
          <Heading size={500}>{po.policyOrder}</Heading>
          <Text>{po.summary}</Text>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default PolicyOrderRow;
