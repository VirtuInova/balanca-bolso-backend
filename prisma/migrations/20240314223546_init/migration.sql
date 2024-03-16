/*
  Warnings:

  - Changed the type of `imagem` on the `Animal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "imagem",
ADD COLUMN     "imagem" BYTEA NOT NULL;
