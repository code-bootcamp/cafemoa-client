export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: any;
  Upload: any;
};

export type ICafeImage = {
  __typename?: 'CafeImage';
  cafeInform: ICafeInform;
  cafe_image: Scalars['String'];
  id: Scalars['String'];
  is_main: Scalars['Boolean'];
};

export type ICafeInform = {
  __typename?: 'CafeInform';
  cafeAddr: Scalars['String'];
  cafeImage: Array<ICafeImage>;
  cafeMenuImage: Array<ICafeMenuImage>;
  cafeTag: Array<ICafeTag>;
  cafeinfo: Scalars['String'];
  detailAddr: Scalars['String'];
  id: Scalars['String'];
  like: Scalars['Int'];
  operatingInfo: Scalars['String'];
  owner: IOwner;
  thumbNail: Scalars['String'];
};

export type ICafeInformInput = {
  cafeAddr: Scalars['String'];
  cafeTag: Array<Scalars['String']>;
  cafe_imageUrl: Array<Scalars['String']>;
  cafeinfo: Scalars['String'];
  detailAddr: Scalars['String'];
  menu_imageUrl: Array<Scalars['String']>;
  operatingInfo: Scalars['String'];
};

export type ICafeMenuImage = {
  __typename?: 'CafeMenuImage';
  cafeInform: ICafeInform;
  id: Scalars['String'];
  menu_imageUrl: Scalars['String'];
};

export type ICafeTag = {
  __typename?: 'CafeTag';
  cafeInform: Array<ICafeInform>;
  id: Scalars['String'];
  tagName: Scalars['String'];
};

export type ICategory = {
  __typename?: 'Category';
  category: Scalars['String'];
  id: Scalars['String'];
};

export type IComment = {
  __typename?: 'Comment';
  cafeinfo: ICafeInform;
  commentImage: Array<ICommentImage>;
  id: Scalars['String'];
  like: Scalars['Int'];
  reply: Scalars['String'];
  time: Scalars['DateTime'];
  user: IUser;
};

export type ICommentImage = {
  __typename?: 'CommentImage';
  comment: IComment;
  id: Scalars['String'];
  image_url: Scalars['String'];
};

export type ICoupon = {
  __typename?: 'Coupon';
  cafeInform: ICafeInform;
  expiredDate: Scalars['String'];
  id: Scalars['String'];
  user: IUser;
};

export type ICreateOwnerCommentInput = {
  content: Scalars['String'];
};

