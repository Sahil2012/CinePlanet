"use client";

import { Box, Card, Inset } from "@radix-ui/themes";
import Image from "next/image";

interface MovieCardProps {
    name: string;
    description: string;
    img?: string;
    onclick?: () => void;
}

const MovieCard = ({ name, description, img, onclick }: MovieCardProps) => {
    return (
        <Box className="px-2 h-full">
            <Card size="2" className={onclick? "transform duration-200 w-full cursor-pointer hover:ring ring-neutral-200": "w-full h-full"}  onClick={() => {
                    if (onclick) {
                        onclick()
                    }
                }
            }>
                <Inset clip="padding-box" side="top" pb="current">
                    {img ? <Image
                        src={img}
                        alt={name}
                        style={{
                            display: "block",
                            objectFit: "cover",
                            width: "100%",
                            height: "12rem",
                            backgroundColor: "var(--gray-5)",
                        }}
                    /> :
                        <div className="h-48" style={{ backgroundColor: "var(--gray-5)" }}></div>}
                </Inset>
                <div className="flex flex-col gap-2 p-4">
                    <div className="font-semibold">
                        {name}
                    </div>
                    <div className="text-sm line-clamp-4">
                        {description}
                    </div>
                </div>
            </Card>
        </Box>
    )
}

export default MovieCard;