import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();

  const hideFooterRoutes = [
    "/BiasharaLink_Portal",
    "/DealHouse",
    "/Policy_Tracker",
    "/Asili_Markets",
    "/Trade_Pods",
  ];

  const shouldHideFooter = hideFooterRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  const getNavbarStyle = () => {
    if (location.pathname.startsWith("/BiasharaLink_Portal")) {
      return { bg: "bg-emerald-700 hover:bg-emerald-800", color: "text-white" };
    }
    if (location.pathname.startsWith("/DealHouse")) {
      return { bg: "bg-indigo-700 hover:bg-indigo-800", color: "text-white" };
    }
    if (location.pathname.startsWith("/Policy_Tracker")) {
      return { bg: "bg-slate-800 hover:bg-slate-900", color: "text-white" };
    }
    if (location.pathname.startsWith("/Asili_Markets")) {
      return { bg: "bg-gradient-to-r from-amber-900 to-orange-700", color: "text-white" };
    }
    if (location.pathname.startsWith("/Trade_Pods")) {
      return { bg: "bg-purple-700 hover:bg-purple-800", color: "text-white" };
    }
    return { bg: "bg-orange-700", color: "text-white" };
  };

  const navbarStyle = getNavbarStyle();

  const getBackgroundStyle = () => {
    // Clean, professional gradient backgrounds based on route
    if (location.pathname.startsWith("/BiasharaLink_Portal")) {
      return "bg-gradient-to-b from-emerald-50 via-white to-gray-50";
    }
    if (location.pathname.startsWith("/DealHouse")) {
      return "bg-gradient-to-b from-indigo-50 via-white to-gray-50";
    }
    if (location.pathname.startsWith("/Policy_Tracker")) {
      return "bg-gradient-to-b from-slate-50 via-white to-gray-50";
    }
    if (location.pathname.startsWith("/Asili_Markets")) {
      return "bg-gradient-to-b from-orange-50 via-white to-gray-50";
    }
    if (location.pathname.startsWith("/Trade_Pods")) {
      return "bg-gradient-to-b from-purple-50 via-white to-gray-50";
    }
    return "bg-gradient-to-b from-gray-50 via-white to-gray-50";
  };

  return (
    <div className={`flex flex-col min-h-screen ${getBackgroundStyle()} relative`}>
      {/* Subtle geometric pattern overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0
        }}
      />

      {/* Subtle gradient orbs for depth - professional and minimal */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-100/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <Navbar bg={navbarStyle.bg} color={navbarStyle.color} />

      <main className="flex-grow relative z-10">
        <Outlet context={getNavbarStyle()} />
      </main>

      {!shouldHideFooter && (
        <>
          <div className="p-5" />
          <Footer />
        </>
      )}
    </div>
  );
}