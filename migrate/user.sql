
create table User
(
    id int auto_increment primary key,
    username varchar(50) unique not null,
    password varchar(50) not null,
    
);

alter table Employee add user_id int, add FOREIGN KEY (user_id) REFERENCES User(id);
alter table Patient add user_id int, add FOREIGN KEY (user_id) REFERENCES User(id);
