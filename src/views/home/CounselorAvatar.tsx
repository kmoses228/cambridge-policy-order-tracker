import { Counselor } from "../../types";
import { Avatar, Text, Tooltip } from "evergreen-ui";

const CounselorInfo = {
  [Counselor.alannaMallon]: {
    name: "Alanna Mallon",
  },
  [Counselor.burhanAzeem]: {
    name: "Burhan Azeem",
  },
  [Counselor.deniseSimmons]: {
    name: "Denise Simmons",
  },
  [Counselor.marcMcGovern]: {
    name: "Mark McGovern",
  },
  [Counselor.pattyNolan]: {
    name: "Patty Nolan",
  },
  [Counselor.paulToner]: {
    name: "Paul Toner",
  },
  [Counselor.quintonZondervan]: {
    name: "Quinton Zondervan",
  },
  [Counselor.sumbulSiddiqui]: {
    name: "Sumbul Siddiqui",
  },
};

interface Props {
  counselor: Counselor;
  size?: number;
  showName?: boolean;
  [x: string]: any;
}

const CounselorAvatar: React.FC<Props> = ({
  counselor,
  size = 30,
  showName = false,
  ...rest
}) => {
  return (
    <>
      <Tooltip content={CounselorInfo[counselor].name}>
        <Avatar
          size={size}
          name={CounselorInfo[counselor].name}
          src={require(`../../img/counselors/${counselor}.jpeg`)}
          {...rest}
        />
      </Tooltip>
      {showName && <Text>{CounselorInfo[counselor].name}</Text>}
    </>
  );
};

export default CounselorAvatar;
