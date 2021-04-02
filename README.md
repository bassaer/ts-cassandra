# ts-cassandra

```
cqlsh:mykeyspace> SELECT * FROM users;

 user_id | fname | lname
---------+-------+-------
    1745 |  john | smith
    1744 |  john |   doe
    1746 |  john | smith

(3 rows)
```

```
❯ yarn start
yarn run v1.19.1
$ node dist/index.js
Row { user_id: 1745, fname: 'john', lname: 'smith' }
Row { user_id: 1744, fname: 'john', lname: 'doe' }
Row { user_id: 1746, fname: 'john', lname: 'smith' }
✨  Done in 0.38s.
```
