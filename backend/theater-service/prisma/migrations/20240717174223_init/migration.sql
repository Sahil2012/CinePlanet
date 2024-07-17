/*
  Warnings:

  - You are about to drop the `_SeatToShow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_SeatToShow" DROP CONSTRAINT "_SeatToShow_A_fkey";

-- DropForeignKey
ALTER TABLE "_SeatToShow" DROP CONSTRAINT "_SeatToShow_B_fkey";

-- DropTable
DROP TABLE "_SeatToShow";
