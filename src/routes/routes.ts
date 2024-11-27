import express from "express";
import ExtractInfo from "../functions/extract-infos";

const router = express.Router();

router.get("/extract-info", async (req, res) => {
    const { url, width, height, fullpage } = req.query;
    if (!url || typeof url !== "string") {
        res.sendStatus(401);
        return;
    }
    if (width && typeof width !== "string") {
        res.sendStatus(401);
        return;
    }
    if (height && typeof height !== "string") {
        res.sendStatus(401);
        return;
    }
    if (fullpage && typeof fullpage !== "string") {
        res.sendStatus(401);
        return;
    }

    const imageWidth = width ? Number(width) : 1280;
    const imageHeight = height ? Number(height) : 720;
    const captureFullPage = imageWidth || imageHeight
        ? false
        : (fullpage === "true" ? true : false);

    const data = await ExtractInfo({
        url,
        imageWidth,
        imageHeight,
        captureFullPage,
    });

    res.send(data).status(200);
});

export default router;
