/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `articles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "educationId" UUID;

-- CreateTable
CREATE TABLE "educations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "degree" TEXT,
    "school" TEXT NOT NULL,
    "location" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "educations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_experiences" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "location" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "url" TEXT,
    "logo" TEXT,
    "description" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "work_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WorkExperienceSkills" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_EducationSkills" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_WorkExperienceSkills_AB_unique" ON "_WorkExperienceSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_WorkExperienceSkills_B_index" ON "_WorkExperienceSkills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EducationSkills_AB_unique" ON "_EducationSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_EducationSkills_B_index" ON "_EducationSkills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "articles_slug_key" ON "articles"("slug");

-- AddForeignKey
ALTER TABLE "_WorkExperienceSkills" ADD CONSTRAINT "_WorkExperienceSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WorkExperienceSkills" ADD CONSTRAINT "_WorkExperienceSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "work_experiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EducationSkills" ADD CONSTRAINT "_EducationSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "educations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EducationSkills" ADD CONSTRAINT "_EducationSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
