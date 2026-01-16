const corsOptions = {
  origin: (origin, callback) => {
    // const allowedOrigins = ['http://localhost:5173', process.env.CLIENT_URL].filter(Boolean);
    const allowedOrigins = ['http://localhost:5173'];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Set-Cookie'],
  maxAge: 86400, // 24 hours
};

export default corsOptions;
