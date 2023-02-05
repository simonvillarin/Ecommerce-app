import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

function Home() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 10.25rem)",
        pt: mobile ? 10 : 12,
        pb: mobile ? 4 : 6,
      }}
    >
      <Banner />
      <Cards />
    </Box>
  );
}

export default Home;
