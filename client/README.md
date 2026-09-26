Medical Care Frontend Next App

- Initiate Next.js Application 
- Cleanup template code
- Create Structure of application
- Setup Routes
- Also Keep Public, Private and 404 Pages in Account

app/
├── (public)/                           -> route group public its not visible in URL
│   ├── layout.js
│   ├── login/
│   │   └── page.js                     -> /login
│   ├── register/
│   │   └── page.js                     -> /register
│   └── test/
│       └── page.js                     -> /test
│
├── dash/
│   ├── layout.js
│   ├── patient/
│   │   ├── page.js                 -> /dash/patient
│   │   └── profile/
│   │       └── page.js             -> /dash/patient/profile
│   ├── doctor/
│   │   ├── page.js                 -> /dash/doctor
│   │   └── profile/
│   │       └── page.js             -> /dash/doctor/profile
│   └── admin/
│       ├── page.js                 -> /dash/admin
│       └── profile/
│           └── page.js             -> /dash/admin/profile
│
├── layout.js
├── page.js                         -> /
└── not-found.js                    -> 404