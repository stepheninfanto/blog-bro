import AppContainer from "./_components/AppContainer";
import { fetchAPI } from "./utils/fetch-api";

export default async function Home() {
  let i = 0;
  const posts = [
    {
      post_id: i++,
      heading: "hello heading",
      subHeading: "hello subs",
      textContent: "main lorem ",
      bannerImage: "/bannerImage.png",
    },
    {
      post_id: i++,
      heading: "hello heading",
      subHeading: "hello subs",
      textContent: "main lorem ",
      bannerImage: "/bannerImage.png",
    },
    {
      post_id: i++,
      heading: "hello heading",
      subHeading: "hello subs",
      textContent: "main lorem ",
      bannerImage: "/bannerImage.png",
    },
    {
      post_id: i++,
      heading: "hello heading",
      subHeading: "hello subs",
      textContent: "main lorem ",
      bannerImage: "/bannerImage.png",
    },
    {
      post_id: i++,
      heading: "hello heading",
      subHeading: "hello subs",
      textContent: "main lorem ",
      bannerImage: "/bannerImage.png",
    },
    {
      post_id: i++,
      heading: "hello heading",
      subHeading: "hello subs",
      textContent: "main lorem ",
      bannerImage: "/bannerImage.png",
    },
    {
      post_id: i++,
      heading: "hello heading",
      subHeading: "hello subs",
      textContent: "main lorem ",
      bannerImage: "/bannerImage.png",
    },
  ];

  const urlParamsObject = {
    populate: "*",
  };

  const postData = await fetchAPI("/blogs", urlParamsObject, {
    method: "GET",
    headers: {
      Authorization: `Bearer +${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const mappedData = postData.map(({ id, attributes }: any) => ({
    post_id: id,
    heading: attributes.heading,
    subHeading: attributes.subHeading,
    textContent: attributes.content,
    bannerImage: attributes.bannerImage.data[0].attributes.url,
  }));

  console.log(mappedData[0].bannerImage);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <>
        <AppContainer posts={mappedData} />
      </>
    </main>
  );
}
