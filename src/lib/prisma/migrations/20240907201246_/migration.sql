/*
  Warnings:

  - You are about to drop the column `demoURL` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `schools` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `schools` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `work_experiences` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `work_experiences` table. All the data in the column will be lost.
  - You are about to drop the `articles_skills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projects_articles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projects_skills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `schools_skills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `work_experiences_skills` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `startDate` to the `schools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `work_experiences` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "articles_skills" DROP CONSTRAINT "articles_skills_article_id_fkey";

-- DropForeignKey
ALTER TABLE "articles_skills" DROP CONSTRAINT "articles_skills_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "projects_articles" DROP CONSTRAINT "projects_articles_article_id_fkey";

-- DropForeignKey
ALTER TABLE "projects_articles" DROP CONSTRAINT "projects_articles_project_id_fkey";

-- DropForeignKey
ALTER TABLE "projects_skills" DROP CONSTRAINT "projects_skills_project_id_fkey";

-- DropForeignKey
ALTER TABLE "projects_skills" DROP CONSTRAINT "projects_skills_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "schools_skills" DROP CONSTRAINT "schools_skills_school_id_fkey";

-- DropForeignKey
ALTER TABLE "schools_skills" DROP CONSTRAINT "schools_skills_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "work_experiences_skills" DROP CONSTRAINT "work_experiences_skills_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "work_experiences_skills" DROP CONSTRAINT "work_experiences_skills_work_experience_id_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "demoURL",
ADD COLUMN     "demoUrl" TEXT;

-- AlterTable
ALTER TABLE "schools" DROP COLUMN "end_date",
DROP COLUMN "start_date",
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "work_experiences" DROP COLUMN "end_date",
DROP COLUMN "start_date",
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "articles_skills";

-- DropTable
DROP TABLE "projects_articles";

-- DropTable
DROP TABLE "projects_skills";

-- DropTable
DROP TABLE "schools_skills";

-- DropTable
DROP TABLE "work_experiences_skills";
