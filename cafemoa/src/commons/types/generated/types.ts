export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  __typename?: "CafeImage";
  cafeInform: ICafeInform;
  cafe_image: Scalars["String"];
  id: Scalars["String"];
  is_main: Scalars["Boolean"];
};

export type ICafeInform = {
  __typename?: "CafeInform";
  brandName: Scalars["String"];
  cafeAddr: Scalars["String"];
  cafeTag: Array<ICafeTag>;
  cafeinfo: Scalars["String"];
  closedDay: Scalars["String"];
  id: Scalars["String"];
  lat: Scalars["Float"];
  like: Scalars["Int"];
  lng: Scalars["Float"];
  operatingTime: Scalars["String"];
  owner: IOwner;
  ownerNum: Scalars["String"];
  thumbNail: Scalars["String"];
};

export type ICafeInformInput = {
  brandName: Scalars["String"];
  cafeAddr: Scalars["String"];
  cafeTag: Array<Scalars["String"]>;
  cafe_imageUrl: Array<Scalars["String"]>;
  cafeinfo: Scalars["String"];
  closedDay: Scalars["String"];
  lat: Scalars["Float"];
  lng: Scalars["Float"];
  menu_imageUrl: Array<Scalars["String"]>;
  operatingTime: Scalars["String"];
  ownerNum: Scalars["String"];
};

export type ICafeMenuImage = {
  __typename?: "CafeMenuImage";
  cafeInform: ICafeInform;
  id: Scalars["String"];
  menu_imageUrl: Scalars["String"];
};

export type ICafeTag = {
  __typename?: "CafeTag";
  cafeInform: Array<ICafeInform>;
  id: Scalars["String"];
  tagName: Scalars["String"];
};

export type ICategory = {
  __typename?: "Category";
  category: Scalars["String"];
  id: Scalars["String"];
};

export type IComment = {
  __typename?: "Comment";
  cafeinfo: ICafeInform;
  id: Scalars["String"];
  like: Scalars["Int"];
  reply: Scalars["String"];
  time: Scalars["DateTime"];
};

export type ICommentImage = {
  __typename?: "CommentImage";
  comment: IComment;
  id: Scalars["String"];
  image_url: Scalars["String"];
};

export type ICoupon = {
  __typename?: "Coupon";
  accstamp: Scalars["Int"];
  cafeInform: ICafeInform;
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  stamp: Scalars["Int"];
  user: IUser;
};

export type ICreateCouponInput = {
  cafeId: Scalars["String"];
  phoneNumber: Scalars["String"];
  stamp: Scalars["Int"];
};

export type ICreateOwnerCommentInput = {
  content: Scalars["String"];
};

export type ICreateUserInput = {
  address: Scalars["String"];
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  personalNumber: Scalars["String"];
  phoneNumber: Scalars["String"];
  profileImage?: InputMaybe<Scalars["String"]>;
};

export type IMutation = {
  __typename?: "Mutation";
  CreateOwner: IOwner;
  CreatecafeInform: ICafeInform;
  PickCafe: Scalars["Int"];
  createCategory: ICategory;
  createComment: IComment;
  createCoupon: ICoupon;
  createOwnerComment: IOwnerComment;
  createUser: IUser;
  deleteCafeImage: Scalars["Boolean"];
  deleteCafeInform: Scalars["Boolean"];
  deleteCafeMenuImage: Scalars["Boolean"];
  deleteCategory: Scalars["Boolean"];
  deleteComment: Scalars["Boolean"];
  deleteCoupon: Scalars["String"];
  deleteOwner: Scalars["Boolean"];
  deleteOwnerComment: Scalars["Boolean"];
  deleteStamp: Scalars["Int"];
  deleteUser: Scalars["Boolean"];
  emailVerify: Scalars["String"];
  findOwnerPassword: Scalars["String"];
  findUserPwd: Scalars["String"];
  ownerLogin: Scalars["String"];
  ownerLogout: Scalars["String"];
  restoreAccessToken: Scalars["String"];
  restoreOwnerAccessToken: Scalars["String"];
  sendTokenToOwnerEmail: Scalars["Int"];
  sendTokenToSMS: Scalars["Int"];
  updateCafeInform: ICafeInform;
  updateComment: IComment;
  updateOwner: IOwner;
  updateOwnerComment: IOwnerComment;
  updateUser: IUser;
  uploadFile: Array<Scalars["String"]>;
  useCoupon: Scalars["String"];
  userLogin: Scalars["String"];
  userLogout: Scalars["String"];
};

