export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FilmByIdQueryVariables = Exact<{
  filmId?: Maybe<Scalars['ID']>;
}>;


export type FilmByIdQuery = { film?: { __typename?: 'Film', title?: string | null | undefined, director?: string | null | undefined } | null | undefined };

export type FilmFragment = { __typename?: 'Film', title?: string | null | undefined, director?: string | null | undefined };

export type AllFilmsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFilmsQuery = { allFilms?: { __typename?: 'FilmsConnection', films?: Array<{ __typename?: 'Film', id: string, title?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };
