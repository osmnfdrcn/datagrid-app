import { SocialMediaDataType, columns } from "./TableColumns";
import { DataTableWrapper } from "./DataTableWrapper";

async function getData(): Promise<SocialMediaDataType[]> {
  // Fetch data from your API here.
  return [
    {
      id: "0",
      socialLink: "instagram.com/mobilerast",
      socialName: "instagram",
      description:
        "We'll help you to finish your development project successfully.",
    },
    {
      id: "1",
      socialLink: "tr.linkedin.com/company/rastmobile",
      socialName: "linkedin",
      description:
        "Hire vetted developers from Rast Mobile to scale up your tech projects.",
    },
    {
      id: "2",
      socialLink: "behance.net/rastmobile",
      socialName: "behance",
      description:
        "Software Development Agency Rast Mobile Information Technology Ltd.",
    },
    {
      id: "3",
      socialLink: "twitter.com/rastmobile",
      socialName: "twitter",
      description:
        "Software Development Agency Rast Mobile Information Technology Ltd.",
    },
  ];
}

export default async function DataTable() {
  const data = await getData();

  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <DataTableWrapper columns={columns} data={data} />
    </div>
  );
}
