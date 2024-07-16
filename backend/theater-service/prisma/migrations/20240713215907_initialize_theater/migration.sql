-- CreateTable
CREATE TABLE "Movies" (
    "name" TEXT NOT NULL,
    "description" TEXT,
    "starring" TEXT,
    "rating" INTEGER,
    "time" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Seat" (
    "seatId" SERIAL NOT NULL,
    "screenId" INTEGER NOT NULL,
    "rowNo" INTEGER NOT NULL,
    "colNo" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'avaialable',

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("seatId")
);

-- CreateTable
CREATE TABLE "Screen" (
    "screenId" INTEGER NOT NULL,
    "screenName" TEXT NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("screenId")
);

-- CreateTable
CREATE TABLE "Show" (
    "showId" SERIAL NOT NULL,
    "movieName" TEXT NOT NULL,
    "screenId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("showId")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "ticketId" INTEGER NOT NULL,
    "movieName" TEXT NOT NULL,
    "showId" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("ticketId")
);

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("screenId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Show" ADD CONSTRAINT "Show_movieName_fkey" FOREIGN KEY ("movieName") REFERENCES "Movies"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Show" ADD CONSTRAINT "Show_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("screenId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_movieName_fkey" FOREIGN KEY ("movieName") REFERENCES "Movies"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("showId") ON DELETE RESTRICT ON UPDATE CASCADE;
