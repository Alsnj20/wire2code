import { Button } from "@/components/ui/button";
import { CloudUpload, Play } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="grid place-content-center">
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-semibold">Convert Wireframe to Code</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-[400px]">
            <h2 className="text-2xl font-semibold">Input WireFrame</h2>
            <div>
              <input type="file" accept="image/*" />
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mt-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50">
                <CloudUpload size={40} />
                <span className="text-fg-primary">Drag and drop your wireframe image or click to browse</span>
                <Button variant={"tertiary"}>
                  Upload Image
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-[400px]">
            <div>
              <label className="text-2xl font-semibold">Input WireFrame</label>
              <input type="text" placeholder="Enter text here" className="w-full p-2 border border-gray-300 rounded mt-4" />
            </div>
            <div>
              <label className="text-2xl font-semibold">Enter Descripcion (optional)</label>
              <textarea placeholder="Write description about your page" className="w-full p-2 border border-gray-300 rounded mt-4" rows={4}></textarea>
            </div>
          </div>
        </div>
        <Button className="mt-6" variant={"tertiary"}>Convert To Code <Play />
        </Button>
      </div>
    </div>
  );
}
