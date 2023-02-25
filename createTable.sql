CREATE TABLE movies(
    'id' BIGSERIAL PRIMARY KEY,
    'name' VARCHAR(50) UNIQUE NOT NULL,
    'description' VARCHAR,
    'duration' NUMBER NOT NULL,
    'price' NUMBER NOT NULL
)