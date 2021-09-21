export type Person = {
  fullname: string;
  films: string;
  image: string | undefined;
};

export type PeoplePage = {
  popularPeople: Person[];
  totalPages: number;
  isLoading: boolean;
};
