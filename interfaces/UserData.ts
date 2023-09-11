export interface UserData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: { day: string; month: string; year: string };
  instrumentPlayed: [];
  instrumentTaught: [];
  genresPlayed: [];
  genresLiked: [];
  description: string;
  token: string;
  profilePicture: string;
}
