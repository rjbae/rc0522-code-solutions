SELECT "g"."name" AS "genreName",
       COUNT("f".*)
  FROM "genres" AS "g"
  JOIN "filmGenre" USING ("genreId")
  JOIN "films" AS "f" USING ("filmId")
  JOIN "castMembers" USING ("filmId")
  JOIN "actors" AS "a" USING ("actorId")
  WHERE "a"."firstName" = 'Lisa'
    AND "a"."lastName" = 'Monroe'
GROUP BY "g"."genreId";
