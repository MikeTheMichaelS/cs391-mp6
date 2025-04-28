import Image from "next/image";
import SignIn from "@/components/SignInButton";
import { auth } from "@/auth";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";


export default async function Home() {
  const session = await auth();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {session ? (
        <>
          <Image
            src={session?.user?.image || "/default-avatar.png"}
            alt="User Image"
            width={200}
            height={200}
            style={{ borderRadius: "50%", display: "block" }}
          />
          <br />
          <Typography
            align="center"
            sx={{
              fontSize: "1.5vw"
            }}>
            Hello, {session?.user?.name}!
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: "1.5vw"
            }}>
            Your email is {session?.user?.email}
          </Typography>
        </>
      ) : (
        <SignIn />
      )}
    </Box>
  );
}
