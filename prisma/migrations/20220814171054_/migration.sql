/*
  Warnings:

  - Made the column `purchase_date` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery_date` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "product" ALTER COLUMN "purchase_date" SET NOT NULL,
ALTER COLUMN "purchase_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "delivery_date" SET NOT NULL,
ALTER COLUMN "delivery_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "paid" DROP NOT NULL;
