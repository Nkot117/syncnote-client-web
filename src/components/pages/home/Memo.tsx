import { Box, IconButton, TextField } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Memo = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px 50px",
        }}
      >
        <IconButton>
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>

      <Box sx={{ padding: "10px 50px" }}>
        <TextField
          placeholder="無題"
          variant="outlined"
          fullWidth
          value=""
          sx={{
            ".MuiOutlinedInput-input": { padding: 0 },
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            ".MuiOutlinedInput-root": { fontSize: "2rem", fontWeight: "bold" },
          }}
        />
        <TextField
          placeholder="..."
          variant="outlined"
          fullWidth
          value=""
          sx={{
            ".MuiOutlinedInput-input": { padding: 0 },
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            ".MuiOutlinedInput-root": { fontSize: "1rem" },
            marginTop: "20px",
          }}
        />
      </Box>
    </>
  );
};

export default Memo;
