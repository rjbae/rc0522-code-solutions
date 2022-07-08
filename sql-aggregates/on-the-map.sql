SELECT "co"."name" AS "countryName",
      COUNT("cities".*) AS "totalCities"
FROM "countries" AS "co"
JOIN "cities" USING ("countryId")
GROUP BY "co"."countryId";
