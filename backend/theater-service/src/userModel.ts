import bcrypt from 'bcrypt';

interface User {
  id: number;
  username: string;
  password: string;
}

// dummy inmemory admin users
const users: User[] = [];

// function to find a user by username
export const findUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};

// function to add a new user
export const addUser = async (username: string, password: string): Promise<User> => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);
  return newUser;
};
