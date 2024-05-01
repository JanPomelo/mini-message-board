import express from 'express';

interface Message {
  text: string;
  user: string;
  date: Date;
};

const messages: Message[] = [
  {
    text: "Hi there!",
    user: "Amando",
    date: new Date()
  },
  {
    text: "Hello, World!",
    user: "Charles",
    date: new Date()
  }
];

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('index', { title: "Mini Message Board", messages: messages});
});

router.get('/new', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('form');
});

router.post('/new', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { user, text } = req.body;
  messages.push({ user: user, text: text, date: new Date() });
  res.redirect('/');
});

export { router as indexRouter }

