import HeadingComponent from "@/components/heading-component/heading-component";

export default function ERROR404() {
  return (
    <div className="flex flex-col items-center mt-6">
      <HeadingComponent className=" text-red-500" text="404" />
      <h2 style={{ color: "red" }}>Ooops, Page dones not exist in this universe</h2>
      <h2>Page not found</h2>
    </div>
  );
}
