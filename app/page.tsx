import TabButton from "./Components/ui/tab-button";
import TabGroup from "./Components/ui/tab-group";
import Screen from "./Components/Screen";
import DesignPanel from "./Components/DesignPanel";

export default function Home() {
  return (
    <>
      {/* Tabs  */}
      <div className="mt-5 px-2 md:px-5">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-y-4 bg-gray-100 p-4 rounded-lg">
          <div className="flex w-full gap-4 justify-between md:w-auto md:justify-start md:flex-1">
            <div className="flex">
            
            <DesignPanel />
    
            </div>

            <div className="flex md:hidden">
              <TabButton icon={"/saved.svg"} label="Saved" active={false} />
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-center md:flex-1">
            <TabGroup />
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            <TabButton icon={"/saved.svg"} label="Saved" active={false} />
          </div>
        </div>

        {/* Screen  */}
        <div className="mt-4 mb-6">
          <Screen />
        </div>
      </div>
    </>
  );
}
