-- Write a SQL query to get the second highest salary from the Employee table.

-- +----+--------+
-- | Id | Salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+
-- For example, given the above Employee table, the query should
-- return 200
-- as the second highest salary.
-- If there is no second highest salary, then the query should
-- return null.

-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | 200                 |
-- +---------------------+

SELECT
    MAX(Salary) as SecondHighestSalary
FROM
    Employee
WHERE
    Salary NOT IN (
        SELECT
            MAX(Salary)
        FROM
            Employee
    )


-- input: {"headers": {"Employee": ["Id", "Salary"]}, "rows": {"Employee": [[1, 100], [2, 200], [3, 300]]}}
-- output: {"headers":["SecondHighestSalary"],"values":[[200]]}