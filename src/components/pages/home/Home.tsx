import { Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button variant="outlined">新しいメモを作成する</Button>
    </Box>
  );
};

export default Home;
