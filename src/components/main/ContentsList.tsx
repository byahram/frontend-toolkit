import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const ContentsList = () => {
  return (
    <ul className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-3 mt-5">
      <li className="break-words border-2 shadow-md hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-shadow duration-300">
        <Link href={`/blog/1`}>
          <div className="aspect-[16/9] relative border-b-2">
            <Image
              alt="aly image"
              className="object-cover"
              width={1932}
              height={1288}
              src="https://images.unsplash.com/photo-1639020715359-f03b05835829?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </Link>
        <div className="grid grid-cols-1 px-6 py-4">
          <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
            title
          </h2>
          <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
            <Badge variant="outline">asdfasdfasdfasdfasdfasdf</Badge>
          </div>
          <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
            description
          </div>
          <div className="text-sm text-muted-foreground">@tag</div>
        </div>
      </li>
    </ul>
  );
};

export default ContentsList;
