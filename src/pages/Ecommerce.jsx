import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
// import { Stacked, Pie, Button, SparkLine } from "../components";
import { Button } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">عدد الملفات</p>
              <p className="text-2xl">55000</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="عرض الكل"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => {
            return (
              <div
                key={item.title}
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-52 p-4 pt-9 rounded-2xl"
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-lg transition-all"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} mr-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-gray-400 text-sm mt-1">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
