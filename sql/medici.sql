CREATE TABLE transactions (
    id int unsigned not null auto_increment PRIMARY KEY,
    amount double signed not null,
    description text not null,
    category text not null
);
