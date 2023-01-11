/*
  Warnings:

  - Added the required column `role` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountRole" AS ENUM ('ADMIN', 'DEFAULT_USER');

-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "role" "AccountRole" NOT NULL;
