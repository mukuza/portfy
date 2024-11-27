import axios from "axios";

export default async function UploadToImgBB(img: string) {
    const image = img.replace(/^data:image\/png;base64,/, "");

    const bbApiKey = Bun.env.IMG_BB_API_KEY;
    const imgBBURL = `https://api.imgbb.com/1/upload?&key=${bbApiKey}`;

    try {
        const imgBB = await axios.post(imgBBURL, { image }, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return imgBB.data.data.url;
    } catch (error) {
        console.log(error);
    }
}
