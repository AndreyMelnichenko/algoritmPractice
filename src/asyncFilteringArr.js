const users = [
  { name: 'anna', role: 'Admin' },
  { name: 'Ivan', role: 'User' },
  { name: 'Oleh', role: 'User' },
  { name: 'Ira', role: 'Admin' },
];

async function filterByRoleAsync(users, role) {
  const results = await Promise.all(
    users.map(async (user) => {
      return await (user.role === role ? user : null);
    }),
  );

  return results.filter(Boolean);
}

console.log(await filterByRoleAsync(users, 'Admin'));
