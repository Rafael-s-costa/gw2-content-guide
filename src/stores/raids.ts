import { makeCall } from './apiConnector';

export const raids = [];

export function getRaids(): any {
    return makeCall('raids')
}
