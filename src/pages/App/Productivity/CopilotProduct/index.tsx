import CardSkew from '../../../../components/CardSkew';
import Button from '../../../../components/ListItem/Button';
import CopilotIde from './CopilotIde';

const CopilotProduct = () => {
  return (
    <CardSkew>
      <div className="flex flex-col p-16 pr-32 justify-between w-6/12">
        <p className="text-2xl text-[#7d8590] mb-6 font-medium">
          <em className="text-white">Github Copilot</em> is your AI pair programmer that empowers you to complete tasks
          55% faster by turning natural language prompts into coding suggestions.
        </p>
        <div>
          <Button className="text-[20px] py-1 font-semibold" size="none" onClick={() => {}}>
            Meet Github Copilot
          </Button>
        </div>
      </div>
      <div className="w-6/12 overflow-hidden rounded-r-md">
        <CopilotIde />
      </div>
    </CardSkew>
  );
};

export default CopilotProduct;
