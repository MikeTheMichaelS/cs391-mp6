"use client";
import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";

export default function SignIn() {
    return (
        <Button
            variant="contained"
            onClick={() => signIn("github")} // 在客户端调用 signIn
        >
            Signin with GitHub
        </Button>
    );
}