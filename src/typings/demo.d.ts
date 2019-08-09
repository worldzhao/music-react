export interface GetUserParams {
  id: string;
}

export interface GetUserResponse {
  id: number;
  age: number;
  username: string;
  male: boolean;
}

export interface PostUserParams {
  username: string;
  password: string;
}

export interface PostUserResponse {
  id: number;
  age: number;
  username: string;
}

export interface DemoModelState {
  userDataGet: GetUserResponse | null;
  userDataPost: PostUserResponse | null;
}
