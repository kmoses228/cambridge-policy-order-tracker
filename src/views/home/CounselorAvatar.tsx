import React from "react";
import { Counselor } from "../../types";
import { Text, Tooltip } from "evergreen-ui";

const CounselorInfo = {
  [Counselor.alannaMallon]: {
    name: "Alanna Mallon",
    img: require("../../img/counselors/alannaMallon.jpeg"),
  },
  [Counselor.burhanAzeem]: {
    name: "Burhan Azeem",
    img: require("../../img/counselors/burhanAzeem.jpeg"),
  },
  [Counselor.deniseSimmons]: {
    name: "Denise Simmons",
    img: require("../../img/counselors/deniseSimmons.jpeg"),
  },
  [Counselor.dennisCarlone]: {
    name: "Dennis Carlone",
    img: require("../../img/counselors/dennisCarlone.jpeg"),
  },
  [Counselor.marcMcGovern]: {
    name: "Marc McGovern",
    img: require("../../img/counselors/marcMcGovern.jpeg"),
  },
  [Counselor.pattyNolan]: {
    name: "Patty Nolan",
    img: require("../../img/counselors/pattyNolan.jpeg"),
  },
  [Counselor.paulToner]: {
    name: "Paul Toner",
    img: require("../../img/counselors/paulToner.jpeg"),
  },
  [Counselor.quintonZondervan]: {
    name: "Quinton Zondervan",
    img: require("../../img/counselors/quintonZondervan.jpeg"),
  },
  [Counselor.sumbulSiddiqui]: {
    name: "Sumbul Siddiqui",
    img: require("../../img/counselors/sumbulSiddiqui.jpeg"),
  },
};

interface Props {
  counselor: Counselor;
  size?: number;
  showName?: boolean;
}

const CounselorAvatar: React.FC<Props> = ({
  counselor,
  size = 30,
  showName = false,
}) => {
  return (
    <>
      <Tooltip content={CounselorInfo[counselor].name}>
        <img
          style={{ borderRadius: "50%", margin: "0 5px" }}
          width={size}
          height={size}
          src={CounselorInfo[counselor].img}
        />
      </Tooltip>
      {showName && <Text>{CounselorInfo[counselor].name}</Text>}
    </>
  );
};

export default React.memo(CounselorAvatar);
