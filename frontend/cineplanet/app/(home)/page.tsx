"use client";

import { Badge, Button, Dialog, Inset, Strong, Text } from "@radix-ui/themes";
import MovieCard from "../../_components/movie_card/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Image from "next/image";

type Movie = {
    name: string;
    description: string;
    genres: string[];
    img?: string;
    showtimes: string[];
}

export default function Movies() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentMovie, setCurrentMovie] = useState<Movie>();
    const data = [
        {
            name: "Lorem ipsum odor amet",
            description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Est molestie pretium inceptos in tristique sodales. Dignissim conubia aliquam iaculis mi phasellus; in senectus. Dignissim dolor molestie integer aptent sagittis.",
            genres: ["Romance", "Comedy"],
            showtimes: ["12:00", "3:30", "7:15"]
        },
        {
            name: "Aliquam vel proin",
            description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam efficitur torquent rhoncus fermentum himenaeos neque conubia purus quam. Ridiculus pretium ultricies tincidunt ac integer est? Per rutrum cursus risus ultrices varius, leo non id posuere.",
            genres: ["Action"],
            showtimes: ["12:00", "3:30", "7:15"]
        },
        {
            name: "Metus tincidunt semper",
            description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Id arcu ex erat nunc varius nisi. Cursus molestie tincidunt magnis primis maximus facilisis efficitur ultricies. Orci sodales vivamus proin potenti, morbi in condimentum phasellus.",
            genres: ["Horror", "Suspence"],
            showtimes: ["12:00", "3:30", "7:15"]
        },
        {
            name: "Orci nisi erat",
            description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Donec justo integer tellus in taciti consequat. Fringilla vestibulum purus aenean sagittis congue quam congue.",
            genres: ["Action", "Sci-Fi"],
            showtimes: ["12:00", "3:30", "7:15"]
        },
        {
            name: "Mauris lacus fusce",
            description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Cras facilisi eleifend faucibus eu quis himenaeos ornare. Eu class ligula nibh sollicitudin rutrum quisque sem massa. Bibendum facilisi ultricies tincidunt class tellus praesent congue platea porttitor.",
            genres: ["Drama", "Romance"],
            showtimes: ["12:00", "3:30", "7:15"]
        }
    ]
    const responsive = {
        lg: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 2,
            partialVisibilityGutter: 5
        },
        md: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 2,
            partialVisibilityGutter: 5
        },
        sm: {
            breakpoint: { max: 768, min: 640 },
            items: 2,
            partialVisibilityGutter: 5
        },
        xs: {
            breakpoint: { max: 640, min: 400 },
            items: 2,
            partialVisibilityGutter: 5
        },
        xxs: {
            breakpoint: { max: 400, min: 0 },
            items: 1,
            partialVisibilityGutter: 5
        }
    };

    return (
        <>
            <Text className="flex flex-row w-fit cursor-pointer transform duration-200 gap-2 text-xl px-2 hover:gap-4"><Strong>Now Airing</Strong><Strong>&#11208;</Strong></Text>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                className="py-2"
                partialVisbile={true}
                ssr={true}
            >
                {
                    data.map((movie: Movie) => {
                        return (
                            <MovieCard 
                                key={movie.name} 
                                name={movie.name} 
                                description={movie.description} 
                                onclick={() => {
                                    setCurrentMovie(movie);
                                    setIsDialogOpen(true);
                                }}
                            />
                        )
                    })
                }
            </Carousel>

            <Text className="flex flex-row w-fit cursor-pointer transform duration-200 gap-2 text-xl px-2 hover:gap-4 pt-6"><Strong>Upcoming Movies</Strong><Strong>&#11208;</Strong></Text>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                className="py-2"
                partialVisbile={true}
                ssr={true}
            >
                {
                    data.map((movie: Movie) => {
                        return (
                            <MovieCard 
                                key={movie.name} 
                                name={movie.name} 
                                description={movie.description} 
                                onclick={() => {
                                    setCurrentMovie(movie);
                                    setIsDialogOpen(true);
                                }}
                            />
                        )
                    })
                }
            </Carousel>

            <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <Dialog.Content style={{minHeight: "50vh"}}>
                    <Inset clip="padding-box" side="top" pb="current">
                        {currentMovie?.img ? <Image
                            src={currentMovie?.img ?? ""}
                            alt={currentMovie?.name ?? ""}
                            style={{
                                display: "block",
                                objectFit: "cover",
                                width: "100%",
                                height: "16rem",
                                backgroundColor: "var(--gray-5)",
                            }}
                        /> :
                            <div className="h-64" style={{ backgroundColor: "var(--gray-5)" }}></div>}
                    </Inset>
                    <Dialog.Title>{currentMovie?.name}</Dialog.Title>
                    <Dialog.Description>{currentMovie?.description}</Dialog.Description>
                    <div className="w-full h-full flex flex-row gap-2 py-4">
                        {
                            (currentMovie?.genres ?? []).map((genre: string) => {
                                return (
                                    <Badge key={genre} className="rounded-full p-2">{genre}</Badge>
                                )
                            })
                        }
                    </div>
                    <div className="w-full h-full flex flex-row gap-2 py-4">
                        {
                            (currentMovie?.showtimes ?? []).map((showtime: string) => {
                                return (
                                    <Button key={showtime} className="rounded-full px-4">{showtime}</Button>
                                )
                            })
                        }
                    </div>
                </Dialog.Content>
            </Dialog.Root>
        </>
        
    );
}
