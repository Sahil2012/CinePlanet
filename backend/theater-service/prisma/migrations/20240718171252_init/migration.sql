/*
  Warnings:

  - You are about to drop the column `ticketId` on the `Seat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_ticketId_fkey";

-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "ticketId";
