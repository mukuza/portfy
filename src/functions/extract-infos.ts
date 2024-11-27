import puppeteer from "puppeteer";
import type { ExtractInfo } from "../../types/types";
import { CaptureScreenshot, ScrapeWebsite } from "./puppeteer";
import UploadToImgBB from "./upload-to-imgBB";
import OllamaRespose from "./ollama-response";
import ExtractJson from "./extract-json";

export default async function ExtractInfo(
    { url, imageWidth, imageHeight, captureFullPage }: ExtractInfo,
) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const siteScrape = await ScrapeWebsite(page);
    const response = await OllamaRespose(siteScrape);
    if (!response) return;
    const json = ExtractJson(response);
    if (!json) return;

    const image = await CaptureScreenshot(page, {
        url,
        imageWidth,
        imageHeight,
        captureFullPage,
    });
    if (!image) return;
    const imageURL = await UploadToImgBB(image);

    const data = {
        title: json.title,
        description: json.description,
        tags: json.tags,
        imageURL: imageURL,
    };

    browser.close()

    return data;
}
