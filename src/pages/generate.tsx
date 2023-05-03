import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Gen() {
    const router = useRouter();
    const params = router.query;

    const [imageURL, setImageURL] = useState<string>();
    useEffect(() => {
        const Canvas = document.getElementById("canvas") as HTMLCanvasElement;
        Canvas.width = 640;
        Canvas.height = 480;

        const ctx = Canvas.getContext("2d");
        if (ctx) {
            const image = new Image();
            image.onload = () => {
                ctx.drawImage(image, 0, 0);
                ctx.fillStyle = "gray";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.fillText("hello world", 120, 200);
            };
            image.src = "/resource/test.jpg";
        }
    }, []);

    return(
        <canvas id="canvas"></canvas>
    );
}