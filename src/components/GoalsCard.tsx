import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"
import { Link } from "react-router-dom";
import goal from "../assets/goal.png"



const goals = [
  {
    id: "1",
    img: goal,
    title: "Dhairyadev & Sayali's Vaction Plan 1",
    goalProgress: "11,24,00,000",
    goalAmount: "15,00,00,000",
    goalDate: "March 2035",
    goalHealth: "Excellent!",
    status: "Goal ahead by 16 months",
    primary:"#86EFAC",
    secondary:"#84CC16" 
  },
  {
    id: "2",
    img: goal,
    title: "Dhairyadev & Sayali's Vaction Plan 1",
    goalProgress: "21,24,00,0000",
    goalAmount: "5,00,00,000",
    goalDate: "jan 2035",
    goalHealth: "Good",
    status: "on track",
    primary:"#16A34A",
    secondary:"#4D7C0F" 
  },
  {
    id: "3",
    img: goal,
    title: "Dhairyadev & Sayali's Vaction Plan 1",
    goalProgress: "42,00,000",
    goalAmount: "1,00,00,000",
    goalDate: "March 2035",
    goalHealth: "weak",
    status: "Goal behind by 2 months",
    primary:"#FDE68A",
    secondary:"#F59E0B" 
  },
  {
    id: "4",
    img: goal,
    title: "Dhairyadev & Sayali's Vaction Plan 1",
    goalProgress: "11,24,00,000",
    goalAmount: "15,00,00,000",
    goalDate: "March 2035",
    goalHealth: "poor",
    status: "Goal behind by 18 months",
    primary:"#FECACA",
    secondary:"#EF4444" 
  },
  {
    id: "5",
    img: goal,
    title: "Dhairyadev & Sayali's Vaction Plan 1",
    goalProgress: "11,24,00,000",
    goalAmount: "15,00,00,000",
    goalDate: "March 2035",
    goalHealth: "",
    goalReached: "March 2035",
    status: "Goal reached 3 months ahead",
    primary:" #60A5FA",
    secondary:"#1E40AF" 
   
  },
];



const GoalsCard = () => {
  return (
    <div className={" sm:p-4 sm:pl-[60px] mt-6 max-w-7xl"}>
      <h3 className={"font-semibold text-3xl mb-6"}>Track Current Goals</h3>
      <hr/>
      <div className={"flex gap-12 flex-wrap bg-white  sm:rounded-3xl  justify-center "}>
        {goals.map((goal) => {
          return (
            <Link to="https://www.linkedin.com/in/monali-nanda-466408155/" target="_blank" >
            <Card
              key={goal.id}
              className={
                "max-w-[336px] h-[460px] hover:shadow-[0_4px_12px_#242f4e] rounded-[22px] flex flex-col p-2 mt-10 sm:ml-6 ml-1"
              }
            >
              <CardHeader
                className={
                  "flex h-[140px] flex-row border-b border-b-gray-300 gap-2"
                }
              >
                <img
                  className={"w-[100px] h-[100px]"}
                  src={goal.img}
                  alt="goal icon"
                />
                <h3 className={"font-semibold text-2xl mb-6 mt-2 "}>
                  {goal.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-6">
                <div className={"flex justify-between "}>
                  <p className={" flex flex-col"}>
                    <span className={" font-thin text-xs"}>Goal Progress</span>
                    <span>{goal.goalProgress} </span>
                  </p>
                  <p className={"flex flex-col"}>
                    {" "}
                    <span  className={" font-thin text-xs"}>Goal Amount</span>
                    <span>{goal.goalAmount}</span>
                  </p>
                </div>
                <div className={"flex justify-between mt-5"}>
                  <p className={" flex flex-col"}>
                    {" "}
                    <span  className={" font-thin text-xs"}>Goal Date</span>
                    <span>{goal.goalDate}</span>
                  </p>
                  <p className={" flex flex-col"}>
                    {" "}
                    <span  className={" font-thin text-xs" }>Goal Health</span>
                    <span style={{ color: `${goal.secondary}`}}>{goal.goalHealth}</span>
                  </p>
                </div>
              </CardContent>
              <CardFooter className={"flex justify-center flex-col items-start font-light text-sm"}>
              <Progress value={33}  style={{ backgroundColor: `${goal.primary}`}} color={goal.secondary} />
              <p>{goal.status}</p>
              </CardFooter>
            </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GoalsCard;
