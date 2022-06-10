import { sendGet } from '~/utils/httpRequest';

export const getListUser = (payload: any) => sendGet('/user', payload);
