
export interface initialStateInterface {
    user: {id: number, name: string, jwt: string} | undefined;
    error: string | unknown;
    isLoading: boolean;
}

export interface SignupInterface {
    profileImage?: File;
    name: string;
    username: string;
    email: string;
    dob: string;
    password: string;
    confirmPassword: string;
}

export interface LoginInterface {
    identifier: string;
    password: string;
}


export interface ContactInterface {
    firstName: string;
    lastName: string;
    email: string;
    inquiry?: string;
}

