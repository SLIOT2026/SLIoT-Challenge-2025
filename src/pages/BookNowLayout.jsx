import BooKingBottombar from "@/components/BooKingBottombar";
import BookingTopBar from "@/components/BookingTopBar";
import { Outlet, useLocation } from "react-router-dom";

const BookNowLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="overflow-hidden px-[5%] lg:px-[10%] mt-15">
      <h5 className="w-full flex justify-center underline text-xl font-semibold">
        Booking Details
      </h5>
      <div className="flex w-full gap-4 justify-center">
        <div className="flex flex-col w-full">
          <BookingTopBar />
          <Outlet />
        </div>
      </div>
      <BooKingBottombar />
    </div>
  );
};

export default BookNowLayout;