export type IMutationCreateOwnerArgs = {
  createOwnerInput: IOwnerInput;
};

export type IMutationCreatecafeInformArgs = {
  cafeInformInput: ICafeInformInput;
};

export type IMutationPickCafeArgs = {
  CafeInformID: Scalars["String"];
};

export type IMutationCreateCategoryArgs = {
  category: Scalars["String"];
};

export type IMutationCreateCommentArgs = {
  cafeinformId: Scalars["String"];
  createCommentinput: ICreateCommentInput;
};

export type IMutationCreateCouponArgs = {
  createCouponInput: ICreateCouponInput;
};

export type IMutationCreateOwnerCommentArgs = {
  commentID: Scalars["String"];
  createOwnerCommentInput: ICreateOwnerCommentInput;
  ownerId: Scalars["String"];
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationDeleteCafeImageArgs = {
  cafeImageID: Scalars["String"];
};

export type IMutationDeleteCafeInformArgs = {
  cafeInformID: Scalars["String"];
};

export type IMutationDeleteCafeMenuImageArgs = {
  cafeMenuImageID: Scalars["String"];
};

export type IMutationDeleteCategoryArgs = {
  categoryId: Scalars["String"];
};

export type IMutationDeleteCommentArgs = {
  commentId: Scalars["String"];
};

export type IMutationDeleteCouponArgs = {
  couponId: Scalars["String"];
};

export type IMutationDeleteOwnerCommentArgs = {
  ownerCommentId: Scalars["String"];
};

export type IMutationDeleteStampArgs = {
  ownerpassword: Scalars["String"];
  stamphistoryId: Scalars["String"];
};

export type IMutationEmailVerifyArgs = {
  email: Scalars["String"];
};

export type IMutationFindOwnerPasswordArgs = {
  email: Scalars["String"];
};

export type IMutationFindUserPwdArgs = {
  email: Scalars["String"];
};

export type IMutationOwnerLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type IMutationSendTokenToOwnerEmailArgs = {
  email: Scalars["String"];
};

export type IMutationSendTokenToSmsArgs = {
  phone: Scalars["String"];
};

export type IMutationUpdateCafeInformArgs = {
  CafeInformID: Scalars["String"];
  updateCafeInform: IUpdateCafeInform;
};

export type IMutationUpdateCommentArgs = {
  UpdateCommentInput: IUpdateCommentInput;
  commentId: Scalars["String"];
};

export type IMutationUpdateOwnerArgs = {
  updateOwnerInput: IOwnerUpdateInput;
};

export type IMutationUpdateOwnerCommentArgs = {
  OwnerId: Scalars["String"];
  UpdateOwnerCommentInput: IUpdateOwnerCommentInput;
};

export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};

export type IMutationUploadFileArgs = {
  files: Array<Scalars["Upload"]>;
};

export type IMutationUseCouponArgs = {
  couponId: Scalars["String"];
  password: Scalars["String"];
};

export type IMutationUserLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type IOwner = {
  __typename?: "Owner";
  email: Scalars["String"];
  id: Scalars["String"];
  is_cafeInform: Scalars["Boolean"];
  is_main: Scalars["Boolean"];
  name: Scalars["String"];
  phone: Scalars["String"];
};

export type IOwnerComment = {
  __typename?: "OwnerComment";
  comment: IComment;
  content: Scalars["String"];
  id: Scalars["String"];
  owner: IOwner;
  time: Scalars["DateTime"];
};

export type IOwnerInput = {
  email: Scalars["String"];
  is_main: Scalars["Boolean"];
  name: Scalars["String"];
  ownerPassword: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
};

export type IOwnerUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  is_main?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  ownerPassword?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type IPickList = {
  __typename?: "PickList";
  cafeInform: ICafeInform;
  id: Scalars["String"];
  user: IUser;
};

