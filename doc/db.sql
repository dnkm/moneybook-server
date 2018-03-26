psql -h ec2-23-21-217-27.compute-1.amazonaws.com -U alisqwjatzsswf -d d1req4l4lcdd3u     

password: 84480c5e2cdc1b5bbe8acc59c1351df663581571b4ec8018f37ef64374705636

create table member (
    userid serial,
    email varchar(100),
    password char(60),
    displayname varchar(30),
    regdate timestamp,
    lastdate timestamp,
    primary key(userid)
);

create unique index idx_member_email
on member (email);