import HeadingLg from "../components/Typograph/HeadingLg";
import HeadingMd from "../components/Typograph/HeadingMd";
import HeadingSm from "../components/Typograph/HeadingSm";
import HeadingXs from "../components/Typograph/HeadingXs";
import SubtitleSm from "../components/Typograph/SubtitleSm";
import SubtitleXs from "../components/Typograph/SubtitleXs";
import BodyLg from "../components/Typograph/BodyLg";
import BodyMd from "../components/Typograph/BodyMd";
import BodyXs from "../components/Typograph/BodyXs";

const tableInfo = [
  {
    component: <HeadingLg />,
    title: "Heading Lg",
    family: "Darker Grotesque",
    desktopSize: "56",
    mobileSize: "40",
    lineHeight: "100%",
    weight: "Black",
  },
  {
    component: <HeadingMd />,
    title: "Heading Md",
    family: "Darker Grotesque",
    desktopSize: "40",
    mobileSize: "32",
    lineHeight: "100%",
    weight: "Black",
  },
  {
    component: <HeadingSm />,
    title: "Heading Sm",
    family: "Darker Grotesque",
    desktopSize: "32",
    mobileSize: "24",
    lineHeight: "110%",
    weight: "Black",
  },
  {
    component: <HeadingXs />,
    title: "Heading Xs",
    family: "Darker Grotesque",
    desktopSize: "24",
    mobileSize: "20",
    lineHeight: "110%",
    weight: "Extra Bold",
  },
  {
    component: <SubtitleSm />,
    title: "Subtitle Sm",
    family: "Nunito ",
    desktopSize: "20",
    mobileSize: "16",
    lineHeight: "140%",
    weight: "Regular",
  },
  {
    component: <SubtitleXs />,
    title: "Subtitle Xs",
    family: "Nunito Sans",
    desktopSize: "14",
    mobileSize: "14",
    lineHeight: "120%",
    weight: "Regular",
  },
  {
    component: <BodyLg />,
    title: "Body Lg",
    family: "Nunito Sans",
    desktopSize: "20",
    mobileSize: "20",
    lineHeight: "120%",
    weight: "Regular",
  },
  {
    component: <BodyMd />,
    title: "Body Md",
    family: "Nunito Sans",
    desktopSize: "16",
    mobileSize: "16",
    lineHeight: "120%",
    weight: "Regular",
  },
  {
    component: <BodyXs />,
    title: "Body Xs",
    family: "Nunito Sans",
    desktopSize: "14",
    mobileSize: "14",
    lineHeight: "120%",
    weight: "Regular",
  },
];

export default tableInfo;
