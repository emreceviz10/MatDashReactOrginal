

import PortfolioCards from "./PortfolioCards";
import { UserDataProvider } from "src/context/UserDataContext";

const GalleryPortfolio = () => {
  return (
    <>
      <UserDataProvider>
        <div className="container-1218 mx-auto py-12">
          <div className="grid grid-cols-12 gap-6">
            {/* GalleryCards */}
            <div className="col-span-12">
              <PortfolioCards />
            </div>
          </div>
        </div>
      </UserDataProvider>
    </>
  );
};

export default GalleryPortfolio;
