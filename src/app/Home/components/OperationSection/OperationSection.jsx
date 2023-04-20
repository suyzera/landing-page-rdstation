import styles from "./OperationSection.module.scss";
import HeadingSm from "@/app/components/Typograph/HeadingSm";
import BodyMd from "@/app/components/Typograph/BodyMd";
import BodyXs from "@/app/components/Typograph/BodyXs";
import rdStationCrmIcon from "@/app/images/icons/rd-station-crm.svg";
import salesforceIcon from "@/app/images/icons/salesforce.svg";
import googleIcon from "@/app/images/icons/google.svg";
import facebookIcon from "@/app/images/icons/facebook.svg";
import linkedinIcon from "@/app/images/icons/linkedin.svg";
import wordpressIcon from "@/app/images/icons/wordpress.svg";
import hotmartIcon from "@/app/images/icons/hotmart.svg";
import pagseguroIcon from "@/app/images/icons/pagseguro.svg";
import shopifyIcon from "@/app/images/icons/shopify.svg";
import zapierIcon from "@/app/images/icons/zapier.svg";
import Image from "next/image";
import PrimaryButton from "@/app/components/Buttons/Primary";

const OperationSection = () => {
  const icons = [
    {
      component: rdStationCrmIcon,
      name: "RD Station CRM",
    },
    {
      component: salesforceIcon,
      name: "Salesforce",
    },
    {
      component: googleIcon,
      name: "Google",
    },
    {
      component: facebookIcon,
      name: "Facebook",
    },
    {
      component: linkedinIcon,
      name: "Linkedin",
    },
    {
      component: wordpressIcon,
      name: "Wordpress",
    },
    {
      component: hotmartIcon,
      name: "Hotmart",
    },
    {
      component: pagseguroIcon,
      name: "PagSeguro",
    },
    {
      component: shopifyIcon,
      name: "Shopify",
    },
    {
      component: zapierIcon,
      name: "Zapier",
    },
  ];

  return (
    <section className={styles.operation}>
      <HeadingSm>Torne sua operação de Marketing ainda mais poderosa</HeadingSm>
      <BodyMd>
        O RD Station Marketing se conecta as principais ferramentas nacionais e
        internacionais
      </BodyMd>
      <div className={styles.icons}>
        {icons.map((icon) => {
          return (
            <div className={styles.icon} key={icon.name}>
              <Image src={icon.component} alt={icon.name}></Image>
              <BodyXs>{icon.name}</BodyXs>
            </div>
          );
        })}
      </div>
      <a href="https://app.rdstation.com.br/signup" target="_blank">
        <PrimaryButton>Criar conta gratuita</PrimaryButton>
      </a>
    </section>
  );
};

export default OperationSection;
