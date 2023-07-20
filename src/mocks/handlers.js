import { rest } from 'msw'
import Data from './data'

function getData(req, res, ctx) {
  console.log("handler", req)
  return res(
    ctx.status(200),
    ctx.json(Data.getData(req))
  );
}

export const handlers = [
  rest.post('http://localhost:9000/api/data', getData)
]
