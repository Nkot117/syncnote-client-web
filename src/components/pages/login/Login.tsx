import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { LoginCard } from "../../styles/LoginCardStyle";
import authService from "../../../service/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  console.log("Login Render")
  const navigate = useNavigate();
  const [isLoginError, setLoginError] = useState(false)
  
  const handleClose =() =>  {
    setLoginError(false)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    try {
      const response = await authService.login({ email, password });
      console.log(response);
      navigate("/")
    } catch (error) {
      console.error(error);
      setLoginError(true)
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

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isLoginError === true}
          autoHideDuration={6000}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            ログインできませんでした。
            メールアドレス、パスワードをお確かめの上、再度ログインしてください。
          </Alert>
        </Snackbar>
        
        <Typography sx={{ textAlign: "center" }}>
          <span>
            <Link
              href="register"
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
