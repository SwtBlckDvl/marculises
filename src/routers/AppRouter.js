import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactMeScreen } from "../components/ContactMe/ContactMe";
import { HomeScreen } from "../components/HomeScreen/HomeScreen";
import { ProExperienceScreen } from "../components/ProExp/ProExperienceScreen";
import { WhoIAmScreen } from "../components/WhoIAmScreen/WhoIAmScreen";
import { NavigateBar } from "../layout/NavigateBar/NavigateBar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigateBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/WhoIAm" element={<WhoIAmScreen />} />
        <Route path="/ProExp" element={<ProExperienceScreen />} />
        <Route path="/Contact" element={<ContactMeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
