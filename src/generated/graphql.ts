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

export type Category = {
  __typename?: 'Category';
  coffeeshops?: Maybe<Array<Maybe<CoffeeShop>>>;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  totalShops: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};


export type CategoryCoffeeshopsArgs = {
  lastId?: InputMaybe<Scalars['Int']['input']>;
};

export type CoffeeShop = {
  __typename?: 'CoffeeShop';
  categories?: Maybe<Array<Maybe<Category>>>;
  coffeeshopPhotos?: Maybe<Array<Maybe<CoffeeShopPhoto>>>;
  createdAt: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  latitude: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user: User;
};


export type CoffeeShopCategoriesArgs = {
  lastId?: InputMaybe<Scalars['Int']['input']>;
};


export type CoffeeShopCoffeeshopPhotosArgs = {
  lastId?: InputMaybe<Scalars['Int']['input']>;
};

export type CoffeeShopPhoto = {
  __typename?: 'CoffeeShopPhoto';
  coffeeShop: CoffeeShop;
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type CommonResponse = {
  __typename?: 'CommonResponse';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
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
  coffeeShopUplad: CommonResponse;
  createCoffeeShop?: Maybe<CreateCoffeeShopResponse>;
  createUser: CreateUserResponse;
  deleteCategory?: Maybe<CommonResponse>;
  deleteCoffeeShop?: Maybe<CommonResponse>;
  deleteFileCoffee: CommonResponse;
  deleteFileUpload: CommonResponse;
  editCoffeeShop?: Maybe<EditCoffeeShopResponse>;
  editFileUpload: CommonResponse;
  editUser: CommonResponse;
  followerUser?: Maybe<FollowerUserResponse>;
  loginUser: LoginUserResponse;
  multipleFileUpload?: Maybe<File>;
  singleFileUpload: CommonResponse;
  unFollowerUser?: Maybe<UnFollowerUserResponse>;
};


export type MutationCoffeeShopUpladArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCoffeeShopArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteFileCoffeeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteFileUploadArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Int']['input'];
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  seeCategories?: Maybe<SeeCategoriesResponse>;
  seeCoffeeShop?: Maybe<SeeCoffeeShopResponse>;
  seeCoffeesShops?: Maybe<SeeCoffeesShopsResponse>;
  seeUser?: Maybe<SeeUserResponse>;
};


