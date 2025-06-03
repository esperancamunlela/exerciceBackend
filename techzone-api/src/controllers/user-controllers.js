import { users } from "../models/user-model.js";

export const getAllUsers = (req, res) => {
  res.status(200).json({ message: "ok", users });
};

export const getUser = (req, res) => {
  const id = req.params.id;

  const existingUser = users.find((user) => user.id === Number(id));

  if (!existingUser) {
    res.json({ message: "Usuário não encontrado" });
  }

  res.status(200).json({ message: "ok", existingUser });
};

export const createUser = (req, res) => {
  const body = req.body;
  const { name, email, password } = body;

  const usersLength = users.length;

  const user = {
    id: usersLength + 1,
    name,
    email,
    password,
  };

  users.push(user);

  res.status(201).json({ message: "Usuário criado com sucesso", user });
};

export const deleteUser = (req, res) => {
  const id = req.params.id
  const deleteUser = users.findIndex(
    (user) => Number(user.id) === Number(id)
  )

  if (deleteUser === -1) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }

  users.splice(deleteUser, 1)
  res.status(200).json({ message: 'Usuário eliminado com sucesso' })
}

export const updateUser = (req, res) => {
  const id = req.parms.id
  const body= req.body
  const { name, email, password } =body
  const updateUser = users.findIndex(
    (user) => Number(user.id) === Number(id)
  )

  if (updateUser === -1) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }

  users[updateUser].name = name
  users[updateUser].email = email
  users[updateUser].password = password


  res
    .status(200)
    .json({ message: 'Curso atualizado com sucesso', users: users[updateUser] });
}