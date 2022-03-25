import { EncryptStorage } from "encrypt-storage";

const key: string = process.env.REACT_APP_KEY_STORE || 'secret';

/**
 * @see https://www.npmjs.com/package/encrypt-storage
 */
export const encryptStorage = new EncryptStorage(key, {
  storageType: 'sessionStorage',
  stateManagementUse: true,
});