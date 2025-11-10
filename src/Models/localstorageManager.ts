import { localStorageManagertype, nextUrlType } from 'components/exam/types';
import { responseLocalStorageKey } from '../consts';
import { AxiosResponse } from 'axios';

function isQuotaExceededError(err: unknown): boolean {
    return (
      err instanceof DOMException &&
      (err.code === 22 ||
        err.code === 1014 ||
        err.name === "QuotaExceededError" ||
        err.name === "NS_ERROR_DOM_QUOTA_REACHED")
    );
  }


export const localStorageManager :localStorageManagertype = {
    Loadsettings(){
        return localStorageManager.load('settings');
    },
    saveSettings(settings){
        localStorageManager.save('settings',settings);
    },
    saveResponses(key: string, response: any) {
        const storageResponse = this.load(responseLocalStorageKey);
        const responses = storageResponse ? storageResponse : {};
        responses[key] = response;
        this.save(responseLocalStorageKey, responses);
    },
    removeItem(key: string) {
        localStorage.removeItem(key);
    },  
    loadResponsebyId(responseId: string) {
        const allresponses = this.load(responseLocalStorageKey);
        if (!allresponses) return null;
        return allresponses[responseId];
    },

    save(key: string, item: object) {
        localStorage.setItem(key, JSON.stringify(item))
    },

    
    load(key: string) {
        try {
            const item = localStorage.getItem(key);
            return JSON.parse(item);
        } catch {
            return null
        }
    },
    
    saveExamState(sessionId: string, lastPart: nextUrlType) {
        const localData = localStorage.getItem('examsState')
        const savedExams = localData ? JSON.parse(localData) : {};
        savedExams[sessionId] = lastPart; 
        const stringData= JSON.stringify(savedExams);
        localStorage.setItem('examsState',stringData);
    },
    
    saveManager(body) {
        const IdTobeSaved=`examManager:${body.examPartSessionId}`;
        sessionStorage.setItem(IdTobeSaved, JSON.stringify(body));
    },
    
    loadManager(id) {
        const managerId=`examManager:${id}`;
        const manager = sessionStorage.getItem(managerId);
        sessionStorage.removeItem(managerId);
        if (manager) {
            return JSON.parse(manager);
        }
        return null;
    },

    savefailedRequestLogs(log: string) {
        try{    
            const failedRequests: (AxiosResponse | string)[] = localStorageManager.load<AxiosResponse[]>('logs') || [];
            failedRequests.push(log);
            localStorageManager.save('logs', failedRequests);
        }catch(e){
            if(isQuotaExceededError(e)){
                localStorage.removeItem('logs');
                const newLogs = [log]
                localStorageManager.save('logs', newLogs);
            }
        }
    }
};