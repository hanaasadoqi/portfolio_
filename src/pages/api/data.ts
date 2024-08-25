import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file } = req.query

  if (!file || typeof file !== 'string') {
    return res
      .status(400)
      .json({ error: 'File query parameter is required and must be a string' })
  }

  try {
    const filePath = path.join(process.cwd(), `src/data/${file}`)
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(jsonData)
    res.status(200).json(data)
  } catch (error) {
    console.error('Error reading file:', error)
    res.status(500).json({ error: 'Failed to read file' })
  }
}
