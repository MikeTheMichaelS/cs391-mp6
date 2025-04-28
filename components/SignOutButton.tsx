"use client";
import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";

export default function SignOut() {
    return (
        <Button
            variant="contained"
            onClick={() => signOut()} // 在客户端调用 signIn
        >
            Sign Out
        </Button>
    );
}