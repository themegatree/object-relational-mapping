CREATE TABLE cats(
  id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  breed VARCHAR(60),
  owner VARCHAR(60)
);

CREATE TABLE owners(
  id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  dogOwner BOOLEAN,
  DofB DATE
);
