import { Link, Pane, Small, Text } from "evergreen-ui";

const Footer: React.FC = () => {
  return (
    <Pane textAlign="center" paddingBottom={20} paddingTop={20}>
      <Text color="muted">
        Data Provided by{" "}
        <Link
          href="https://docs.google.com/spreadsheets/d/12lHAVLNtH-Ycm-C2k0JJfACZdVg4EIuztxt8GVt5NXI/edit#gid=0"
          target="blank"
        >
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
  );
};

export default Footer;
