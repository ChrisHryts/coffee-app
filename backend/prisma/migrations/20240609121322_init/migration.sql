-- CreateTable
CREATE TABLE IF NOT EXISTS "Transaction" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

INSERT INTO "Transaction" ("id", "date", "amount", "category", "type")
SELECT * FROM (VALUES
  (6, TIMESTAMP '2024-04-02 12:00:00', 62.7, 'cake', 'chocolate'),
  (5, TIMESTAMP '2024-04-02 12:00:00', 30.5, 'cake', 'macaroni'),
  (2, TIMESTAMP '2024-06-10 12:00:00', 80, 'coffee', 'latte'),
  (1, TIMESTAMP '2024-06-09 12:00:00', 41, 'coffee', 'americano'),
  (3, TIMESTAMP '2024-06-09 12:00:00', 55, 'coffee', 'flat white')

) AS data (id, date, amount, category, type)
WHERE NOT EXISTS (
  SELECT 1 FROM "Transaction"
  WHERE "id" = data.id
);