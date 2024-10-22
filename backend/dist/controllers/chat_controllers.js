import User from "../models/User.js";
import { configureOpenAI } from "../config/openai_config.js";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res
                .status(401)
                .json({ message: "User not registred OR Token malfunctioned" });
        }
        // grab chats of user
        const chats = user.chats.map(({ role, content }) => ({
            role: role, // O tipo de role é restringido para esses três valores.
            content
        }));
        // send new chat with new one to the Open API
        const openai = configureOpenAI();
        // get leatest response
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: chats,
        });
        user.chats.push({ content: chatResponse.choices[0].message });
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
//# sourceMappingURL=chat_controllers.js.map