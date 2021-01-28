import db from '../../db.json';

export default function (request, response) {
  return response.json(db);
}
