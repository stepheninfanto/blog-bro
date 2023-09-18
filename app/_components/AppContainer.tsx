"use client";
import React, { useState } from "react";
import Header from "./Header";
import BlogList from "./BlogList";
import Footer from "./Footer";
import CreateBlogModal from "./CreateBlogModal";

function AppContainer({ posts }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const setModalStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CreateBlogModal isOpen={isOpen} setModalStatus={setModalStatus} />
      <Header setModalStatus={setModalStatus} />
      <BlogList posts={posts} />
      <Footer />
    </>
  );
}

export default AppContainer;