export type QuerySearchUserArgs = {
  keyword: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySeeCategoriesArgs = {
  lastId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySeeCoffeeShopArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeCoffeesShopsArgs = {
  lastId?: InputMaybe<Scalars['Int']['input']>;
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
  coffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
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
  totalShops?: Maybe<Scalars['Int']['output']>;
  userName: Scalars['String']['output'];
};

export type CreateCoffeeShopResponse = {
  __typename?: 'createCoffeeShopResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditCoffeeShopResponse = {
  __typename?: 'editCoffeeShopResponse';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type SeeCategoriesResponse = {
  __typename?: 'seeCategoriesResponse';
  category?: Maybe<Array<Maybe<Category>>>;
  coffeeshops?: Maybe<Array<Maybe<CoffeeShop>>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type SeeCoffeeShopResponse = {
  __typename?: 'seeCoffeeShopResponse';
  coffeeShop: CoffeeShop;
  coffeeShopPhoto?: Maybe<CoffeeShopPhoto>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type SeeCoffeesShopsResponse = {
  __typename?: 'seeCoffeesShopsResponse';
  coffeeShop?: Maybe<Array<Maybe<CoffeeShop>>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  CoffeeShop: ResolverTypeWrapper<CoffeeShop>;
  CoffeeShopPhoto: ResolverTypeWrapper<CoffeeShopPhoto>;
  CommonResponse: ResolverTypeWrapper<CommonResponse>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
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
  createCoffeeShopResponse: ResolverTypeWrapper<CreateCoffeeShopResponse>;
  editCoffeeShopResponse: ResolverTypeWrapper<EditCoffeeShopResponse>;
  seeCategoriesResponse: ResolverTypeWrapper<SeeCategoriesResponse>;
  seeCoffeeShopResponse: ResolverTypeWrapper<SeeCoffeeShopResponse>;
  seeCoffeesShopsResponse: ResolverTypeWrapper<SeeCoffeesShopsResponse>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  CoffeeShop: CoffeeShop;
  CoffeeShopPhoto: CoffeeShopPhoto;
  CommonResponse: CommonResponse;
  CreateUserResponse: CreateUserResponse;
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
  createCoffeeShopResponse: CreateCoffeeShopResponse;
  editCoffeeShopResponse: EditCoffeeShopResponse;
  seeCategoriesResponse: SeeCategoriesResponse;
  seeCoffeeShopResponse: SeeCoffeeShopResponse;
  seeCoffeesShopsResponse: SeeCoffeesShopsResponse;
}>;

export type CategoryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  coffeeshops?: Resolver<Maybe<Array<Maybe<ResolversTypes['CoffeeShop']>>>, ParentType, ContextType, Partial<CategoryCoffeeshopsArgs>>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalShops?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoffeeShopResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CoffeeShop'] = ResolversParentTypes['CoffeeShop']> = ResolversObject<{
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, Partial<CoffeeShopCategoriesArgs>>;
  coffeeshopPhotos?: Resolver<Maybe<Array<Maybe<ResolversTypes['CoffeeShopPhoto']>>>, ParentType, ContextType, Partial<CoffeeShopCoffeeshopPhotosArgs>>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoffeeShopPhotoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CoffeeShopPhoto'] = ResolversParentTypes['CoffeeShopPhoto']> = ResolversObject<{
  coffeeShop?: Resolver<ResolversTypes['CoffeeShop'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommonResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CommonResponse'] = ResolversParentTypes['CommonResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditFileUploadResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EditFileUploadResponse'] = ResolversParentTypes['EditFileUploadResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = ResolversObject<{
  fileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FollowerUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['FollowerUserResponse'] = ResolversParentTypes['FollowerUserResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LoginUserResponse'] = ResolversParentTypes['LoginUserResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  coffeeShopUplad?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, Partial<MutationCoffeeShopUpladArgs>>;
  createCoffeeShop?: Resolver<Maybe<ResolversTypes['createCoffeeShopResponse']>, ParentType, ContextType, Partial<MutationCreateCoffeeShopArgs>>;
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'name' | 'password' | 'userName'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['CommonResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteCoffeeShop?: Resolver<Maybe<ResolversTypes['CommonResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCoffeeShopArgs, 'id'>>;
  deleteFileCoffee?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, RequireFields<MutationDeleteFileCoffeeArgs, 'id'>>;
  deleteFileUpload?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, RequireFields<MutationDeleteFileUploadArgs, 'id'>>;
  editCoffeeShop?: Resolver<Maybe<ResolversTypes['editCoffeeShopResponse']>, ParentType, ContextType, RequireFields<MutationEditCoffeeShopArgs, 'id'>>;
  editFileUpload?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, RequireFields<MutationEditFileUploadArgs, 'id'>>;
  editUser?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, Partial<MutationEditUserArgs>>;
  followerUser?: Resolver<Maybe<ResolversTypes['FollowerUserResponse']>, ParentType, ContextType, Partial<MutationFollowerUserArgs>>;
  loginUser?: Resolver<ResolversTypes['LoginUserResponse'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'password' | 'userName'>>;
  multipleFileUpload?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, Partial<MutationMultipleFileUploadArgs>>;
  singleFileUpload?: Resolver<ResolversTypes['CommonResponse'], ParentType, ContextType, RequireFields<MutationSingleFileUploadArgs, 'id'>>;
  unFollowerUser?: Resolver<Maybe<ResolversTypes['UnFollowerUserResponse']>, ParentType, ContextType, Partial<MutationUnFollowerUserArgs>>;
}>;

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  searchUser?: Resolver<ResolversTypes['SearchUserResponse'], ParentType, ContextType, RequireFields<QuerySearchUserArgs, 'keyword'>>;
  seeCategories?: Resolver<Maybe<ResolversTypes['seeCategoriesResponse']>, ParentType, ContextType, Partial<QuerySeeCategoriesArgs>>;
  seeCoffeeShop?: Resolver<Maybe<ResolversTypes['seeCoffeeShopResponse']>, ParentType, ContextType, RequireFields<QuerySeeCoffeeShopArgs, 'id'>>;
  seeCoffeesShops?: Resolver<Maybe<ResolversTypes['seeCoffeesShopsResponse']>, ParentType, ContextType, Partial<QuerySeeCoffeesShopsArgs>>;
  seeUser?: Resolver<Maybe<ResolversTypes['SeeUserResponse']>, ParentType, ContextType, RequireFields<QuerySeeUserArgs, 'page' | 'userName'>>;
}>;

export type SearchUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SearchUserResponse'] = ResolversParentTypes['SearchUserResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SeeUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SeeUserResponse'] = ResolversParentTypes['SeeUserResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnFollowerUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UnFollowerUserResponse'] = ResolversParentTypes['UnFollowerUserResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  avatarURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coffeeShops?: Resolver<Maybe<Array<Maybe<ResolversTypes['CoffeeShop']>>>, ParentType, ContextType>;
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
  totalShops?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateCoffeeShopResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['createCoffeeShopResponse'] = ResolversParentTypes['createCoffeeShopResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditCoffeeShopResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['editCoffeeShopResponse'] = ResolversParentTypes['editCoffeeShopResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SeeCategoriesResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['seeCategoriesResponse'] = ResolversParentTypes['seeCategoriesResponse']> = ResolversObject<{
  category?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  coffeeshops?: Resolver<Maybe<Array<Maybe<ResolversTypes['CoffeeShop']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SeeCoffeeShopResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['seeCoffeeShopResponse'] = ResolversParentTypes['seeCoffeeShopResponse']> = ResolversObject<{
  coffeeShop?: Resolver<ResolversTypes['CoffeeShop'], ParentType, ContextType>;
  coffeeShopPhoto?: Resolver<Maybe<ResolversTypes['CoffeeShopPhoto']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SeeCoffeesShopsResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['seeCoffeesShopsResponse'] = ResolversParentTypes['seeCoffeesShopsResponse']> = ResolversObject<{
  coffeeShop?: Resolver<Maybe<Array<Maybe<ResolversTypes['CoffeeShop']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  Category?: CategoryResolvers<ContextType>;
  CoffeeShop?: CoffeeShopResolvers<ContextType>;
  CoffeeShopPhoto?: CoffeeShopPhotoResolvers<ContextType>;
  CommonResponse?: CommonResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
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
  createCoffeeShopResponse?: CreateCoffeeShopResponseResolvers<ContextType>;
  editCoffeeShopResponse?: EditCoffeeShopResponseResolvers<ContextType>;
  seeCategoriesResponse?: SeeCategoriesResponseResolvers<ContextType>;
  seeCoffeeShopResponse?: SeeCoffeeShopResponseResolvers<ContextType>;
  seeCoffeesShopsResponse?: SeeCoffeesShopsResponseResolvers<ContextType>;
}>;

