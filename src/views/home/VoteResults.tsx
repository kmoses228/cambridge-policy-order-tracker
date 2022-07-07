import { Pane, Paragraph, Text, useTheme } from "evergreen-ui";
import { Counselor, PolicyOrder } from "../../types";
import CounselorAvatar from "./CounselorAvatar";

interface Props {
  po: PolicyOrder;
}

const VoteResults: React.FC<Props> = ({ po }) => {
  const theme = useTheme();

  return (
    <>
      <Pane display="flex" alignItems="center" marginTop={10} flexWrap="wrap">
        {!!po.sponsors.length && (
          <>
            <Text color="muted">Sponsored by:</Text>
            {po.sponsors.map((sponsor) => (
              <CounselorAvatar
                key={sponsor}
                counselor={sponsor}
                showName={true}
              />
            ))}
            <Pane marginRight={20} />
          </>
        )}
        {!!po.cosponsors.length && (
          <>
            <Text color="muted">Cosponsored by:</Text>
            {po.cosponsors.map((cosponsor) => (
              <CounselorAvatar key={cosponsor} counselor={cosponsor} />
            ))}
          </>
        )}
      </Pane>
      <Paragraph marginTop={10} color="muted">
        Voting
      </Paragraph>
      {!po.hasVotes && <Text>Pending</Text>}
      {po.hasVotes && (
        <>
          <Pane display="flex" marginTop={5} width="100%">
            {!!po.results.yes.length && (
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
                {po.results.yes.map((counselor) => (
                  <CounselorAvatar key={counselor} counselor={counselor} />
                ))}
              </Pane>
            )}
            {!!po.results.no.length && (
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
                {po.results.no.map((counselor) => (
                  <CounselorAvatar key={counselor} counselor={counselor} />
                ))}
              </Pane>
            )}
            {!!po.results.nv.length && (
              <Pane
                padding={10}
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                flexGrow={1}
                minHeight={50}
                backgroundColor={theme.colors.gray100}
              >
                <Text marginRight={20} color={theme.colors.gray700}>
                  Abstained
                </Text>
                {po.results.nv.map((counselor) => (
                  <CounselorAvatar key={counselor} counselor={counselor} />
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
