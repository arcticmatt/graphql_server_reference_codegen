export type Human = {
  type: "Human";
  id: string;
  name: string;
  friends: Array<string>;
  appearsIn: Array<number>;
  homePlanet?: string;
};
