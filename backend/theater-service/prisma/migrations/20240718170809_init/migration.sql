-- DropForeignKey
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_ticketId_fkey";

-- AlterTable
ALTER TABLE "Seat" ALTER COLUMN "ticketId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SeatsOnShows" ADD COLUMN     "ticketId" INTEGER;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeatsOnShows" ADD CONSTRAINT "SeatsOnShows_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
