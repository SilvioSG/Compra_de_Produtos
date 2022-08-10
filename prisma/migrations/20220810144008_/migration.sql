-- AlterTable
ALTER TABLE "product" ALTER COLUMN "purchase_date" DROP NOT NULL,
ALTER COLUMN "purchase_date" DROP DEFAULT,
ALTER COLUMN "delivery_date" DROP NOT NULL,
ALTER COLUMN "delivery_date" DROP DEFAULT;
