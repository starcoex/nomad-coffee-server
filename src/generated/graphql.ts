import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { DataSourceContext } from '../types/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: "Upload"; output: "Upload"; }
};

export type CommonResponse = {
  __typename?: 'CommonResponse';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditFileUploadResponse = {
  __typename?: 'EditFileUploadResponse';
  error?: Maybe<Scalars['String']['output']>;
  file?: Maybe<File>;
  ok: Scalars['Boolean']['output'];
};

export type File = {
  __typename?: 'File';
  fileUrl: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type FollowerUserResponse = {
  __typename?: 'FollowerUserResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type LoginUserResponse = {
  __typename?: 'LoginUserResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CommonResponse;
  deleteFileUpload: CommonResponse;
  editFileUpload: CommonResponse;
  editUser: CommonResponse;
  followerUser?: Maybe<FollowerUserResponse>;
  loginUser: LoginUserResponse;
  multipleFileUpload?: Maybe<File>;
  singleFileUpload: CommonResponse;
  unFollowerUser?: Maybe<UnFollowerUserResponse>;
};


export type MutationCreateUserArgs = {
  avatarURL?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  githubUserName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type MutationDeleteFileUploadArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditFileUploadArgs = {
  avatarURL?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationEditUserArgs = {
  avatarURL?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  githubUserName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFollowerUserArgs = {
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginUserArgs = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type MutationMultipleFileUploadArgs = {
  input?: InputMaybe<UploadFile>;
};


export type MutationSingleFileUploadArgs = {
  avatarURL?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUnFollowerUserArgs = {
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  searchUser: SearchUserResponse;
  seeUser?: Maybe<SeeUserResponse>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QuerySearchUserArgs = {
  keyword: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySeeUserArgs = {
  page: Scalars['Int']['input'];
  userName: Scalars['String']['input'];
};

export type SearchUserResponse = {
  __typename?: 'SearchUserResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<Array<Maybe<User>>>;
};

export type SeeUserResponse = {
  __typename?: 'SeeUserResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<Array<Maybe<User>>>;
};

export type UnFollowerUserResponse = {
  __typename?: 'UnFollowerUserResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type UploadFile = {
  file: Scalars['Upload']['input'];
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  avatarURL?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  file?: Maybe<Scalars['Upload']['output']>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  githubUserName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isFollowing?: Maybe<Scalars['Boolean']['output']>;
  isMe?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  totalFollowers?: Maybe<Scalars['Int']['output']>;
  totalFollowing?: Maybe<Scalars['Int']['output']>;
  userName: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CommonResponse: ResolverTypeWrapper<CommonResponse>;
  EditFileUploadResponse: ResolverTypeWrapper<EditFileUploadResponse>;
  File: ResolverTypeWrapper<File>;
  FollowerUserResponse: ResolverTypeWrapper<FollowerUserResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LoginUserResponse: ResolverTypeWrapper<LoginUserResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SearchUserResponse: ResolverTypeWrapper<SearchUserResponse>;
  SeeUserResponse: ResolverTypeWrapper<SeeUserResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UnFollowerUserResponse: ResolverTypeWrapper<UnFollowerUserResponse>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  UploadFile: UploadFile;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CommonResponse: CommonResponse;
  EditFileUploadResponse: EditFileUploadResponse;
  File: File;
  FollowerUserResponse: FollowerUserResponse;
  Int: Scalars['Int']['output'];
  LoginUserResponse: LoginUserResponse;
  Mutation: {};
  Query: {};
  SearchUserResponse: SearchUserResponse;
  SeeUserResponse: SeeUserResponse;
  String: Scalars['String']['output'];
  UnFollowerUserResponse: UnFollowerUserResponse;
  Upload: Scalars['Upload']['output'];
  UploadFile: UploadFile;
  User: User;
};

export type CommonResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CommonResponse'] = ResolversParentTypes['CommonResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditFileUploadResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EditFileUploadResponse'] = ResolversParentTypes['EditFileUploadResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  fileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowerUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['FollowerUserResponse'] = ResolversParentTypes['FollowerUserResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LoginUserResponse'] = ResolversParentTypes['LoginUserResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'name' | 'password' | 'userName'>>;
  deleteFileUpload?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, RequireFields<MutationDeleteFileUploadArgs, 'id'>>;
  editFileUpload?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, RequireFields<MutationEditFileUploadArgs, 'id'>>;
  editUser?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, Partial<MutationEditUserArgs>>;
  followerUser?: Resolver<Maybe<ResolversTypes['FollowerUserResponse']>, ParentType, ContextType, Partial<MutationFollowerUserArgs>>;
  loginUser?: Resolver<ResolversTypes['LoginUserResponse'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'password' | 'userName'>>;
  multipleFileUpload?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, Partial<MutationMultipleFileUploadArgs>>;
  singleFileUpload?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, RequireFields<MutationSingleFileUploadArgs, 'id'>>;
  unFollowerUser?: Resolver<Maybe<ResolversTypes['UnFollowerUserResponse']>, ParentType, ContextType, Partial<MutationUnFollowerUserArgs>>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  searchUser?: Resolver<ResolversTypes['SearchUserResponse'], ParentType, ContextType, RequireFields<QuerySearchUserArgs, 'keyword'>>;
  seeUser?: Resolver<Maybe<ResolversTypes['SeeUserResponse']>, ParentType, ContextType, RequireFields<QuerySeeUserArgs, 'page' | 'userName'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type SearchUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SearchUserResponse'] = ResolversParentTypes['SearchUserResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SeeUserResponse'] = ResolversParentTypes['SeeUserResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnFollowerUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UnFollowerUserResponse'] = ResolversParentTypes['UnFollowerUserResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatarURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['Upload']>, ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  githubUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isFollowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMe?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalFollowers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalFollowing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  CommonResponse?: CommonResponseResolvers<ContextType>;
  EditFileUploadResponse?: EditFileUploadResponseResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FollowerUserResponse?: FollowerUserResponseResolvers<ContextType>;
  LoginUserResponse?: LoginUserResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchUserResponse?: SearchUserResponseResolvers<ContextType>;
  SeeUserResponse?: SeeUserResponseResolvers<ContextType>;
  UnFollowerUserResponse?: UnFollowerUserResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

