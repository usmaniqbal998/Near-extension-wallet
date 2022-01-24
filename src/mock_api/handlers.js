// src/mocks/handlers.js
import { rest } from 'msw';
export const handlers = [
  // Handles a POST /login request
  rest.post('/registeruser', (req, res, ctx) => {
    const user = req.body;
    localStorage.setItem('user', JSON.stringify(user));
    return res(
      ctx.status(201),
      ctx.json({
        data: {
          user: user,
        },
      })
    );
  }),

  rest.post('/verifyotp', (req, res, ctx) => {
    const otp = req.body;

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          otp: otp,
        },
      })
    );
  }),
  // Handles a GET /user request
  rest.get('/getuser', (req, res, ctx) => {
    const user = JSON.parse(localStorage.getItem('user'));

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          user: user,
        },
      })
    );
  }),
];
