import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Welcome = () => {
  return (
    <Link href="/store">
      <div className="grid ps-5 justify-center mt-44 relative container max-w-2xl mx-auto scale-75 sm:scale-100 ">
        <h1 className="text-6xl sm:text-7xl text-rose-500 font-bold animate-fade-up animate-once">
          WELCOME TO SHOPPING
        </h1>
        <p className="text-3xl animate-fade-right animate-once animate-delay-1000">
          Let's take a look!
        </p>
        <span className="top-5 scale-[53%] sm:scale-100 -bottom-[400px] sm:bottom-0 -right-[80px] sm:right-0 absolute mt-5 animate-fade animate-delay-[1500ms]">
          <ShoppingBagIcon className="w-[200px] animate-delay-[1500ms] animate-wiggle animate-infinite text-mustard" />
        </span>
      </div>
    </Link>
  );
};

export default Welcome;
