-- CreateTable
CREATE TABLE "Peso" (
    "id" UUID NOT NULL,
    "number" INTEGER NOT NULL,
    "animalId" UUID NOT NULL,

    CONSTRAINT "Peso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Peso_id_key" ON "Peso"("id");

-- AddForeignKey
ALTER TABLE "Peso" ADD CONSTRAINT "Peso_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
