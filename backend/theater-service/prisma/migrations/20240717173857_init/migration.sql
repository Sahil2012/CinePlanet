/*
  Warnings:

  - The primary key for the `Seat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `status` on the `Seat` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Screen` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[screenId,rowNo,colNo]` on the table `Seat` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_pkey",
DROP COLUMN "status",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Seat_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "SeatsOnShows" (
    "showId" INTEGER NOT NULL,
    "seatId" INTEGER NOT NULL,
    "status" "SeatStatus" NOT NULL,

    CONSTRAINT "SeatsOnShows_pkey" PRIMARY KEY ("showId","seatId")
);

-- CreateTable
CREATE TABLE "_SeatToShow" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SeatToShow_AB_unique" ON "_SeatToShow"("A", "B");

-- CreateIndex
CREATE INDEX "_SeatToShow_B_index" ON "_SeatToShow"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Screen_name_key" ON "Screen"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Seat_screenId_rowNo_colNo_key" ON "Seat"("screenId", "rowNo", "colNo");

-- AddForeignKey
ALTER TABLE "SeatsOnShows" ADD CONSTRAINT "SeatsOnShows_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeatsOnShows" ADD CONSTRAINT "SeatsOnShows_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "Seat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SeatToShow" ADD CONSTRAINT "_SeatToShow_A_fkey" FOREIGN KEY ("A") REFERENCES "Seat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SeatToShow" ADD CONSTRAINT "_SeatToShow_B_fkey" FOREIGN KEY ("B") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;