export type IQuery = {
  __typename?: "Query";
  fetchBestCafe: Array<ICafeInform>;
  fetchCafeCoupons: Array<ICoupon>;
  fetchCafeImage: Array<ICafeImage>;
  fetchCafeInform: ICafeInform;
  fetchCafeInformWithLocation: Array<ICafeInform>;
  fetchCafeInformWithTag: Array<ICafeInform>;
  fetchCafeMenuImage: Array<ICafeMenuImage>;
  fetchCategory: Array<ICategory>;
  fetchComment: IComment;
  fetchCommentImage: ICommentImage;
  fetchCommentImages: Array<ICommentImage>;
  fetchCommentWithTag: Array<IComment>;
  fetchComments: Array<IComment>;
  fetchCoupon: ICoupon;
  fetchCouponWithLocation: Array<ICoupon>;
  fetchCoupons: Array<ICoupon>;
  fetchMyPickListLocation: Array<IPickList>;
  fetchMyPickLists: Array<IPickList>;
  fetchOwner: IOwner;
  fetchOwnerComment: IOwnerComment;
  fetchOwners: Array<IOwner>;
  fetchStamps: Array<IStampHistory>;
  fetchUser: IUser;
  fetchUserCoupons: Array<ICoupon>;
  fetchUsers: Array<IUser>;
  fetchbestcomment: Array<IComment>;
};

export type IQueryFetchCafeCouponsArgs = {
  cafeId: Scalars["String"];
};

export type IQueryFetchCafeImageArgs = {
  cafeInformID: Scalars["String"];
};

export type IQueryFetchCafeInformArgs = {
  cafeInformID: Scalars["String"];
};

export type IQueryFetchCafeInformWithLocationArgs = {
  Location: Scalars["String"];
};

export type IQueryFetchCafeInformWithTagArgs = {
  Tags: Array<Scalars["String"]>;
};

export type IQueryFetchCafeMenuImageArgs = {
  CafeInformID: Scalars["String"];
};

export type IQueryFetchCommentArgs = {
  commentId: Scalars["String"];
};

export type IQueryFetchCommentImageArgs = {
  commentId: Scalars["String"];
};

export type IQueryFetchCommentWithTagArgs = {
  Tags: Array<Scalars["String"]>;
};

export type IQueryFetchCouponArgs = {
  couponId: Scalars["String"];
};

export type IQueryFetchCouponWithLocationArgs = {
  cafeAddr: Scalars["String"];
};

export type IQueryFetchMyPickListLocationArgs = {
  Location: Scalars["String"];
};

export type IQueryFetchOwnerArgs = {
  ownerID: Scalars["String"];
};

export type IQueryFetchOwnerCommentArgs = {
  ownercommentId: Scalars["String"];
};

export type IQueryFetchStampsArgs = {
  cafeId: Scalars["String"];
};

export type IQueryFetchUserArgs = {
  email: Scalars["String"];
};

export type IStampHistory = {
  __typename?: "StampHistory";
  coupon: ICoupon;
  createdAt: Scalars["DateTime"];
  id: Scalars["String"];
  owner: IOwner;
  stamp: Scalars["Int"];
  user: IUser;
};

export type IUpdateCafeInform = {
  brandName?: InputMaybe<Scalars["String"]>;
  cafeAddr?: InputMaybe<Scalars["String"]>;
  cafeTag: Array<Scalars["String"]>;
  cafe_imageUrl?: InputMaybe<Array<Scalars["String"]>>;
  cafeinfo?: InputMaybe<Scalars["String"]>;
  closedDay?: InputMaybe<Scalars["String"]>;
  lat?: InputMaybe<Scalars["Float"]>;
  lng?: InputMaybe<Scalars["Float"]>;
  menu_imageUrl?: InputMaybe<Array<Scalars["String"]>>;
  operatingTime?: InputMaybe<Scalars["String"]>;
  ownerNum?: InputMaybe<Scalars["String"]>;
};

export type IUpdateCommentInput = {
  image_Url?: InputMaybe<Array<Scalars["String"]>>;
  reply?: InputMaybe<Scalars["String"]>;
};

export type IUpdateOwnerCommentInput = {
  content?: InputMaybe<Scalars["String"]>;
};

export type IUpdateUserInput = {
  address?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  personalNumber?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  profileImage?: InputMaybe<Scalars["String"]>;
};

export type IUser = {
  __typename?: "User";
  address: Scalars["String"];
  age: Scalars["String"];
  email: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  personalNumber: Scalars["String"];
  phoneNumber: Scalars["String"];
  profileImage: Scalars["String"];
};

export type ICreateCommentInput = {
  image_Url: Array<Scalars["String"]>;
  reply: Scalars["String"];
};
