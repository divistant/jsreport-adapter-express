/*
  Warnings:

  - You are about to drop the column `createdAt` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `customer` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer" DROP COLUMN "createdAt",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
