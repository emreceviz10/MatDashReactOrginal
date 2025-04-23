import { Avatar } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";
import CodeModal from "../CodeModal";

import user3 from '/src/assets/images/profile/user-3.jpg';
import user4 from '/src/assets/images/profile/user-4.jpg';
import user5 from '/src/assets/images/profile/user-5.jpg';


const DotIndicator = () => {
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h4 className="text-lg font-semibold">Dot indicator</h4>
          </div>
          <CodeModal>
            {`
      import { Avatar } from "flowbite-react";
      
      <div className="flex flex-wrap gap-2">
        <Avatar img="/src/assets/images/profile/user-2.jpg" status="online" />
        <Avatar
          img={user3}
          rounded
          status="busy"
          statusPosition="top-right"
        />
        <Avatar
          img={user4}
          status="offline"
          statusPosition="bottom-left"
        />
        <Avatar
          img={user5}
          rounded
          status="away"
          statusPosition="bottom-right"
        />
      </div>  
                `}
          </CodeModal>
        </div>
        <div className="flex flex-wrap gap-2">
          <Avatar img="/src/assets/images/profile/user-2.jpg" status="online" />
          <Avatar
            img={user3}
            rounded
            status="busy"
            statusPosition="top-right"
          />
          <Avatar
            img={user4}
            status="offline"
            statusPosition="bottom-left"
          />
          <Avatar
            img={user5}
            rounded
            status="away"
            statusPosition="bottom-right"
          />
        </div>
      </CardBox>
    </div>
  );
};

export default DotIndicator;
