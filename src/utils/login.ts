// import { downloadPublicUserFile, serverBaseUrl } from "@/app/(homes)/rtl/consts";
import { clsx } from "clsx";

import { twMerge } from "tailwind-merge"
import { serverBaseUrl } from "./consts";
import { Ref, RefObject } from "react";
import { setUserId } from "./ga";

export function cn(...inputs: string[]) {
    return twMerge(clsx(inputs));
}

export const loginByGmail = (credential: string) => {
    return fetch(`${serverBaseUrl}/v1/User/loginByGmail`, {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            jwt: credential,
            Platform: 1,
        }),
        method: 'POST',
    });
}
export const properPhoneNumber = (mobileNumber: string) => {
    mobileNumber = mobileNumber.startsWith('98') ? mobileNumber.replace('98', '') : mobileNumber;
    return mobileNumber.startsWith('0') ? mobileNumber : '0' + mobileNumber;
}

export const login = async (mobileNumberRef: string) => {
    const tempMobileNumber = properPhoneNumber(mobileNumberRef)
    // phoneNumberObjectManager.set(tempMobileNumber);

    return fetch(`${serverBaseUrl}/v1/User/smsRequest`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: tempMobileNumber,
            }),
        })
};

export const loginByActivatoinCode = (data: any) => {
    return fetch(`${serverBaseUrl}/v1/User/LoginByMobileVerifyCode`, {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(data),
    });
};


export async function logOutApi() {
    return fetch(`${serverBaseUrl}/v1/User/logout`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function VerifyCookie(setUser,) {
    const res = await fetch(`${serverBaseUrl}/v1/user/getUser`, {
        method: "GET",
        credentials: "include",
    })
        .then((result) => (result.ok ? result.json() : null))
        .catch();
    if (res?.user) {
        setUserId(res.user.id)
        setUser({ ...res?.user, settings: res.extraData.settings });
    }
}