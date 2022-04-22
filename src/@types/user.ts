type User = {
  id: string;
  username: string;
  firstName?: string;
  avatar: string;
  email: string;
  token?: string;
  expires_token_in?: Date;
};

export default User;
