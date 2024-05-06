import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import education from "../assets/education.png";
import retirement from "../assets/retirement.png";
import vacation from "../assets/vacation.png";
import weeding from "../assets/weeding.png";
import emergency from "../assets/emergency.png";

const plans = [
  {
    id: "1",
    name: "Retirement",
    details: "your old age taken care of ...",
    icon: retirement,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "2",
    name: "Emergency",
    details: "your old age taken care of ...",
    icon: emergency,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "3",
    name: "Weeding",
    details: "your old age taken care of ...",
    icon: weeding,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "4",
    name: "Vacation",
    details: "your old age taken care of ...",
    icon: vacation,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "5",
    name: "Education",
    details: "your old age taken care of ...",
    icon: education,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "6",
    name: "Retirement",
    details: "your old age taken care of ...",
    icon: retirement,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "7",
    name: "Emergency",
    details: "your old age taken care of ...",
    icon: emergency,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "8",
    name: "Weeding",
    details: "your old age taken care of ...",
    icon: weeding,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "9",
    name: "Vacation",
    details: "your old age taken care of ...",
    icon: vacation,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "10",
    name: "Retirement",
    details: "your old age taken care of ...",
    icon: retirement,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "11",
    name: "Weeding",
    details: "your old age taken care of ...",
    icon: weeding,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "12",
    name: "Vacation",
    details: "your old age taken care of ...",
    icon: vacation,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "13",
    name: "Retirement",
    details: "your old age taken care of ...",
    icon: retirement,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
  {
    id: "14",
    name: "Emergency",
    details: "your old age taken care of ...",
    icon: emergency,
    url: "https://www.linkedin.com/in/monali-nanda-466408155/",
  },
];

const HorizontalCarousel = () => {
  return (   
      <div className={`flex-1 border-l border-gray-200 sm:pl-10 sm:pr-10 pt-5 `}>
        <div
          className={
            "max-w-7xl h-auto flex p-5 flex-col sm:flex-row bg-white sm:rounded-3xl shadow-[0_4px_12px_#242f4e] "
          }
        >
          <div className=" sm:w-80">
            <h3 className={"font-semibold text-2xl mb-6 mt-2 "}>
              what finalcial goal do you want to plan today?
            </h3>
            <p className={"text-sm font-thin"}>
              Select a goal to start planning
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className=" sm:w-3/4 w-full"
          >
            <CarouselContent className="w-full">
              {plans?.map((plan) => {
                return (
                  <CarouselItem className=" basis-auto" key={plan.id}>
                    <Link to={plan.url} target="_blank" >
                      <Card
                        className={
                          " w-52 h-auto  flex flex-col justify-between border-none shadow-[0_0_3.8px_0_rgba(55,55,55,0.22)] rounded-[22px] p-3"
                        }
                      >
                        <CardHeader
                          className={""}
                        >
                          <img src={plan.icon} alt="plan icon"  className={"w-12  h-12 rounded-full"}/>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p
                            className={
                              "text-[#191919] mb-6 mt-4  font-medium text-2xl"
                            }
                          >
                            {plan.name}
                          </p>
                        </CardContent>
                        <CardFooter
                          className={"flex justify-between text-xs p-0"}
                        >
                          <span>{plan.details}%</span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious  />
            <CarouselNext className=" right-0" />
          </Carousel>
        </div>
      </div>
  );
};

export default HorizontalCarousel;
