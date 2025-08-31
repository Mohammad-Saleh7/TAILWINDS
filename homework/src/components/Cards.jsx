import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Cards({ src, title, Description }) {
  return (
    <div className="max-w-96">
      <Card className="border-none rounded-none p-10 shadow-none hover:shadow-2xl transition-all duration-200">
        <CardHeader className="flex gap-3 ">
          <Avatar>
            <AvatarImage src={src} />
          </Avatar>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{Description}</CardDescription>
          </div>
        </CardHeader>
        {/* <CardContent>
          <p className="flex items-center justify-between ">{para}</p>
        </CardContent> */}
      </Card>
    </div>
  );
}