export type ICreateStampInput = {
  cafeId: Scalars['String'];
  count: Scalars['Int'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type ICreateUserInput = {
  address: Scalars['String'];
  detailAddress?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  profileImage?: InputMaybe<Scalars['String']>;
};

export type IDeletedCoupon = {
  __typename?: 'DeletedCoupon';
  cafeInform: ICafeInform;
  expired: Scalars['Boolean'];
  expiredDate: Scalars['String'];
  id: Scalars['String'];
  user: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  CreateOwner: IOwner;
  CreatecafeInform: ICafeInform;
  PickCafe: Scalars['Int'];
  createCategory: ICategory;
  createComment: IComment;
  createOwnerComment: IOwnerComment;
  createStamp: IStamp;
  createUser: IUser;
  deleteCafeImage: Scalars['Boolean'];
  deleteCafeInform: Scalars['Boolean'];
  deleteCafeMenuImage: Scalars['Boolean'];
  deleteCategory: Scalars['Boolean'];
  deleteComment: Scalars['String'];
  deleteCommentImage: Scalars['String'];
  deleteOwner: Scalars['Boolean'];
  deleteStamp: Scalars['String'];
  deleteUnusualStamp: Scalars['Int'];
  deleteUser: Scalars['Boolean'];
  emailVerify: Scalars['String'];
  findOwnerPassword: Scalars['String'];
  findUserPwd: Scalars['String'];
  likeComment: Scalars['Int'];
  ownerLogin: Scalars['String'];
  ownerLogout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  restoreOwnerAccessToken: Scalars['String'];
  sendTokenToOwnerEmail: Scalars['String'];
  sendTokenToSMS: Scalars['String'];
  updateCafeInform: ICafeInform;
  updateComment: IComment;
  updateOwner: IOwner;
  updateOwnerComment: IOwnerComment;
  updateUser: IUser;
  uploadFile: Array<Scalars['String']>;
  useCoupon: IDeletedCoupon;
  userLogin: Scalars['String'];
  userLogout: Scalars['String'];
};


export type IMutationCreateOwnerArgs = {
  createOwnerInput: IOwnerInput;
};


export type IMutationCreatecafeInformArgs = {
  cafeInformInput: ICafeInformInput;
};


export type IMutationPickCafeArgs = {
  cafeInformID: Scalars['String'];
};


export type IMutationCreateCategoryArgs = {
  category: Scalars['String'];
};


export type IMutationCreateCommentArgs = {
  cafeinformId: Scalars['String'];
  createCommentinput: ICreateCommentInput;
};


export type IMutationCreateOwnerCommentArgs = {
  commentID: Scalars['String'];
  createOwnerCommentInput: ICreateOwnerCommentInput;
};


export type IMutationCreateStampArgs = {
  createStampInput: ICreateStampInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteCafeImageArgs = {
  cafeImageID: Scalars['String'];
};


export type IMutationDeleteCafeInformArgs = {
  cafeInformID: Scalars['String'];
};


export type IMutationDeleteCafeMenuImageArgs = {
  cafeMenuImageID: Scalars['String'];
};


export type IMutationDeleteCategoryArgs = {
  categoryId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteCommentImageArgs = {
  commentImageID: Scalars['String'];
};


export type IMutationDeleteStampArgs = {
  stampId: Scalars['String'];
};


export type IMutationDeleteUnusualStampArgs = {
  ownerpassword: Scalars['String'];
  stamphistoryId: Scalars['String'];
};


export type IMutationEmailVerifyArgs = {
  email: Scalars['String'];
};


export type IMutationFindOwnerPasswordArgs = {
  email: Scalars['String'];
};


export type IMutationFindUserPwdArgs = {
  email: Scalars['String'];
};


export type IMutationLikeCommentArgs = {
  commentID: Scalars['String'];
};


export type IMutationOwnerLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSendTokenToOwnerEmailArgs = {
  email: Scalars['String'];
};


export type IMutationSendTokenToSmsArgs = {
  phone: Scalars['String'];
};


export type IMutationUpdateCafeInformArgs = {
  cafeInformID: Scalars['String'];
  updateCafeInform: IUpdateCafeInform;
};


export type IMutationUpdateCommentArgs = {
  UpdateCommentInput: IUpdateCommentInput;
  commentId: Scalars['String'];
};


export type IMutationUpdateOwnerArgs = {
  updateOwnerInput: IOwnerUpdateInput;
};


export type IMutationUpdateOwnerCommentArgs = {
  UpdateOwnerCommentInput: IUpdateOwnerCommentInput;
  ownerCommentID: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUseCouponArgs = {
  couponId: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUserLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type IOwner = {
  __typename?: 'Owner';
  brandName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  is_cafeInform: Scalars['Boolean'];
  is_main: Scalars['Boolean'];
  name: Scalars['String'];
  ownerNum: Scalars['String'];
  phone: Scalars['String'];
};

export type IOwnerComment = {
  __typename?: 'OwnerComment';
  comment: IComment;
  content: Scalars['String'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  owner: IOwner;
  time: Scalars['DateTime'];
};

export type IOwnerInput = {
  brandName: Scalars['String'];
  email: Scalars['String'];
  is_main: Scalars['Boolean'];
  name: Scalars['String'];
  ownerNum: Scalars['String'];
  ownerPassword: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type IOwnerUpdateInput = {
  brandName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  is_main?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  ownerNum?: InputMaybe<Scalars['String']>;
  ownerPassword?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IPickList = {
  __typename?: 'PickList';
  cafeInform: ICafeInform;
  id: Scalars['String'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBestCafe: Array<ICafeInform>;
  fetchCafeImage: Array<ICafeImage>;
  fetchCafeInform: ICafeInform;
  fetchCafeInforms: Array<ICafeInform>;
  fetchCafeInformsByBrandName: Array<ICafeInform>;
  fetchCafeMenuImage: Array<ICafeMenuImage>;
  fetchCafeStamps: Array<IStamp>;
  fetchCafes: Array<ICafeInform>;
  fetchCategory: Array<ICategory>;
  fetchComment: IComment;
  fetchCommentBycafeID: Array<IComment>;
  fetchCommentImages: Array<ICommentImage>;
  fetchCommentImagesbyID: Array<ICommentImage>;
  fetchComments: Array<IComment>;
  fetchCommentsAll: Array<IComment>;
  fetchCouponAddUsers: Array<IUser>;
  fetchDeletedCoupon: Array<IDeletedCoupon>;
  fetchMyCafes: Array<ICafeInform>;
  fetchMyOwnerComments: Array<IOwnerComment>;
  fetchMyPickLists: Array<IPickList>;
  fetchOwner: IOwner;
  fetchOwnerComment: Array<IOwnerComment>;
  fetchOwnerCommentByCommentID: Scalars['String'];
  fetchOwnerLoggedIn: IOwner;
  fetchOwners: Array<IOwner>;
  fetchStamp: IStamp;
  fetchStamps: Array<IStamp>;
  fetchUnusualStamps: Array<IStampHistory>;
  fetchUser: IUser;
  fetchUserComments: Array<IComment>;
  fetchUserCoupons: Array<ICoupon>;
  fetchUserStamps: Array<IStamp>;
  fetchUsers: Array<IUser>;
  fetchbestcomment: Array<IComment>;
};


export type IQueryFetchCafeImageArgs = {
  cafeInformID: Scalars['String'];
};


export type IQueryFetchCafeInformArgs = {
  cafeInformID: Scalars['String'];
};


export type IQueryFetchCafeInformsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchCafeInformsByBrandNameArgs = {
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchCafeMenuImageArgs = {
  CafeInformID: Scalars['String'];
};


export type IQueryFetchCafeStampsArgs = {
  cafeId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchCafesArgs = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


export type IQueryFetchCommentArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchCommentBycafeIdArgs = {
  cafeID: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchCommentImagesbyIdArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchCommentsAllArgs = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


export type IQueryFetchCouponAddUsersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchMyCafesArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchMyOwnerCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchMyPickListsArgs = {
  Location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchOwnerArgs = {
  ownerID: Scalars['String'];
};


export type IQueryFetchOwnerCommentArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchOwnerCommentByCommentIdArgs = {
  commentID: Scalars['String'];
};


export type IQueryFetchStampArgs = {
  stampId: Scalars['String'];
};


export type IQueryFetchUnusualStampsArgs = {
  cafeId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUserCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUserCouponsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchUserStampsArgs = {
  location?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type IStamp = {
  __typename?: 'Stamp';
  cafeInform: ICafeInform;
  count: Scalars['Int'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IStampHistory = {
  __typename?: 'StampHistory';
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  owner: IOwner;
  stamp: IStamp;
  user: IUser;
};

export type IUpdateCafeInform = {
  cafeAddr?: InputMaybe<Scalars['String']>;
  cafeTag?: InputMaybe<Array<Scalars['String']>>;
  cafe_imageUrl?: InputMaybe<Array<Scalars['String']>>;
  cafeinfo?: InputMaybe<Scalars['String']>;
  detailAddr?: InputMaybe<Scalars['String']>;
  menu_imageUrl?: InputMaybe<Array<Scalars['String']>>;
  operatingInfo?: InputMaybe<Scalars['String']>;
  ownerNum?: InputMaybe<Scalars['String']>;
};

export type IUpdateCommentInput = {
  image_Url?: InputMaybe<Array<Scalars['String']>>;
  reply?: InputMaybe<Scalars['String']>;
};

export type IUpdateOwnerCommentInput = {
  content?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  detailAddress?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  address: Scalars['String'];
  detailAddress: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  phone: Scalars['String'];
  profileImage: Scalars['String'];
};

export type ICreateCommentInput = {
  image_Url?: InputMaybe<Array<Scalars['String']>>;
  reply: Scalars['String'];
};
