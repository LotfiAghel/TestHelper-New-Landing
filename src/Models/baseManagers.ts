// @ts-nocheck
import { withResolver } from "./compatibility";
import { IIdMapper } from "./Basics/BaseModels/Basics/Basics";
import { Guid,Forg,httpGettr } from "./base";

export interface IEntityManager<T, TKEY> { };
class GetDownloadSection<TKEY>{
    startTime:number;
    data:TKEY[];
    constructor(startTime:number,data:TKEY[]){
        this.startTime=startTime;
        this.data=data;
    }
}
export class EntityManager<T extends  IIdMapper<TKEY>, TKEY> implements IEntityManager<T, TKEY> {
    
    constructor(name: string,creator: (a:any)=>T) {
        name.replaceAll(".","__");
        this.name =name.replaceAll(".","__");
        this.creator=creator;
    }
    name: string;
    creator: (a:any)=>T;
    cache:Map<TKEY,T>=new Map<TKEY,T>;
    cacheP:Map<TKEY, PromiseWithResolvers<T>>=new Map<TKEY, PromiseWithResolvers<T>>;
    subTableCache:Map<string,T[]>=new Map<string,T[]>;

    getDownloadSection :GetDownloadSection<TKEY> |undefined =undefined;
    update(x:T){
        this.cache.set(x.id,x);
        let a=this.cacheP.get(x.id);
        if(a!=undefined){
            a.resolve(x);
            this.cacheP.delete(x.id);
        }
    }
    downloadAndClear(){
        if(this.getDownloadSection!=undefined){
            var d=this.getDownloadSection.data;
            this.getDownloadSection=undefined;
            

            this.download(d);
        }
    }
    async getAll(): Promise<T[]> {
       let xa = await httpGettr.Get<T>("v1/generic/"+this.name.replace(".","__")+"/all");
       var data=xa.map(z => this.creator(z));
       data.forEach(element => {
        this.update(element);   
        });
        return data;
    }
    async get(id: Forg<T, TKEY> , useCache:boolean=true): Promise<T> {
        var x=this.cache.get(id)
        if(x!=undefined && useCache)
            return  x;
        
        var promiseR=this.cacheP.get(id);
        if(promiseR!=undefined)
            return promiseR.promise;
        
        withResolver();

        promiseR = Promise.withResolvers<T>();
        this.cacheP.set(id,promiseR);

        if(this.getDownloadSection == undefined){
            this.getDownloadSection=new GetDownloadSection<TKEY>(Date.now(),[]);
            let delay=new Promise(resolve => {
                setTimeout(resolve, 50);
            });
            delay.then((x)=>{
                return this.downloadAndClear();
            }
        );
        }
        this.getDownloadSection.data.push(id);
       
        
        if(this.getDownloadSection.data.length>30){
            this.downloadAndClear();
        }
        
        //var x=this.creator(await httpGettr.Get1<T>("v1/generic/"+this.name+"/"+id));
        //this.update(x);
        
        
        
        return promiseR.promise;
        //return x;
    }
    async getSubTable(url:string,useCache:boolean=true): Promise<T[]> {
        if(this.subTableCache.has(url) && useCache){
            return this.subTableCache.get(url)!;
        }
        var xa= await httpGettr.Get<T>(url);
        var data=xa.map(z => this.creator(z))
       // x.then((data)=>{
            this.subTableCache.set(url,data);
            data.forEach(element => {
                this.update(element);   
            });
        //});
        return data;
    }
    async download(arg0: TKEY[]) {
        if(arg0.length<1){
            return [];
        }
        if(arg0.length==1){
            var x=this.creator(await httpGettr.Get1<T>("v1/generic/"+this.name+"/"+arg0[0]));
            this.update(x);
            return [x];
        }
        var xa= await httpGettr.GetArray("v1/generic/"+this.name+"/getIds",arg0);
        var data=xa.map(z => this.creator(z));
        data.forEach(element => {
            this.update(element);   
        });
        return data;
    }
    async download2<T2>(arg0: T2[],idFunction:(x:T2)=>Forg<T,TKEY>,prepareFunction:(x:T2,r:T)=>void):Promise<T2[]> {
        //let keys=arg0.map(x=>f(x));
        const sum = arg0
                        .reduce(
                            (sum, x) => {
                                const k=idFunction(x);                                
                                let s=sum.get(k);
                                if(s==undefined){
                                    s=[];
                                    sum.set(k,s);
                                }
                                s.push(x);
                                return sum;

                            },
                         new Map<TKEY,T2[]>());
            
        var keys=Array.from( sum.keys() );                 
        for(var i in keys){
            var tmp=this.cache.get(keys[i]);
            if(tmp !=undefined)
                sum.get(keys[i])?.map(x => prepareFunction(x,tmp!));
            sum.delete(keys[i]);
        }
        keys=Array.from( sum.keys() ); 
        if(keys.length<1)
            return arg0;
        var xa= await httpGettr.GetArray("v1/generic/"+this.name+"/getIds",keys);
        var data=xa.map(z => this.creator(z));
       
        data.forEach(element => {
            sum.get(element.id)?.map(x => prepareFunction(x,element));
            this.update(element); 
        });
        arg0.map(x => ({ sectionPart: x }));
        return arg0;
       }
    /*async download3<T2,KEY2>(arg0: T2[],f:(x:T2)=>Forg<T,TKEY>) {
        var xa= await httpGettr.GetArray("v1/generic/"+this.name+"/getIds",arg0.map(x=>f(x)));
        var data=xa.map(z => this.creator(z));
        for(var i=0 ;i<arg0.length; ++i){
            f(arg0[i]).value=data[i];
            this.update(data[i]);   
        }
       
        return data;
    }*/
    async save<X>(data: { data: T }): Promise<X> {
        return await httpGettr.Post(`v1/generic/${this.name}/save`, data);
    }
    async delete<X extends { id: number }>(data:X): Promise<X> {
        return await httpGettr.instance.delete(`v1/generic/${this.name}/${data.id}`);
    }
    
};
