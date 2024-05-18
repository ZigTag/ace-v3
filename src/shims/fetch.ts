import { FetchOptions, fetch } from '@tauri-apps/api/http';
import { globalStore } from '../redux/global';

export function aceFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const initMod: FetchOptions = init as FetchOptions;

    const baseUrl = globalStore.getState().config.platform === 'win32'
        ? 'https://ace.localhost'
        : 'ace://localhost';

    if (typeof input === 'string' && input.startsWith('/')) {
        return fetch(`${baseUrl}${input as string}`, initMod);
    }
    return fetch(input as string, initMod);
}
