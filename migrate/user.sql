
create table User
(
    id int auto_increment primary key,
    username varchar(50) unique not null,
    password varchar(50) not null,
    
);

alter table Employee add user_id int, add FOREIGN KEY (user_id) REFERENCES User(id);
alter table Patient add user_id int, add FOREIGN KEY (user_id) REFERENCES User(id);

use hospital;
insert into User values (null, 'doctor_hien','123123'),(null, 'patient_phuc', '123123'),(null, 'manager_tri', '123123');

update Employee set user_id=1 where ssn='DOC000001' ;
update Employee set user_id=2 where ssn='MAN000001' ;
update Patient set user_id=3 where ssn='100000001' ;
