SELECT "amount",
       "c"."firstName",
       "c"."lastName"
  FROM "payments"
  JOIN "customers" AS "c" USING ("customerId")
ORDER BY "amount" DESC
LIMIT 10;
