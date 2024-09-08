-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "start_year" BIGINT NOT NULL,
    "documentation" TEXT,
    "tags" TEXT[],

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "backendRepo" TEXT,
    "frontendRepo" TEXT,
    "codeRepo" TEXT,
    "demoURL" TEXT,
    "launchDate" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_experiences" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "company" TEXT NOT NULL,
    "website" TEXT,
    "role" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "logo" TEXT,
    "description" TEXT[],

    CONSTRAINT "work_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schools" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "school" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "url" TEXT,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "publishedDate" TIMESTAMP(3) NOT NULL,
    "tags" TEXT[],
    "url" TEXT,
    "hashnode" TEXT,
    "medium" TEXT,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects_skills" (
    "project_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,

    CONSTRAINT "projects_skills_pkey" PRIMARY KEY ("project_id","skill_id")
);

-- CreateTable
CREATE TABLE "work_experiences_skills" (
    "work_experience_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,

    CONSTRAINT "work_experiences_skills_pkey" PRIMARY KEY ("work_experience_id","skill_id")
);

-- CreateTable
CREATE TABLE "articles_skills" (
    "article_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,

    CONSTRAINT "articles_skills_pkey" PRIMARY KEY ("article_id","skill_id")
);

-- CreateTable
CREATE TABLE "schools_skills" (
    "school_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,

    CONSTRAINT "schools_skills_pkey" PRIMARY KEY ("school_id","skill_id")
);

-- CreateTable
CREATE TABLE "projects_articles" (
    "project_id" TEXT NOT NULL,
    "article_id" TEXT NOT NULL,

    CONSTRAINT "projects_articles_pkey" PRIMARY KEY ("project_id","article_id")
);

-- CreateTable
CREATE TABLE "_work_experiences_skills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_projects_skills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_schools_skills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_articles_skills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_projects_articles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_work_experiences_skills_AB_unique" ON "_work_experiences_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_work_experiences_skills_B_index" ON "_work_experiences_skills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_projects_skills_AB_unique" ON "_projects_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_projects_skills_B_index" ON "_projects_skills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_schools_skills_AB_unique" ON "_schools_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_schools_skills_B_index" ON "_schools_skills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_articles_skills_AB_unique" ON "_articles_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_articles_skills_B_index" ON "_articles_skills"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_projects_articles_AB_unique" ON "_projects_articles"("A", "B");

-- CreateIndex
CREATE INDEX "_projects_articles_B_index" ON "_projects_articles"("B");

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
