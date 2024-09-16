-- CreateTable
CREATE TABLE "projects" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "demoUrl" TEXT,
    "frontendRepo" TEXT,
    "backendRepo" TEXT,
    "codeRepo" TEXT,
    "videoDemo" TEXT,
    "launchDate" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "tags" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectSkills" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectSkills_AB_unique" ON "_ProjectSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectSkills_B_index" ON "_ProjectSkills"("B");

-- AddForeignKey
ALTER TABLE "_ProjectSkills" ADD CONSTRAINT "_ProjectSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectSkills" ADD CONSTRAINT "_ProjectSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
