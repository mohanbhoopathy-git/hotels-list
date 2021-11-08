import { getSortedList } from './utils';

const users = [
  { 'user': 'fred', 'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred', 'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

it('getSortedList() - should return array in ascending order', () => {
  const expectedUsers = [
    { 'user': 'barney', 'age': 34 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'fred', 'age': 48 }
  ];
  expect(getSortedList(users, 'age')).toEqual(expectedUsers);
});

it('getSortedList() - should return array without sorting if no attributes passed', () => {
  expect(getSortedList(users, '')).toEqual(users);
});

it('getSortedList() - should return array without sorting if passed attributes not matching', () => {
  expect(getSortedList(users, 'a.b.c')).toEqual(users);
});