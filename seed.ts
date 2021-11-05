export type User = {
  id: number;
  email: string;
  profile: Profile;
  posts: Post[];
}

export type Profile = {
  id: number;
  firstName: string;
  lastName: string;
}

export type Post = {
  id: number;
  title: string;
  detail: string;
}

const user1: User = {
  id: 1,
  email: "user1@example.com",
  profile: {
    id: 1,
    firstName: "user",
    lastName: "one"
  },
  posts: [
    {
      id: 1,
      title: "title_one",
      detail: "detail_one"
    },
    {
      id: 2,
      title: "title_two",
      detail: "detail_two"
    },
  ]
}


const user2: User = {
  id: 2,
  email: "user2@example.com",
  profile: {
    id: 2,
    firstName: "user",
    lastName: "two"
  },
  posts: [
    {
      id: 3,
      title: "title_three",
      detail: "detail_three"
    },
    {
      id: 4,
      title: "title_four",
      detail: "detail_four"
    },
  ]
}

export const usersSeed: User[] = [user1, user2];
