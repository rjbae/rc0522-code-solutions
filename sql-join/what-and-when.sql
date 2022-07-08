SELECT "f"."releaseYear",
       "g"."name" AS "genre"
FROM "filmGenre"
JOIN "films" AS "f" USING ("filmId")
JOIN "genres" AS "g" USING ("genreId")
WHERE "f"."title" = 'Boogie Amelie';
