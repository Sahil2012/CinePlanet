/*
  Warnings:

  - The primary key for the `Screen` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `screenId` on the `Screen` table. All the data in the column will be lost.
  - You are about to drop the column `screenName` on the `Screen` table. All the data in the column will be lost.
  - The primary key for the `Seat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `seatId` on the `Seat` table. All the data in the column will be lost.
  - The `status` column on the `Seat` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Show` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `movieName` on the `Show` table. All the data in the column will be lost.
  - You are about to drop the column `showId` on the `Show` table. All the data in the column will be lost.
  - The primary key for the `Ticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `movieName` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `ticketId` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the `Movies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Screen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketId` to the `Seat` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Seat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `movieId` to the `Show` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movieId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Rating" AS ENUM ('U', 'UA', 'A', 'S');

-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('HORROR', 'ROMANCE', 'ACTION', 'DRAMA', 'SCIFI', 'THRILLER', 'COMEDY', 'DOCUMENTRY', 'ADUVENTURE', 'FANTASY', 'ANIMATION', 'WAR');

-- CreateEnum
CREATE TYPE "SeatType" AS ENUM ('CLUB', 'PRIME', 'PRIMEPLUS', 'ROYALE', 'ROYALERECLINER');

-- CreateEnum
CREATE TYPE "SeatStatus" AS ENUM ('AVAILABLE', 'BOOKED', 'LOCKED');

-- DropForeignKey
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_screenId_fkey";

-- DropForeignKey
ALTER TABLE "Show" DROP CONSTRAINT "Show_movieName_fkey";

-- DropForeignKey
ALTER TABLE "Show" DROP CONSTRAINT "Show_screenId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_movieName_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_showId_fkey";

-- AlterTable
ALTER TABLE "Screen" DROP CONSTRAINT "Screen_pkey",
DROP COLUMN "screenId",
DROP COLUMN "screenName",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Screen_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_pkey",
DROP COLUMN "seatId",
ADD COLUMN     "ticketId" INTEGER NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "SeatType" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "SeatStatus" NOT NULL DEFAULT 'AVAILABLE',
ADD CONSTRAINT "Seat_pkey" PRIMARY KEY ("screenId", "rowNo", "colNo");

-- AlterTable
ALTER TABLE "Show" DROP CONSTRAINT "Show_pkey",
DROP COLUMN "movieName",
DROP COLUMN "showId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "movieId" INTEGER NOT NULL,
ADD CONSTRAINT "Show_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_pkey",
DROP COLUMN "movieName",
DROP COLUMN "ticketId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "movieId" INTEGER NOT NULL,
ADD CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Movies";

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "starring" TEXT,
    "rating" "Rating" NOT NULL,
    "time" INTEGER NOT NULL,
    "genres" "Genre"[],

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Show" ADD CONSTRAINT "Show_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Show" ADD CONSTRAINT "Show_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
