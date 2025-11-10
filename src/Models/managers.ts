import { Guid, Forg,httpGettr } from "./base";
import { IEntityManager,EntityManager } from "./baseManagers";




import { Analysis   , AnalysisCreator } from "./Models/Models/Exams/Analysis"
import { Company   , CompanyCreator } from "./Models/Models/Exams/Company"
import { Exam   , ExamCreator } from "./Models/Models/Exams/Exam"
import { ImportantWords   , ImportantWordsCreator } from "./Models/Models/Exams/ImportantWords"
import { Question   , QuestionCreator, QuestionPack } from "./Models/Models/Exams/Question"
import { WritingAvatar   , WritingAvatarCreator } from "./Models/Models/Exams/Question"
import { QuestionSample   , QuestionSampleCreator } from "./Models/Models/Exams/QuestionSample"
import { Section   , SectionCreator } from "./Models/Models/Exams/Section"
import { SectionDirection   , SectionDirectionCreator } from "./Models/Models/Exams/SectionDirection"
import { SectionPart   , SectionPartCreator, SmallSectionPart } from "./Models/Models/Exams/SectionPart"
import { SectionPartSubject   , SectionPartSubjectCreator } from "./Models/Models/Exams/SectionPartSubject"
import { SectionType   , SectionTypeCreator } from "./Models/Models/Exams/SectionType"
import { SectionUserProgress   , SectionUserProgressCreator } from "./Models/Models/Exams/SectionUserProgress"
import { Subject   , SubjectCreator } from "./Models/Models/Exams/Subject"

import { MockScore, RealScoreTarget } from "./Models/Models/TargetScores";
import { StudentTaskHistory } from "./Models/Models/StudentsTask"; 
// from "./Models/Models/TargetScores";

export class Manager {
   
   
   
   ExamManager: EntityManager<Exam,number> =new EntityManager<Exam,number>("Models.Exam",ExamCreator);
   ImportantWordsManager: EntityManager<ImportantWords,number> =new EntityManager<ImportantWords,number>("Models.ImportantWords",ImportantWordsCreator);
   QuestionManager: EntityManager<Question,number> =new EntityManager<Question,number>("Models.Question",QuestionCreator);
   WritingAvatarManager: EntityManager<WritingAvatar,number> =new EntityManager<WritingAvatar,number>("Models.WritingAvatar",WritingAvatarCreator);
   QuestionSampleManager: EntityManager<QuestionSample,number> =new EntityManager<QuestionSample,number>("Models.QuestionSample",QuestionSampleCreator);
   SectionManager: EntityManager<Section,number> =new EntityManager<Section,number>("Models.Section",SectionCreator);
   SectionDirectionManager: EntityManager<SectionDirection,number> =new EntityManager<SectionDirection,number>("Models.SectionDirection",SectionDirectionCreator);
   SectionPartManager: EntityManager<SectionPart,number> =new EntityManager<SectionPart,number>("Models.Exams.SectionPart",SectionPartCreator);
   QuestionPackManager: EntityManager<QuestionPack,number> =new EntityManager<QuestionPack,number>("Models.Question.QuestionPack",QuestionPack.Creator);
   SmallSectionPartManager: EntityManager<SmallSectionPart,number> =new EntityManager<SmallSectionPart,number>("Models.Exams.SmallSectionPart",SectionPartCreator);
   
   SectionTypeManager: EntityManager<SectionType,number> =new EntityManager<SectionType,number>("Models.SectionType",SectionTypeCreator);
   
   SubjectManager: EntityManager<Subject,number> =new EntityManager<Subject,number>("Models.Subject",SubjectCreator);
}

export var manager: Manager = new Manager();
export function setManager(m:Manager){
   manager=m;
}