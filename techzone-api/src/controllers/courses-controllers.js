import { coursesData } from '../models/courses-model.js'

export const getAllCursos = (req, res) => {
  res.status(200).json(coursesData)
}

export const getCurso = (req, res) => {
  const id = req.params.id
  const existCurso = coursesData.find(
    (curso) => String(curso.id) === String(id)
  )

  if (!existCurso) {
    return res.status(404).json({ message: 'Curso não encontrado' })
  }

  res.status(200).json({ message: 'ok', existCurso })
}

export const createCourse = (req, res) => {
  const body = req.body
  const { title, description, durationInHours, level, language, isFree } = body

  const novoCurso = {
    id: (coursesData.length + 1).toString(),
    title,
    description,
    durationInHours,
    level,
    language,
    isFree,
  }

  coursesData.push(novoCurso)

  res.status(201).json({ message: 'O Curso criado com sucesso', novoCurso })
}

export const deleteCourse = (req, res) => {
  const id = req.params.id
  const deleteCurso = coursesData.findIndex(
    (curso) => String(curso.id) === String(id)
  )

  if (deleteCurso === -1) {
    return res.status(404).json({ message: 'Curso não encontrado' })
  }

  coursesData.splice(deleteCurso, 1)
  res.status(200).json({ message: 'Curso eliminado com sucesso' })
}

export const updateCourse = (req, res) => {
  const id = req.parms.id
const body = req.body

  const { title, description, durationInHours, level, language, isFree } =body
  const updateCurso = coursesData.findIndex(
    (curso) => String(curso.id) === String(id)
  )

  if (updateCurso === -1) {
    return res.status(404).json({ message: 'curso não encontrado' })
  }
  let updateCursoData = {
    id: (coursesData.length + 1).toString(),
    title,
    description,
    durationInHours,
    level,
    language,
    isFree,
  }

  coursesData[updateCurso] = updateCursoData

  res
    .status(200)
    .json({ message: 'Curso atualizado com sucesso', updateCursoData })
}
