SELECT "a"."line1" AS "address",
       "a"."district",
       "c"."name" AS "city"
  FROM "addresses" AS "a"
  JOIN "cities" AS "c" USING ("cityId");
