import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

interface Tool {
  title: string;
  description: string;
  icon: any;
}

export default function ToolCard({ title, description, icon: Icon }: Tool) {
  return (
    <Card className="mt-6 w-full">
      <CardBody>
        <Icon className="h-10 w-10" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
    </Card>
  );
}
