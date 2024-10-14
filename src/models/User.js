import db from '../config/database.js';
import bcrypt from 'bcryptjs';

export const createUser = async (userData) => {
  const { username, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await db.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword]
  );
  return { id: result.insertId, username, email };
};

export const getUserByEmail = async (email) => {
  const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return user;
};

export const getUserById = async (id) => {
  const [user] = await db.query('SELECT id, username, email FROM users WHERE id = ?', [id]);
  return user;
};

export const getAllUsers = async () => {
  return await db.query('SELECT id, username, email FROM users');
};

export const updateUser = async (id, updates) => {
  const { username, email } = updates;
  await db.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id]);
  return getUserById(id);
};

export const deleteUser = async (id) => {
  await db.query('DELETE FROM users WHERE id = ?', [id]);
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};