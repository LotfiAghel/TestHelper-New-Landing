import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../base";









	export class SessionMakeResult   {
		done : Boolean;

		sessionId : string;

		password : string;

		userId : string;

		constructor(args:{ done:Boolean,sessionId:string,password:string,userId:string }){
			this.done = args.done;

			this.sessionId = args.sessionId;

			this.password = args.password;

			this.userId = args.userId;

		}


		 toJson():SessionMakeResult{
			 //@ts-ignore

			 this["$type"]="ClientMsgs.SessionMakeResult"

			 return this;

		}


	}

export var SessionMakeResultCreator = (args:any)=> new SessionMakeResult(args)
