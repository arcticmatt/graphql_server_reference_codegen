export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hero?: Maybe<Character>;
  human?: Maybe<Human>;
  droid?: Maybe<Droid>;
  humanOrDroid?: Maybe<HumanOrDroid>;
};


export type QueryHeroArgs = {
  episode?: Maybe<Episode>;
};


export type QueryHumanArgs = {
  id: Scalars['String'];
};


export type QueryDroidArgs = {
  id: Scalars['String'];
};


export type QueryHumanOrDroidArgs = {
  input: SumInput;
};

/** A character in the Star Wars Trilogy */
export type Character = {
  /** The id of the character. */
  id: Scalars['String'];
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The friends of the character, or an empty list if they have none. */
  friends?: Maybe<Array<Maybe<Character>>>;
  /** Which movies they appear in. */
  appearsIn?: Maybe<Array<Maybe<Episode>>>;
  /** All secrets about their past. */
  secretBackstory?: Maybe<Scalars['String']>;
};

/** One of the films in the Star Wars Trilogy */
export enum Episode {
  /** Released in 1977. */
  NEW_HOPE = 0,
  /** Released in 1980. */
  EMPIRE = 1,
  /** Released in 1983. */
  JEDI = 2
}

/** A humanoid creature in the Star Wars universe. */
export type Human = Character & {
  __typename?: 'Human';
  /** The id of the human. */
  id: Scalars['String'];
  /** The name of the human. */
  name?: Maybe<Scalars['String']>;
  /** The friends of the human, or an empty list if they have none. */
  friends?: Maybe<Array<Maybe<Character>>>;
  /** Which movies they appear in. */
  appearsIn?: Maybe<Array<Maybe<Episode>>>;
  /** The home planet of the human, or null if unknown. */
  homePlanet?: Maybe<Scalars['String']>;
  /** Where are they from and how they came to be who they are. */
  secretBackstory?: Maybe<Scalars['String']>;
};

/** A mechanical creature in the Star Wars universe. */
export type Droid = Character & {
  __typename?: 'Droid';
  /** The id of the droid. */
  id: Scalars['String'];
  /** The name of the droid. */
  name?: Maybe<Scalars['String']>;
  /** The friends of the droid, or an empty list if they have none. */
  friends?: Maybe<Array<Maybe<Character>>>;
  /** Which movies they appear in. */
  appearsIn?: Maybe<Array<Maybe<Episode>>>;
  /** Construction date and the name of the designer. */
  secretBackstory?: Maybe<Scalars['String']>;
  /** The primary function of the droid. */
  primaryFunction?: Maybe<Scalars['String']>;
};

export type HumanOrDroid = Human | Droid;

export type SumInput = {
  /** An arbitrary integer. */
  one: Scalars['Int'];
  /** An arbitrary integer. */
  two: Scalars['Int'];
  /** An arbitrary integer. */
  three: Scalars['Int'];
};
