-- CreateTable
CREATE TABLE "fullStack" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "main" VARCHAR(255) NOT NULL,
    "currentEnrollment" BOOLEAN NOT NULL DEFAULT false,
    "azureCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "fullStack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fullStack_name_key" ON "fullStack"("name");
