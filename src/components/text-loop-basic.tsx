import { TextLoop } from "@/components/ui/text-loop";

export function TextLoopBasic() {
  const year = new Date().getFullYear();

  return (
    <TextLoop interval={4} className="text-gray-500 text-xs">
      <span>© {year}</span>
      <span>Less, but better.</span>
    </TextLoop>
  );
}
