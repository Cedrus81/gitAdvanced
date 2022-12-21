import { utilService } from '../services/util.service.js'
import md5 from 'md5'

export const imageService = {
  emailToUrl,
}

function emailToUrl(email) {
  let emailToConvert = email || utilService.makeId(15)
  let hash = md5(emailToConvert)
  console.log(`https://avatars.dicebear.com/api/personas/${hash}.svg`)
  return `https://avatars.dicebear.com/api/personas/${hash}.svg`
}
