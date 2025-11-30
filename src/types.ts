export type DetailArticle = {
    id: number;
    documentId: string;
    title: string;
    author: string;
    date: string;
    slug: string;
    content: string;
    SeoDescription: string;
    SeoKeywords: string;
    mainImageUrl: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: any;
    locale: any;
    category: string;
    NewContent: NewContent[];
    localizations: any[];
    mainimage: Mainimage;
    media: any;
};

export interface NewContent {
    __component: string;
    id: number;
    content: string;
    Item?: any;
    URL?: string;
    Image?: any;
}

export interface Mainimage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    folderPath: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: any;
}

export interface Formats {
    large: Large;
    small: Small;
    medium: Medium;
    thumbnail: Thumbnail;
}

export interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}

export interface Small {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}

export interface Medium {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}

export interface Thumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: any;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}
export interface LoginUserResponse {
    user: User;
    done: boolean;
    text: string;
}

export interface User {
    phoneNumber: string;
    serviceId: number;
    serviceBuyTime: any;
    serviceValidTime: any;
    userType: number;
    registerDate: string;
    examinerFinder: string;
    displayName: string;
    firstAndLastName: string;
    disableZarinPalBuying: boolean;
    userDetail: any;
    lastSmsSend: any;
    avatar: string;
    email: string;
    id: string;
}

export const fakeUser: User = {
    phoneNumber: "09123456789",
    serviceId: 1,
    serviceBuyTime: null,
    serviceValidTime: null,
    userType: 1,
    registerDate: "",
    examinerFinder: "",
    displayName: "",
    firstAndLastName: "صالح بینش‌نیا",
    disableZarinPalBuying: false,
    userDetail: {},
    lastSmsSend: null,
    avatar: "/images/avatars/sbineshnia.webp",
    email: "sbinesh@gmail.com",
    id: "635a0cf6-ed3d-4ea4-b268-967cf6a9d52b",
};
