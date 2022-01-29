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

type Props = {
  topic: Topic;
};

const TopicIcon: React.FC<Props> = ({ topic }) => {
  const theme = useTheme();
  const TopicDisplay: {
    [key in keyof typeof Topic]: {
      icon: IconComponent | null;
      color: string | null;
    };
  } = {
    [Topic.Transit]: { icon: TrainIcon, color: theme.colors.green600 },
    [Topic["Public Safety"]]: {
      icon: BadgeIcon,
      color: theme.colors.blue800,
    },
    [Topic.Ordinance]: { icon: TakeActionIcon, color: theme.colors.purple600 },
    [Topic["Gov Ops"]]: { icon: CogIcon, color: theme.colors.purple100 },
    [Topic.Neighborhood]: { icon: MapIcon, color: theme.colors.purple100 },
    [Topic["Public Health"]]: {
      icon: HeartIcon,
      color: theme.colors.red600,
    },
    [Topic.Education]: { icon: BookIcon, color: theme.colors.purple100 },
    [Topic.Housing]: { icon: HomeIcon, color: theme.colors.purple100 },
    [Topic["Animal Welfare"]]: { icon: null, color: null },
    [Topic.Finance]: { icon: DollarIcon, color: theme.colors.purple100 },
  };

  const display = TopicDisplay[topic] || { icon: null, color: null };
  const Icon =
    display.icon || (() => <Heading>{topic.substring(0, 2)}</Heading>);
  const iconColor = theme.colors.dark;

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
        <Icon size={25} color={iconColor} />
      </Pane>
    </Tooltip>
  );
};

export default TopicIcon;
