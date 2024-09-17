-- CreateIndex
CREATE INDEX "projects_status_idx" ON "projects"("status");

-- CreateIndex
CREATE INDEX "projects_category_idx" ON "projects"("category");

-- CreateIndex
CREATE INDEX "projects_status_category_idx" ON "projects"("status", "category");

-- CreateIndex
CREATE INDEX "projects_tags_title_idx" ON "projects"("tags", "title");

-- CreateIndex
CREATE INDEX "projects_status_category_tags_title_idx" ON "projects"("status", "category", "tags", "title");
