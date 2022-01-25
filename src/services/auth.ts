export interface IUser {
  name: string;
  email: string;
}

export interface ISignIn {
  token: string;
  user: IUser;
}

export function signInService() {
  return new Promise<ISignIn>(resolve => {
    setTimeout(() => {
      resolve({
        token: 'daldjalkdjadr9082309482903asdajsldk',
        user: {
          name: 'Bruno',
          email: 'test@test.com',
        },
      });
    }, 2000);
  });
}
