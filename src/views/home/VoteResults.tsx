import { Pane, Paragraph, Text, useTheme } from "evergreen-ui";
import { Counselor, PolicyOrder } from "../../types";
import CounselorAvatar from "./CounselorAvatar";

interface Props {
  po: PolicyOrder;
}

const VoteResults: React.FC<Props> = ({ po }) => {
  const theme = useTheme();

  const sponsors: string[] = [];
  const cosponsors: string[] = [];
  const results: {
    yes: string[];
    no: string[];
    nv: string[];
  } = {
    yes: [],
    no: [],
    nv: [],
  };

  for (const key in Counselor) {
    const result = po[key as keyof PolicyOrder];
    if (result.includes("**")) sponsors.push(key);
    else if (result.includes("*")) cosponsors.push(key);

    if (!result) {
      results.nv.push(key);
    } else if (result.toUpperCase().includes("Y")) {
      results.yes.push(key);
    } else if (result.toUpperCase().includes("N")) {
      results.yes.push(key);
    } else {
      results.nv.push(key);
    }
  }
  const hasVotes = results.yes.length + results.no.length !== 0;

  return (
    <>
      <Pane display="flex" alignItems="center" marginTop={10} flexWrap="wrap">
        {!!sponsors.length && (
          <>
            <Text color="muted">Sponsored by:</Text>
            {sponsors.map((sponsor) => (
              <CounselorAvatar
                key={sponsor}
                counselor={Counselor[sponsor as keyof typeof Counselor]}
                showName={true}
                marginX={5}
              />
            ))}
          </>
        )}
        {!!cosponsors.length && (
          <>
            <Text marginLeft={20} color="muted">
              Cosponsored by:
            </Text>
            {cosponsors.map((cosponsor) => (
              <CounselorAvatar
                key={cosponsor}
                counselor={Counselor[cosponsor as keyof typeof Counselor]}
                marginX={5}
              />
            ))}
          </>
        )}
      </Pane>
      <Paragraph marginTop={10} color="muted">
        Voting
      </Paragraph>
      {!hasVotes && <Text>TBD</Text>}
      {hasVotes && (
        <>
          <Pane display="flex" marginTop={5} width="100%">
            {!!results.yes.length && (
              <Pane
                padding={10}
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                flexGrow={1}
                minHeight={50}
                backgroundColor={theme.colors.green100}
              >
                <Text marginRight={20} color={theme.colors.green700}>
                  Yes
                </Text>
                {results.yes.map((counselor) => (
                  <CounselorAvatar
                    key={counselor}
                    counselor={Counselor[counselor as keyof typeof Counselor]}
                    marginX={5}
                  />
                ))}
              </Pane>
            )}
            {!!results.no.length && (
              <Pane
                padding={10}
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                flexGrow={1}
                minHeight={50}
                backgroundColor={theme.colors.red100}
              >
                <Text marginRight={20} color={theme.colors.red700}>
                  No
                </Text>
                {results.no.map((counselor) => (
                  <CounselorAvatar
                    key={counselor}
                    counselor={Counselor[counselor as keyof typeof Counselor]}
                    marginX={5}
                  />
                ))}
              </Pane>
            )}
          </Pane>
          <Paragraph marginTop={10} color="muted">
            Result
          </Paragraph>
          <Text>{po.result}</Text>
        </>
      )}
    </>
  );
};

export default VoteResults;
