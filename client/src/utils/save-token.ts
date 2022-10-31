const saveToken = (token: string) => {
  localStorage.setItem('ent-token', JSON.stringify(token));
};

export default saveToken;
