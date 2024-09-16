/*
  Warnings:

  - Added the required column `sizes` to the `assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `srcSet` to the `assets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "assets" ADD COLUMN     "sizes" TEXT NOT NULL,
ADD COLUMN     "srcSet" TEXT NOT NULL;
