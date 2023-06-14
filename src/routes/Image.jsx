import { useState } from "react";
import FormSection from "../components/Form";
import ImageCard from "../components/ImageCard";

const ImageGenerator = () => {
    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(false);

    const getImage = (prompt, setPrompt) => {
        setLoading(true);
        fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
            },
            body: JSON.stringify({
                prompt,
                n: 1,
                size: "256x256",
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setImages({
                    prompt,
                    data: data.data,
                });
                setPrompt("");
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    return (
        <>
            <FormSection getImage={getImage} />
            <ImageCard loading={loading} images={images} />
        </>
    );
};

export default ImageGenerator;
