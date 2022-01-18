export function signIn() {
  return new Promise(resolve => {
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
