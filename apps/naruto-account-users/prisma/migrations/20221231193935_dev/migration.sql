/*
  Warnings:

  - You are about to drop the column `account_type` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `user_ecom_experience` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[alias_id]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alias_id` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountEcommerceExperience" AS ENUM ('BEGINNER', 'SOME_KNOWLEDGE', 'EXPERT');

-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_user_id_fkey";

-- DropIndex
DROP INDEX "accounts_user_id_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "account_type",
DROP COLUMN "user_ecom_experience",
DROP COLUMN "user_id",
ADD COLUMN     "alias_id" TEXT NOT NULL,
ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL;

-- DropTable
DROP TABLE "addresses";

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "UserEcommerceExperience";

-- CreateTable
CREATE TABLE "account_addresses" (
    "id" TEXT NOT NULL,
    "alias_id" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "account_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_profiles" (
    "id" TEXT NOT NULL,
    "alias_id" TEXT NOT NULL,
    "account_type" "AccountType" NOT NULL,
    "account_ecom_experience" "AccountEcommerceExperience" NOT NULL,
    "account_id" TEXT NOT NULL,
    "account_address_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "account_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_addresses_alias_id_key" ON "account_addresses"("alias_id");

-- CreateIndex
CREATE UNIQUE INDEX "account_addresses_account_id_key" ON "account_addresses"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "account_profiles_alias_id_key" ON "account_profiles"("alias_id");

-- CreateIndex
CREATE UNIQUE INDEX "account_profiles_account_id_key" ON "account_profiles"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "account_profiles_account_address_id_key" ON "account_profiles"("account_address_id");

-- CreateIndex
CREATE UNIQUE INDEX "account_profiles_account_id_account_address_id_key" ON "account_profiles"("account_id", "account_address_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_alias_id_key" ON "accounts"("alias_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_cpf_key" ON "accounts"("cpf");

-- AddForeignKey
ALTER TABLE "account_addresses" ADD CONSTRAINT "account_addresses_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_profiles" ADD CONSTRAINT "account_profiles_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_profiles" ADD CONSTRAINT "account_profiles_account_address_id_fkey" FOREIGN KEY ("account_address_id") REFERENCES "account_addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
