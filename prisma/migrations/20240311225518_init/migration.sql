/*
  Warnings:

  - You are about to drop the column `birthday` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Animal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identificator]` on the table `Animal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identificator` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Animal_number_key";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "birthday",
DROP COLUMN "number",
ADD COLUMN     "identificator" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Animal_identificator_key" ON "Animal"("identificator");
