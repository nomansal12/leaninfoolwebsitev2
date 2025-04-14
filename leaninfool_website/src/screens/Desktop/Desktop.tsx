import { DownloadIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { Slider } from "../../components/ui/slider";

// Track data for mapping
const trackData = [
  { id: 1, title: "DIS REALLY IT 150 E MIN", duration: "2:08" },
  { id: 2, title: "DIS REALLY IT 150 E MIN", duration: "2:08" },
  { id: 3, title: "DIS REALLY IT 150 E MIN", duration: "2:08" },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
      <div className="bg-[#f3f3f3] overflow-hidden w-[1440px] h-[1024px] relative">
        {/* Background image */}
        <img
          className="w-[915px] h-[550px] top-[279px] left-[452px] absolute object-cover"
          alt="Background visual"
          src="/asset-5-1.png"
        />

        {/* Header section */}
        <header className="absolute w-full h-[65px] top-0 left-0">
          <div className="absolute w-[312px] h-[23px] top-0 left-0 bg-black" />
          <div className="absolute w-[312px] h-[23px] top-0 left-[1128px] bg-black" />
          <img
            className="absolute w-[918px] h-[65px] top-0 left-[273px] object-cover"
            alt="Header decoration"
            src="/topblackbar.png"
          />
        </header>

        {/* Logo */}
        <img
          className="w-[273px] h-[82px] top-[42px] left-9 absolute object-cover"
          alt="Logo"
          src="/asset-3-1.png"
        />

        {/* Sound Libraries Button */}
        <Button className="absolute w-[243px] h-[68px] top-[45px] left-[1153px] shadow-[0px_4px_1.1px_#00000040] rounded-[31.5px] bg-[#fcfcfc] hover:bg-[#f0f0f0]">
          <span className="[font-family:'Days_One',Helvetica] font-normal text-black text-xl">
            SOUND LIBRARIES
          </span>
        </Button>

        {/* Main headings */}
        <div className="absolute left-[42px]">
          <h1 className="absolute w-[1741px] top-[92px] left-[-31px] [text-shadow:0px_4px_7.5px_#00000040] [font-family:'Days_One',Helvetica] font-normal text-black text-8xl">
            INSTRUMENTALS
          </h1>
          <h1 className="absolute w-[873px] top-[218px] left-0 [text-shadow:0px_4px_7.5px_#00000040] [font-family:'Days_One',Helvetica] font-normal text-black text-8xl">
            BEATS
          </h1>
          <h1 className="absolute w-[873px] top-[303px] left-0 [text-shadow:0px_4px_7.5px_#00000040] [font-family:'Days_One',Helvetica] font-normal text-black text-8xl">
            MUSIC
          </h1>
        </div>

        {/* Track list container */}
        <Card className="absolute w-[729px] h-[382px] top-[361px] left-[520px] bg-transparent border-0 shadow-none">
          <ScrollArea className="h-full w-full rounded-md">
            <CardContent className="p-0 space-y-4">
              {trackData.map((track) => (
                <Card
                  key={track.id}
                  className="w-[719px] h-[90px] bg-white/65 rounded-[19px] shadow-none border-0"
                >
                  <CardContent className="p-0 flex items-center h-full">
                    <img
                      className="w-16 h-16 ml-[11px] object-cover"
                      alt="Track thumbnail"
                      src="/469484640-1243828636727907-1826768936638789440-n-1-3.png"
                    />
                    <div className="ml-[27px]">
                      <p className="[font-family:'Courier_Prime',Helvetica] font-bold text-black text-xl">
                        {track.title}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <span className="[font-family:'Courier_Prime',Helvetica] font-bold text-[#4b4b4b] text-xl mr-[108px]">
                        {track.duration}
                      </span>
                      <Button variant="ghost" className="p-0 mr-[25px]">
                        <DownloadIcon className="w-[42px] h-8" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
            <ScrollBar
              orientation="vertical"
              className="w-[11px] bg-[#d9d9d9] rounded-[5.5px]"
            />
          </ScrollArea>
        </Card>

        {/* Volume slider */}
        <div className="absolute w-[34px] h-[172px] top-[776px] left-[188px]">
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            orientation="vertical"
            className="h-full"
          />
        </div>

        {/* Audio player */}
        <Card className="absolute w-[1180px] h-[90px] top-[879px] left-[159px] bg-[#4d4d4dc2] rounded-[19px] border-0">
          <CardContent className="p-0 flex items-center h-full">
            <img
              className="w-[66px] h-[66px] ml-[96px] object-cover"
              alt="Current track thumbnail"
              src="/469484640-1243828636727907-1826768936638789440-n-1-3.png"
            />
            <div className="ml-[38px]">
              <p className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Days_One',Helvetica] font-normal text-[#e7e7e7] text-xs">
                LEANINFOOL
              </p>
              <p className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Days_One',Helvetica] font-normal text-white text-xs">
                DIS REALLY IT 150 E MIN
              </p>
            </div>
            <div className="flex items-center ml-[29px] space-x-3">
              <Button variant="ghost" className="p-0">
                <img
                  className="w-[27px] h-8"
                  alt="Previous"
                  src="/asset-4-1.png"
                />
              </Button>
              <Button variant="ghost" className="p-0">
                <img
                  className="w-[39px] h-[38px]"
                  alt="Play"
                  src="/asset-1-1.png"
                />
              </Button>
              <Button variant="ghost" className="p-0">
                <img className="w-[27px] h-8" alt="Next" src="/asset-3-2.png" />
              </Button>
            </div>
            <img
              className="ml-auto w-[561px] h-[70px] mr-[34px] object-cover"
              alt="Audio waveform"
              src="/8a491796-293e-44e6-898e-8dfd6da4ccd4-1.png"
            />
          </CardContent>
        </Card>

        {/* Bottom border */}
        <div className="absolute w-[1417px] h-[23px] top-[1001px] left-[23px] bg-black rotate-180" />

        {/* Left border */}
        <div className="absolute w-[1024px] h-[23px] top-[500px] left-[-500px] bg-black rotate-90" />
      </div>
    </div>
  );
};
