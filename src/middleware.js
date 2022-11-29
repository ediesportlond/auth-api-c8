import jwt from 'jsonwebtoken'
import {secretKey} from './secrets.js'

export async function isUserReallyUser(req, res, next){

  const token = req.headers.authorization
  const decodedToken = jwt.verify(token, secretKey)
  const { uid } = req.params // profile they want to update
  if(uid !== decodedToken.uid) {
    res.status(401).send({ message: 'Invalid token ID' })
    return
  }

  next()
  
}