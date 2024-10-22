import { Avatar, Box, Button, IconButton, Input, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";

const chatMessages = [
    { role: "user", content: "Hello! How are you?" },
    { role: "assistant", content: "Hi! I'm doing great. How can I assist you today?" },
    { role: "user", content: "What’s the weather like today?" },
    { role: "assistant", content: "It's sunny with a chance of clouds in the afternoon." },
    { role: "user", content: "Can you suggest a good book?" },
    { role: "assistant", content: "Sure! 'Atomic Habits' by James Clear is highly recommended." },
    { role: "user", content: "That sounds interesting! Thanks." },
    { role: "assistant", content: "You're welcome! Let me know if you need anything else." },
    { role: "user", content: "Can you tell me a joke?" },
    { role: "assistant", content: "Why don’t skeletons fight each other? They don’t have the guts!" }
];


const Chat = () => {
    const auth = useAuth();
    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                width: "100%",
                height: "100%",
                mt: 3,
                gap: 3,
            }}>
            <Box
                sx={{
                    display: {
                        md: "flex",
                        xs: "none",
                        sm: "none",
                    },
                    flex: 0.2,
                    flexDirection: "column",
                }}>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        height: "60hv",
                        bgcolor: "rgb(17,29,39)",
                        borderRadius: 5,
                        flexDirection: "column",
                        mx: 3,
                    }}>
                    <Avatar
                        sx={{
                            mx: "auto",
                            my: 2,
                            bgcolor: "white",
                            color: "black",
                            fontWeight: 700,
                        }}>
                        {auth?.user?.name?.charAt(0)}
                        {auth?.user?.name?.split(" ")[1]?.charAt(0)}
                    </Avatar>
                    <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
                        You're talking to a Chatbot
                    </Typography>
                    <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
                        You can ask anything about Education, Business, Technology, and more.
                        But avoid sharing personal information.
                    </Typography>
                    <Button
                        sx={{
                            width: "200px",
                            my: 'auto',
                            color: "white",
                            fontWeight: 700,
                            borderRadius: 3,
                            mx: "auto",
                            mb: 3,
                            bgcolor: red[800],
                            ":hover": {
                                bgcolor: red.A700,
                            },
                        }}>
                        Clear conversation
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flex: { md: 0.8, xs: 1, sm: 1 }, flexDirection: "column", px: 3 }}>
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "40px",
                        color: "white",
                        mb: 2,
                        mx: "auto"
                    }}>
                    Model = GPT 4o
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        height: "60vh",
                        borderRadius: 3,
                        mx: "auto",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "scroll",
                        overflowX: "hidden",
                        overflowY: "auto",
                        scrollBehavior: "smooth",
                    }}>
                    {chatMessages.map((chat, index) => (
                        <ChatItem content={chat.content} role={chat.role} key={index} />
                    ))}
                </Box>
                <div
                    style={{
                        width: "100%",
                        padding: "20px",
                        borderRadius: 8,
                        backgroundColor: "rgb(17,27,39)",
                        display: "flex",
                        margin: "auto",
                    }} >
                    <input
                        type="text"
                        style={{
                            width: "100%",
                            backgroundColor: "transparent",
                            padding: "10px",
                            border: "none",
                            outline: "none",
                            color: "white",
                            fontSize: "20px",
                        }} />
                    <IconButton
                        sx={{
                            ml: "auto",
                            color: "white",
                        }}>
                        <IoMdSend />
                    </IconButton>
                </div>
                {" "}
            </Box>
        </Box>

    )
};

export default Chat;