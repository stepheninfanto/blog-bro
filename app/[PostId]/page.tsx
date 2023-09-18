import { fetchAPI } from "@/app/utils/fetch-api";
import Image from "next/image";

export default async function getPostBySlug(slug: string) {
  const { params }: any = slug;
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/blogs`;
  const urlParamsObject = {
    filters: { id: params.PostId },
    populate: "*",
  };
  const options = {
    headers: {
      Authorization: `Bearer +${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  };
  const response = await fetchAPI(path, urlParamsObject, options);

  const mappedData = response.map(({ id, attributes }: any) => ({
    post_id: id,
    heading: attributes.heading,
    subHeading: attributes.subHeading,
    textContent: attributes.content,
    bannerImage: attributes.bannerImage.data[0].attributes.url,
  }));

  const { post_id, heading, subHeading, textContent, bannerImage } =
    mappedData[0];
  return (
    <>
      <main className="flex flex-col items-center justify-center  bg-green-50 ">
        <div className="w-1/2 p-20 bg-gray-100 min-h-screen">
          <h1 className="font-bold text-4xl ">{heading}</h1>
          <h2 className="font-bold text-2xl py-5 ">{subHeading}</h2>

          <article className="flex flex-col ">
            <div className="w-full  rounded h-80 bg-blue-200 mb-5 relative ">
              <Image src={"/vercel.svg"} alt="image" fill />
            </div>
            <div className="flex items-center">{textContent}</div>
          </article>
        </div>
        <div className="w-1/2 space-x-4 p-4 bg-gray-100 text-center fixed bottom-0">
          All Rights Reserved @2023
        </div>
      </main>
    </>
  );
}

// async function getMetaData(slug: string) {
//   const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//   const path = `/articles`;
//   const urlParamsObject = {
//     filters: { slug },
//     populate: { seo: { populate: "*" } },
//   };
//   const options = { headers: { Authorization: `Bearer ${token}` } };
//   const response = await fetchAPI(path, urlParamsObject, options);
//   return response.data;
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const meta = await getMetaData(params.slug);
//   const metadata = meta[0].attributes.seo;

//   return {
//     title: metadata.metaTitle,
//     description: metadata.metaDescription,
//   };
// }

// export default async function PostRoute({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;
//   console.log(slug);
//   const data = await getPostBySlug(slug);
//   if (data.data.length === 0) return <h2>no post found</h2>;
//   return <Post post={data.data[0]} />;
// }

// export async function generateStaticParams() {
//   const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//   const path = `/articles`;
//   const options = { headers: { Authorization: `Bearer ${token}` } };
//   const articleResponse = await fetchAPI(
//     path,
//     {
//       populate: ["category"],
//     },
//     options
//   );

//   return articleResponse.data.map(
//     (article: {
//       attributes: {
//         slug: string;
//         category: {
//           slug: string;
//         };
//       };
//     }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
//   );
// }
