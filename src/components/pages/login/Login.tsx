import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { LoginCard } from "../../styles/LoginCardStyle";
import authService from "../../../service/authService";

const Login = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    try {
      const response = await authService.login({ email, password });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <LoginCard>
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          textAlign={"center"}
        >
          ログイン
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
          onSubmit={handleSubmit}
        >
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
          <Button type="submit" fullWidth variant="contained" color="primary">
            ログイン
          </Button>
        </Box>
        <Typography sx={{ textAlign: "center" }}>
          <span>
            <Link
              href="/register"
              component={Link}
              variant="body2"
              sx={{ alignSelf: "center" }}
            >
              新規登録はこちら
            </Link>
          </span>
        </Typography>
      </LoginCard>
    </>
  );
};

export default Login;
