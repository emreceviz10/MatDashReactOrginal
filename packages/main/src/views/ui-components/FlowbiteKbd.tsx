import ArrowKeys from "src/components/ui-components/Kbd/ArrowKeys";
import DefaultKbd from "src/components/ui-components/Kbd/DefaultKbd";
import FunctionKeys from "src/components/ui-components/Kbd/FunctionKeys";
import InsideTable from "src/components/ui-components/Kbd/InsideTable";
import InsideText from "src/components/ui-components/Kbd/InsideText";
import LetterKeys from "src/components/ui-components/Kbd/LetterKeys";
import NumbersKeys from "src/components/ui-components/Kbd/NumbersKeys";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "KBD",
  },
];
const FlowbiteKbd = () => {
  return (
    <>
      <BreadcrumbComp title="KBD" items={BCrumb} />
      <div className="grid grid-cols-12 gap-30">
        {/* Default KBD*/}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <DefaultKbd />
        </div>
        {/* Inside Text KBD*/}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <InsideText />
        </div>
        {/* Inside Table KBD*/}
        <div className="col-span-12">
          <InsideTable />
        </div>
        {/* Arrow Keys KBD*/}
        <div className="lg:col-span-3 md:col-span-5 col-span-12">
          <ArrowKeys />
        </div>
        {/* Function Keys KBD*/}
        <div className="lg:col-span-9 md:col-span-7 col-span-12">
          <FunctionKeys />
        </div>
        {/* Letter Keys KBD*/}
        <div className="col-span-12">
          <LetterKeys />
        </div>
        {/* Numbers Keys KBD*/}
        <div className="col-span-12">
          <NumbersKeys />
        </div>
      </div>
    </>
  );
};

export default FlowbiteKbd;
