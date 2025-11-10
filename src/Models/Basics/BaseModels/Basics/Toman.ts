import  { Guid,Forg,httpGettr,List,Dictionary,ForeignKey,ForeignKey2,Rial } from "../../../base";










	export enum AdminUserRole {
		NONE = 0,

		SUPER_USER = 1,

		DEVELOPER = 2,

		DATA_ENTRY = 3,

		SUPPORT = 4,

	}

	export interface IAdminUser  {
		roles : List<AdminUserRole>;

		username : string;

	}

