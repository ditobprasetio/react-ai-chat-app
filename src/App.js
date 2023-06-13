import { useState } from "react";
import FormSection from "./components/Form";
import AnswerSection from "./components/Answer";
import { Text } from "@chakra-ui/react";

function App() {
    const [answers, setAnswers] = useState("");
    const [loading, setLoading] = useState(false);

    const getResponse = async (question, setQuestion) => {
        setLoading(true);
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: question,
                max_tokens: 100,
                temperature: 0,
                top_p: 1,
                n: 1,
                stream: false,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(question);
                console.log(data);
                setLoading(false);
                setAnswers([
                    {
                        question,
                        answer: data.choices[0].text,
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
        <div className="App">
            <Text>{process.env.REACT_APP_TEST}</Text>
            <FormSection getResponse={getResponse} />
            <AnswerSection answers={answers} loading={loading} />
        </div>
    );
}

export default App;
