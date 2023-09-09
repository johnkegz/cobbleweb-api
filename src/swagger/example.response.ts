export const regitstrationSuccess = {
  status: 201,
  description: 'Login end point returns a JWT token to use for authentication.',
  schema: {
    type: 'object',
    example: {
      firstName: 'kalyango',
      lastName: 'John',
      email: 'test@gmail.com',
      password: '$2b$10$mJy77Mx/0LkrMO.5vzrDT.RSAd/9KAid8BbEek2G6mUprqPjmzKO.',
      role: 'admin',
      FullName: 'kalyango John',
      avatar:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      photos: [
        {
          name: 'ava.png',
          url: 'https://cw-recruitment-tests.s3.eu-west-1.amazonaws.com/photos/ava.png',
          user: {
            firstName: 'kalyango',
            lastName: 'John',
            email: 'test@gmail.com',
            password:
              '$2b$10$mJy77Mx/0LkrMO.5vzrDT.RSAd/9KAid8BbEek2G6mUprqPjmzKO.',
            role: 'admin',
            id: 11,
            active: true,
            createdAt: '2023-09-09T02:55:09.081Z',
            updatedAt: '2023-09-09T02:55:09.081Z',
          },
          id: 37,
          createdAt: '2023-09-09T02:55:11.299Z',
          updatedAt: '2023-09-09T02:55:11.299Z',
        },
        {
          name: 'avatar.webp',
          url: 'https://cw-recruitment-tests.s3.eu-west-1.amazonaws.com/photos/avatar.webp',
          user: {
            firstName: 'kalyango',
            lastName: 'John',
            email: 'test@gmail.com',
            password:
              '$2b$10$mJy77Mx/0LkrMO.5vzrDT.RSAd/9KAid8BbEek2G6mUprqPjmzKO.',
            role: 'admin',
            id: 11,
            active: true,
            createdAt: '2023-09-09T02:55:09.081Z',
            updatedAt: '2023-09-09T02:55:09.081Z',
          },
          id: 39,
          createdAt: '2023-09-09T02:55:11.315Z',
          updatedAt: '2023-09-09T02:55:11.315Z',
        },
        {
          name: 'avatar2.png',
          url: 'https://cw-recruitment-tests.s3.eu-west-1.amazonaws.com/photos/avatar2.png',
          user: {
            firstName: 'kalyango',
            lastName: 'John',
            email: 'test@gmail.com',
            password:
              '$2b$10$mJy77Mx/0LkrMO.5vzrDT.RSAd/9KAid8BbEek2G6mUprqPjmzKO.',
            role: 'admin',
            id: 11,
            active: true,
            createdAt: '2023-09-09T02:55:09.081Z',
            updatedAt: '2023-09-09T02:55:09.081Z',
          },
          id: 40,
          createdAt: '2023-09-09T02:55:11.325Z',
          updatedAt: '2023-09-09T02:55:11.325Z',
        },
        {
          name: 'WhatsApp Image 2023-08-03 at 14.24.14.jpeg',
          url: 'https://cw-recruitment-tests.s3.eu-west-1.amazonaws.com/photos/WhatsApp%20Image%202023-08-03%20at%2014.24.14.jpeg',
          user: {
            firstName: 'kalyango',
            lastName: 'John',
            email: 'test@gmail.com',
            password:
              '$2b$10$mJy77Mx/0LkrMO.5vzrDT.RSAd/9KAid8BbEek2G6mUprqPjmzKO.',
            role: 'admin',
            id: 11,
            active: true,
            createdAt: '2023-09-09T02:55:09.081Z',
            updatedAt: '2023-09-09T02:55:09.081Z',
          },
          id: 38,
          createdAt: '2023-09-09T02:55:11.314Z',
          updatedAt: '2023-09-09T02:55:11.314Z',
        },
      ],
      id: 10,
      active: true,
      createdAt: '2023-09-09T02:55:11.344Z',
      updatedAt: '2023-09-09T02:55:11.344Z',
    },
  },
};

export const badRequestRegitstration = {
  status: 400,
  description: 'Bad Request. At least 4 photos must be uploaded.',
  schema: {
    type: 'object',
    example: {
      message: 'At least 4 photos must be uploaded.',
      error: 'Bad Request',
      statusCode: 400,
    },
  },
};

export const loginSuccess = {
  status: 200,
  description: 'Login end point returns a JWT token to use for authentication.',
  schema: {
    type: 'object',
    example: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG41QGdtYWlsLmNvbSIsImlkIjo5LCJpYXQiOjE2OTQyMjA2NzksImV4cCI6MTY5NDIyNDI3OX0.Ueiv9kos0Cn7OhLySqH8JuiwUfFeNE_luN2eDMzGbHg',
    },
  },
};

export const loginUnAuthenticated = {
  status: 401,
  description:
    'Unauthorized. Authentication failed email or password incorrect.',
  schema: {
    type: 'object',
    example: {
      message: 'Unauthorized',
      statusCode: 401,
    },
  },
};

export const userProfile = {
  status: 200,
  description:
    'Unauthorized. Authentication failed email or password incorrect.',
  schema: {
    type: 'object',
    example: {
      id: 8,
      firstName: 'kalyango',
      lastName: 'John',
      email: 'john5@gmail.com',
      password: '$2b$10$glyyG35Lc7WDCZZsbODrWeYjZcRVStcffx/W49sEFjoy6AMwvqt6.',
      role: 'admin',
      active: true,
      createdAt: '2023-09-09T00:50:36.080Z',
      updatedAt: '2023-09-09T00:50:36.080Z',
      avatar:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      FullName: 'kalyango John',
      photos: [
        {
          id: 29,
          name: 'ava.png',
          url: 'https://cw-recruitment-tests.s3.eu-west-1.amazonaws.com/photos/ava.png',
          createdAt: '2023-09-09T00:50:36.038Z',
          updatedAt: '2023-09-09T00:50:36.038Z',
        },
        {
          id: 30,
          name: 'avatar.webp',
          url: 'https://cw-recruitment-tests.s3.eu-west-1.amazonaws.com/photos/avatar.webp',
          createdAt: '2023-09-09T00:50:36.052Z',
          updatedAt: '2023-09-09T00:50:36.052Z',
        },
        {
          id: 31,
          name: 'avatar2.png',
          url: 'https://cw-recruitment-tests.s3.eu-west-1.amazonaws.com/photos/avatar2.png',
          createdAt: '2023-09-09T00:50:36.060Z',
          updatedAt: '2023-09-09T00:50:36.060Z',
        },
        {
          id: 32,
          name: 'WhatsApp Image 2023-08-03 at 14.24.14.jpeg',
          url: 'https://cw-recruitment-tests.s3.eu-west-1.amazonaws.com/photos/WhatsApp%20Image%202023-08-03%20at%2014.24.14.jpeg',
          createdAt: '2023-09-09T00:50:36.056Z',
          updatedAt: '2023-09-09T00:50:36.056Z',
        },
      ],
    },
  },
};
