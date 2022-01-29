import {
  BadgeIcon,
  BookIcon,
  CogIcon,
  DollarIcon,
  Heading,
  HeartIcon,
  HomeIcon,
  IconComponent,
  MapIcon,
  Pane,
  TakeActionIcon,
  Tooltip,
  TrainIcon,
  useTheme,
} from "evergreen-ui";
import { Topic } from "../../types";

const IconForTopic: { [key in keyof typeof Topic]: IconComponent | null } = {
  [Topic.Transit]: TrainIcon,
  [Topic["Public Safety"]]: BadgeIcon,
  [Topic.Ordinance]: TakeActionIcon,
  [Topic["Gov Ops"]]: CogIcon,
  [Topic.Neighborhood]: MapIcon,
  [Topic["Public Health"]]: HeartIcon,
  [Topic.Education]: BookIcon,
  [Topic.Housing]: HomeIcon,
  [Topic["Animal Welfare"]]: null,
  [Topic.Finance]: DollarIcon,
};

type Props = {
  topic: Topic;
};

const TopicIcon: React.FC<Props> = ({ topic }) => {
  const theme = useTheme();

  const Icon =
    IconForTopic[topic] || (() => <Heading>{topic.substring(0, 2)}</Heading>);

  return (
    <Tooltip content={topic} position="top">
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        backgroundColor={theme.colors.gray400}
        width={40}
        height={40}
      >
        <Icon size={25} />
      </Pane>
    </Tooltip>
  );
};

export default TopicIcon;
