-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "delete_at" TIMESTAMP(3),
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "delete_at" TIMESTAMP(3),
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;
