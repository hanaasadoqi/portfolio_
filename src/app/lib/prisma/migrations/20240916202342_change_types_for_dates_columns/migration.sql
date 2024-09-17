-- AlterTable
ALTER TABLE "articles" ALTER COLUMN "publishedDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "educations" ALTER COLUMN "startDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "launchDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "work_experiences" ALTER COLUMN "startDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TEXT;
