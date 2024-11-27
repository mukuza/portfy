import { Browser, Page } from "puppeteer";
import type { ExtractInfo } from "../../types/types";

export async function ScrapeWebsite(page: Page) {
    const data = await page.evaluate(() => {
        const title = document.querySelector("h1")?.innerText ?? null;
        const description = (document.querySelector(
            'meta[name="description"]',
        ) as HTMLMetaElement).content ?? null;

        const pageText = document.body.innerText;

        // return {
        //     title,
        //     description,
        // };

        return pageText;
    });

    return data;
}

export async function CaptureScreenshot(
    page: Page,
    { imageWidth, imageHeight, captureFullPage }: ExtractInfo,
) {
    try {
        await page.setViewport({ width: imageWidth, height: imageHeight });

        const image = await page.screenshot({
            encoding: "base64",
            fullPage: captureFullPage,
        });

        return image;
    } catch (error) {
        console.log("deu erro", error);
    }
}
