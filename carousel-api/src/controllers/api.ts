"use strict";

import { Response, Request } from "express";

const data = {
    slides: [
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
        {
            image: "https://picsum.photos/1200/900",
            title: "Strong mask",
            subTitle: "Secondary text"
        },
    ]
};

export const getApi = (req: Request, res: Response) => {
    const count = (req.query.slides && Number(req.query.slides) < 10) 
                ? Number(req.query.slides) : 10;

    const result = { slides: data.slides.slice(0,count) };
    res.json(result);
};

