import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { LoginCard } from "../styles/LoginCardStyle";

const Register = () => {
  return (
    <>
      <LoginCard>
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          新規登録
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <FormControl>
            <FormLabel htmlFor="name">名前</FormLabel>
            <TextField
              id="name"
              type="text"
              name="name"
              placeholder="your name"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: "name" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">メールアドレス</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: "email" }}
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password">パスワード</FormLabel>
            </Box>
            <TextField
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
        </Box>

        <Button type="submit" fullWidth variant="contained" color="primary">
          新規登録
        </Button>

        <Typography sx={{ textAlign: "center" }}>
          <span>
            <Link
              href="/login"
              component={Link}
              variant="body2"
              sx={{ alignSelf: "center" }}
            >
              ログインはこちら
            </Link>
          </span>
        </Typography>
      </LoginCard>
    </>
  );
};

export default Register;
