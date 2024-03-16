/*
  Warnings:

  - Added the required column `category` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animal" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "imagem" TEXT NOT NULL;
