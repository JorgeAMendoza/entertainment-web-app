const extractToken = () => {
  // this funcntion is going to be used to just get the token from local storage, either return a string token or null (in cases it is not there)
  const token = localStorage.getItem('ent-token');
  if (!token) return null;

  const parsedToken = JSON.parse(token) as string;
  return parsedToken;
};

export default extractToken;
