import { createRootRoute, Outlet } from "@tanstack/react-router";
import Ad from "components/Common/Ad";

export const Route = createRootRoute({
  component: () => (
    <div className="bg-gray-400">
      <section className=" max-w-[480px] w-screen h-screen min-w-[320px] max-h-[926px] min-h-[640px] relative shadow-2xl bg-white">
        <Outlet />
        <Ad />
      </section>
    </div>
  ),
});
