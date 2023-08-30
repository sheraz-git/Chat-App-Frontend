import jwtDecode from 'jwt-decode';
export const tokenGenerator = () => {
  const token = localStorage.getItem('token');
  let userId = '';
  let generatedToken = '';

  if (token) {
    const decodedToken = jwtDecode(token);
    userId = decodedToken.userId;
    generatedToken = token;
  }

  return { userId, token: generatedToken };
};