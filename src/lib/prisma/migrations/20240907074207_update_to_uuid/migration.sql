/*
  Warnings:

  - The primary key for the `articles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `articles_skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `projects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `projects_articles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `projects_skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `schools` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `schools_skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `work_experiences` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `work_experiences_skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `A` on the `_articles_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_articles_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_projects_articles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_projects_articles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_projects_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_projects_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_schools_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_schools_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_work_experiences_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_work_experiences_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `articles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `article_id` on the `articles_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `skill_id` on the `articles_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `projects` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `project_id` on the `projects_articles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `article_id` on the `projects_articles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `project_id` on the `projects_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `skill_id` on the `projects_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `schools` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `school_id` on the `schools_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `skill_id` on the `schools_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `work_experiences` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `work_experience_id` on the `work_experiences_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `skill_id` on the `work_experiences_skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_articles_skills" DROP CONSTRAINT "_articles_skills_A_fkey";

-- DropForeignKey
ALTER TABLE "_articles_skills" DROP CONSTRAINT "_articles_skills_B_fkey";

-- DropForeignKey
ALTER TABLE "_projects_articles" DROP CONSTRAINT "_projects_articles_A_fkey";

-- DropForeignKey
ALTER TABLE "_projects_articles" DROP CONSTRAINT "_projects_articles_B_fkey";

-- DropForeignKey
ALTER TABLE "_projects_skills" DROP CONSTRAINT "_projects_skills_A_fkey";

-- DropForeignKey
ALTER TABLE "_projects_skills" DROP CONSTRAINT "_projects_skills_B_fkey";

-- DropForeignKey
ALTER TABLE "_schools_skills" DROP CONSTRAINT "_schools_skills_A_fkey";

-- DropForeignKey
ALTER TABLE "_schools_skills" DROP CONSTRAINT "_schools_skills_B_fkey";

-- DropForeignKey
ALTER TABLE "_work_experiences_skills" DROP CONSTRAINT "_work_experiences_skills_A_fkey";

-- DropForeignKey
ALTER TABLE "_work_experiences_skills" DROP CONSTRAINT "_work_experiences_skills_B_fkey";

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
ALTER TABLE "_articles_skills" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_projects_articles" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_projects_skills" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_schools_skills" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_work_experiences_skills" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "articles" DROP CONSTRAINT "articles_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "articles_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "articles_skills" DROP CONSTRAINT "articles_skills_pkey",
DROP COLUMN "article_id",
ADD COLUMN     "article_id" UUID NOT NULL,
DROP COLUMN "skill_id",
ADD COLUMN     "skill_id" UUID NOT NULL,
ADD CONSTRAINT "articles_skills_pkey" PRIMARY KEY ("article_id", "skill_id");

-- AlterTable
ALTER TABLE "projects" DROP CONSTRAINT "projects_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "projects_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "projects_articles" DROP CONSTRAINT "projects_articles_pkey",
DROP COLUMN "project_id",
ADD COLUMN     "project_id" UUID NOT NULL,
DROP COLUMN "article_id",
ADD COLUMN     "article_id" UUID NOT NULL,
ADD CONSTRAINT "projects_articles_pkey" PRIMARY KEY ("project_id", "article_id");

-- AlterTable
ALTER TABLE "projects_skills" DROP CONSTRAINT "projects_skills_pkey",
DROP COLUMN "project_id",
ADD COLUMN     "project_id" UUID NOT NULL,
DROP COLUMN "skill_id",
ADD COLUMN     "skill_id" UUID NOT NULL,
ADD CONSTRAINT "projects_skills_pkey" PRIMARY KEY ("project_id", "skill_id");

-- AlterTable
ALTER TABLE "schools" DROP CONSTRAINT "schools_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "schools_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "schools_skills" DROP CONSTRAINT "schools_skills_pkey",
DROP COLUMN "school_id",
ADD COLUMN     "school_id" UUID NOT NULL,
DROP COLUMN "skill_id",
ADD COLUMN     "skill_id" UUID NOT NULL,
ADD CONSTRAINT "schools_skills_pkey" PRIMARY KEY ("school_id", "skill_id");

-- AlterTable
ALTER TABLE "skills" DROP CONSTRAINT "skills_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "skills_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "work_experiences" DROP CONSTRAINT "work_experiences_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "work_experiences_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "work_experiences_skills" DROP CONSTRAINT "work_experiences_skills_pkey",
DROP COLUMN "work_experience_id",
ADD COLUMN     "work_experience_id" UUID NOT NULL,
DROP COLUMN "skill_id",
ADD COLUMN     "skill_id" UUID NOT NULL,
ADD CONSTRAINT "work_experiences_skills_pkey" PRIMARY KEY ("work_experience_id", "skill_id");

-- CreateIndex
CREATE UNIQUE INDEX "_articles_skills_AB_unique" ON "_articles_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_articles_skills_B_index" ON "_articles_skills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_projects_articles_AB_unique" ON "_projects_articles"("A", "B");

-- CreateIndex
CREATE INDEX "_projects_articles_B_index" ON "_projects_articles"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_projects_skills_AB_unique" ON "_projects_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_projects_skills_B_index" ON "_projects_skills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_schools_skills_AB_unique" ON "_schools_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_schools_skills_B_index" ON "_schools_skills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_work_experiences_skills_AB_unique" ON "_work_experiences_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_work_experiences_skills_B_index" ON "_work_experiences_skills"("B");

-- AddForeignKey
ALTER TABLE "projects_skills" ADD CONSTRAINT "projects_skills_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_skills" ADD CONSTRAINT "projects_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_experiences_skills" ADD CONSTRAINT "work_experiences_skills_work_experience_id_fkey" FOREIGN KEY ("work_experience_id") REFERENCES "work_experiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_experiences_skills" ADD CONSTRAINT "work_experiences_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles_skills" ADD CONSTRAINT "articles_skills_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles_skills" ADD CONSTRAINT "articles_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schools_skills" ADD CONSTRAINT "schools_skills_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schools_skills" ADD CONSTRAINT "schools_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_articles" ADD CONSTRAINT "projects_articles_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_articles" ADD CONSTRAINT "projects_articles_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_work_experiences_skills" ADD CONSTRAINT "_work_experiences_skills_A_fkey" FOREIGN KEY ("A") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_work_experiences_skills" ADD CONSTRAINT "_work_experiences_skills_B_fkey" FOREIGN KEY ("B") REFERENCES "work_experiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_projects_skills" ADD CONSTRAINT "_projects_skills_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_projects_skills" ADD CONSTRAINT "_projects_skills_B_fkey" FOREIGN KEY ("B") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_schools_skills" ADD CONSTRAINT "_schools_skills_A_fkey" FOREIGN KEY ("A") REFERENCES "schools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_schools_skills" ADD CONSTRAINT "_schools_skills_B_fkey" FOREIGN KEY ("B") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_articles_skills" ADD CONSTRAINT "_articles_skills_A_fkey" FOREIGN KEY ("A") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_articles_skills" ADD CONSTRAINT "_articles_skills_B_fkey" FOREIGN KEY ("B") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_projects_articles" ADD CONSTRAINT "_projects_articles_A_fkey" FOREIGN KEY ("A") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_projects_articles" ADD CONSTRAINT "_projects_articles_B_fkey" FOREIGN KEY ("B") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
