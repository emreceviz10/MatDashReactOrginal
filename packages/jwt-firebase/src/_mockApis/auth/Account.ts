
import { sign, verify } from 'src/guards/jwt/Jwt';
import mock from '../mock';

const fakeRequest = (time: Date | any) => {
  return new Promise((res) => setTimeout(res, time));
};

interface userType {
  id: string;
  displayName: string;
  email: string;
  password: string;
  phoneNumber: string;
  country: string;
  address: string;
  state: string;
  city: string;
  zipCode: string;
  about: string;
  role: string;
  isPublic: boolean;
}

// ----------------------------------------------------------------------

const JWT_SECRET = 'wrap-secret-key';
const JWT_EXPIRES_IN = '2 days';

let users: userType[] = [
  {
    id: '8e5f29802-677d-772a-629a-7e5f298024da-0',
    displayName: 'Demo React',
    email: 'demo@demo.com',
    password: 'demo123',
    phoneNumber: '+91 2166555',
    country: 'India',
    address: 'Khao galli',
    state: 'Delhi',
    city: 'Delhi',
    zipCode: '94116',
    about: 'Lorem ipsum hasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'admin',
    isPublic: true,
  },
];

// ----------------------------------------------------------------------

mock.onPost('/api/account/login').reply(async (config) => {
  try {
    await fakeRequest(1000);

    const { email, password } = JSON.parse(config.data);

    if (
      window.localStorage.getItem('users') !== undefined &&
      window.localStorage.getItem('users') !== null
    ) {
      const localUsers = window.localStorage.getItem('users');
      users = JSON.parse(localUsers!);
    }

    const user = users.find((_user) => _user.email === email);

    if (!user) {
      return [400, { message: 'There is no user corresponding to the email address.' }];
    }

    if (user.password !== password) {
      return [400, { message: 'Wrong password' }];
    }

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);

    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onPost('/api/account/register').reply(async (config) => {
  try {
    await fakeRequest(1000);

    const { email, password } = JSON.parse(config.data);
    let user = users.find((_user) => _user.email === email);
    const uid = new Date().toISOString();

    if (user) {
      return [400, { message: 'There already exists an account with the given email address.' }];
    }

    user = {
      id: uid,
      displayName: `${email}`,
      email,
      password,
      phoneNumber: '',
      country: '',
      address: '',
      state: '',
      city: '',
      zipCode: '',
      about: '',
      role: 'user',
      isPublic: true,
    };

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);

    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onGet('/api/account/my-account').reply((config) => {
  try {
    const { Authorization } = config.headers!;

    if (!Authorization) {
      return [401, { message: 'Authorization token missing' }];
    }

    if (
      window.localStorage.getItem('users') !== undefined &&
      window.localStorage.getItem('users') !== null
    ) {
      const localUsers = window.localStorage.getItem('users');
      users = JSON.parse(localUsers!);
    }

    const accessToken = Authorization!.toString();
    const data = verify(accessToken, JWT_SECRET);
    const userId = typeof data === 'object' ? data?.userId : '';
    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: 'Invalid authorization token' }];
    }

    return [200, { user }];
  } catch (error) {
    console.error(error);

    return [500, { message: 'Internal server error' }];
  }
});
