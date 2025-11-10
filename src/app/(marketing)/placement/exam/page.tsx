import ExamClientPage from "@/components/ui/ExamClientPage";
// import Loading from "@/components/Loading";
// import { manager } from "@/Models/managers";
import {
  Question,
  QuestionTrueFalseOption,
} from "@/Models/Models/Models/Exams/Question";
import { Loading01 } from "@untitledui/icons";
import { Suspense } from "react";



const getQuestions = async (): Promise<Question[]> => {
  return fetch(
    `https://testhelper.com/toefl-api/v1/generic/Models__Section/6454/questions`,
    {
      method: "get",
      credentials: "include",
    },
  )
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return data ? JSON.parse(data) : [];
    });
};

export default async function ExamPage() {
  const questions = await getQuestions();

  return <Suspense fallback={<Loading01 />}>
    <ExamClientPage questoins={questions as QuestionTrueFalseOption[]} />
  </Suspense>;
}
