import {Typography} from "@/components/ui/Typography";

export default function Home() {
  return (
    <div className="p-10">
      <Typography variant={"title"}>Content Components</Typography>
        <div className="space-y-5">
            <Typography variant={"body1"} url={"/demo/typography"}>Typography</Typography>
        </div>
    </div>
  );
}
