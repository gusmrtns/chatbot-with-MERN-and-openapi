import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthContext";


const ChatItem = ({
    role,
    content
}: {
    role: "user" | "assistant";
    content: string;
}) => {
    const auth = useAuth();
    return role === "assistant" ? (
        <Box
            sx={{
                display: "flex",
                p: 2,
                my: 2,
                gap: 2,
                bgcolor: "#004d5612"
            }}>
            <Avatar
                sx={{
                    ml: 0,
                }}>
                <img src="openai_logo2.png" alt="openai" width={"30px"} />
            </Avatar>
            <Box>
                <Typography fontSize={"20px"}>
                    {content}
                </Typography>
            </Box>
        </Box>
    ) : (
        <Box
            sx={{
                display: "flex",
                p: 2,
                gap: 2,
                bgcolor: "#004d56"
            }}>
            <Avatar
                sx={{
                    ml: 0,
                    bgcolor: "black",
                    color: "white",
                }}>
                {auth?.user?.name?.charAt(0)}
                {auth?.user?.name?.split(" ")[1]?.charAt(0)}
            </Avatar>
            <Box>
                <Typography fontSize={"20px"}>
                    {content}
                </Typography>
            </Box>
        </Box>
    );
};

export default ChatItem;