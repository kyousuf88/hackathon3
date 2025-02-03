//import Input from "@/components/ui/input";
import Image from "next/image";

<Image 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
  priority 
/>

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

function ShopFilterSection() {
  return (
    <section className="bg-[#F9F1E7] px-4 py-[31px] flex flex-col md:flex-row gap-8 justify-around items-center">
      {/* LHS */}
      <div className="flex gap-8 items-center">
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <Image
            src="/images/filter_icon.png"
            width={40}
            height={40}
            alt="filter icon"
            className="block"
          />
          <p>Filter</p>
        </div>

        <div className="hover:cursor-pointer">
          <Image src="/images/grid_icon.png"
          width={40}
          height={40}
          alt="grid icon" className="block" />
        </div>
        <div className="hover:cursor-pointer">
          <Image src="/images/list_icon.png"
          width={40}
          height={40}
          alt="list icon" className="block" />
        </div>
        <div className="hidden md:block">
          <Separator
            orientation="vertical"
            className="h-[37px] border border-customGray2"
          />
        </div>
        <p className="text-normal">Showing 1 - 16 of 32 results</p>
      </div>
      {/* RHS */}
      <div className="flex gap-8">
        <div className="flex gap-[17px] items-center">
          <p className="text-[20px]">Show</p>
          <input type="number" className="bg-white w-[65px] h-[55px]" />
        </div>
        <div className="flex gap-[17px] items-center">
          <p className="text-[20px]">Sort by</p>
          <Select>
            <SelectTrigger className="w-[180px] h-[55px]">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter</SelectLabel>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="type">Type</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}

export default ShopFilterSection;
