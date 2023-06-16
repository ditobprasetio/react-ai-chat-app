import { useState } from "react";
import FormSection from "../components/Form";
import AnswerSection from "../components/Answer";

const ChatCompletion = () => {
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getResponse = async (question, setQuestion) => {
        setLoading(true);
        fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
            },
            body: JSON.stringify({
                model: "gpt-4",
                max_tokens: 100,
                temperature: 1,
                top_p: 1,
                n: 1,
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: question },
                ],
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setAnswers([
                    {
                        question,
                        answer: data.choices[0].message.content,
                    },
                    ...answers,
                ]);
                setQuestion("");
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    return (
        <>
            <FormSection getResponse={getResponse} />
            <AnswerSection answers={answers} loading={loading} />
        </>
    );
};

export default ChatCompletion;
