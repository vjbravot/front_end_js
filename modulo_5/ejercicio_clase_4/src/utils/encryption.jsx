import CryptoJS from "crypto-js"

const SECRET_KEY="my_secret_key_safeapp"

export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

export const decryptData = (data) => {
    try {
        const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.utf8));
    } catch (error) {
        console.log(error)
    }
}