
create table User
(
    id int auto_increment primary key,
    username varchar(50) unique not null,
    password varchar(50) not null,
    
);


