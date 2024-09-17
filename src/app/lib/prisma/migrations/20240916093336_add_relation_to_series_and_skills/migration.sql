-- CreateTable
CREATE TABLE "_SeriesSkills" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SeriesSkills_AB_unique" ON "_SeriesSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_SeriesSkills_B_index" ON "_SeriesSkills"("B");

-- AddForeignKey
ALTER TABLE "_SeriesSkills" ADD CONSTRAINT "_SeriesSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SeriesSkills" ADD CONSTRAINT "_SeriesSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
