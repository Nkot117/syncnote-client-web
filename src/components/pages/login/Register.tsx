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
import { useState } from "react";

const Register = () => {
  const [isFinished, setIsFinished] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    try {
      const respose = await authService.register({ name, email, password });
      console.log(respose);
      setIsFinished(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginCard>
      {isFinished ? (
        // フォームを表示
        <>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            textAlign={"center"}
          >
            サインアップ
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
              <FormLabel htmlFor="name">名前</FormLabel>
              <TextField
                id="name"
                type="text"
                name="name"
                placeholder="user name"
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
                placeholder="*****"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel htmlFor="password">確認パスワード</FormLabel>
              </Box>
              <TextField
                name="confirmPassword"
                placeholder="*****"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="primary">
              サインアップ
            </Button>
          </Box>
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
        </>
      ) : (
        // 完了画面を表示
        <>
          <Box sx={{ textAlign: "left", padding: "2rem" }}>
            <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
              ご登録いただいたメールアドレスに確認メールを送信しました。
              メール内のリンクをクリックして、登録を完了してください。
              <br />
              メールが届かない場合は、迷惑メールフォルダをご確認いただくか、
              再送信をお試しください。
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            href="/login"
            sx={{ textTransform: "none", borderRadius: "20px" }}
          >
            ログイン画面へ
          </Button>
        </>
      )}
    </LoginCard>
  );
};

export default Register;
