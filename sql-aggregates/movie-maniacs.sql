SELECT "c"."firstName" AS "First Name",
       "c"."lastName" AS "Last Name",
       SUM ("p"."amount") AS "Total Paid"
FROM "customers" AS "c"
JOIN "payments" AS "p" USING ("customerId")
GROUP BY "c"."customerId"
ORDER BY "Total Paid" DESC;
